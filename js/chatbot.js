// ════════════════════════════════════════════════════════════════════
//  URBANSON NAVOJOA — Chatbot con IA
//  La IA responde SIEMPRE usando el contexto completo del sistema.
//  El FAQ solo se usa como fallback si la API no está disponible.
// ════════════════════════════════════════════════════════════════════

(function () {

    // ─── CONTEXTO COMPLETO DEL SISTEMA ───────────────────────────────
    const SYSTEM_PROMPT_BASE = `Eres el asistente virtual de UrbanSon Navojoa, plataforma de transporte público de Navojoa, Sonora, México.

    Tienes acceso COMPLETO a toda la información del sistema: rutas trazadas, paradas con sus IDs, horarios reales por parada de cada camión, y datos de encuestas a usuarios.

    ════════════════════════════════
    INFORMACIÓN GENERAL DEL SERVICIO
    ════════════════════════════════
    - Servicio de lunes a domingo, generalmente de 6:00 a 20:00 hrs
    - El Circuito 7 (Sonora Express) inicia a las 5:50
    - El Circuito 4 Sonora (Línea 2-6) inicia a las 6:20
    - Costo del pasaje: $10 MXN general, $5 MXN estudiantes y tercera edad
    - Total: 7 circuitos con 11 variantes/lados

    ════════════════════════════════
    PÁGINAS DE LA PLATAFORMA
    ════════════════════════════════
    - inicio.html → página principal con mapa mini y estadísticas
    - rutas.html → mapa interactivo con todas las rutas trazadas
    - horarios.html → mapa de paradas con horarios por ruta; botón GPS
    - analisis.html → gráficas y datos de encuestas a usuarios
    - reportes.html → formulario para quejas y sugerencias

    ════════════════════════════════
    INSTRUCCIONES DE RESPUESTA
    ════════════════════════════════
    - Responde SIEMPRE en español, de forma amigable, clara y concisa.
    - Tienes los horarios EXACTOS por parada: cuando pregunten por próximas salidas en una parada, usa esos datos reales. Si la parada no tiene horario real, usa la frecuencia estimada.
    - Para calcular el próximo camión: filtra las horas de la parada que sean >= hora actual y muestra las 3 siguientes.
    - Cuando pregunten por una colonia o lugar, busca en las colonias y paradas del contexto y di exactamente qué rutas pasan.
    - Solo redirige a rutas.html u horarios.html cuando el usuario quiera VER el mapa interactivo, no para dar información básica.
    - Usa los nombres exactos de las rutas.
    - Puedes usar emojis con moderación.
    - Si el usuario pregunta sobre datos de la encuesta (calificaciones, problemas, opiniones), responde con los datos reales del análisis.
    - No inventes datos que no estén en el contexto.

    A continuación tienes TODOS los datos actuales del sistema:

    `;    

    // ─── FAQ DE EMERGENCIA (solo si la API falla) ─────────────────────
    const FAQ_FALLBACK = [
        {
            keywords: ['horario', 'hora', 'cuando', 'cuándo', 'abre', 'cierra'],
            respuesta: '🕕 El servicio opera de <strong>6:00 a 20:00 hrs</strong>. Consulta la sección <a href="horarios.html" style="color:#7a1028;font-weight:600;">Horarios</a> para ver paradas cercanas.'
        },
        {
            keywords: ['costo', 'precio', 'tarifa', 'cuánto', 'cuanto', 'pasaje'],
            respuesta: '💰 El pasaje cuesta <strong>$10 MXN</strong> en general y <strong>$5 MXN</strong> para estudiantes y personas de la tercera edad.'
        },
        {
            keywords: ['ruta', 'rutas', 'circuito'],
            respuesta: '🚌 Hay <strong>7 circuitos</strong> con 11 variantes. Ve el mapa completo en <a href="rutas.html" style="color:#7a1028;font-weight:600;">Rutas</a>.'
        },
        {
            keywords: ['parada', 'cercana', 'cerca', 'gps', 'ubicación'],
            respuesta: '📍 Activa tu GPS en <a href="horarios.html?gps=1" style="color:#7a1028;font-weight:600;">Horarios</a> para ver las paradas y horarios más cercanos a ti.'
        },
        {
            keywords: ['reporte', 'queja', 'sugerencia'],
            respuesta: '📝 Envía tu reporte en la sección <a href="reportes.html" style="color:#7a1028;font-weight:600;">Reportes</a>.'
        },
        {
            keywords: ['hola', 'buenas', 'buenos', 'saludos'],
            respuesta: '¡Hola! 👋 Soy el asistente de <strong>UrbanSon Navojoa</strong>. En este momento no puedo conectarme al servidor, pero puedo ayudarte con información básica. ¿Qué necesitas?'
        },
    ];

    // ─── HISTORIAL DE CONVERSACIÓN ────────────────────────────────────
    let historial = [];

    // ─── LLAMADA A LA API DE ANTHROPIC ───────────────────────────────
    async function consultarIA(mensajeUsuario) {
        const ahora      = new Date();
        const horaActual = ahora.toLocaleTimeString('es-MX', { hour:'2-digit', minute:'2-digit', hour12:false });
        const diaActual  = ahora.toLocaleDateString('es-MX', { weekday:'long' });

        // Construir contexto dinámico con datos reales
        const contexto = (typeof window.CHATBOT_CONTEXTO !== 'undefined')
            ? window.CHATBOT_CONTEXTO.build(window.CHATBOT_PARADAS || [])
            : '';

        const systemPrompt = SYSTEM_PROMPT_BASE + contexto;

        const mensajeConHora = `[Hora actual: ${horaActual} hrs, ${diaActual}]\n\n${mensajeUsuario}`;

        historial.push({ role: 'user', content: mensajeConHora });

        const respuesta = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model:      'claude-sonnet-4-20250514',
                max_tokens: 600,
                system:     systemPrompt,
                messages:   historial
            })
        });

        if (!respuesta.ok) throw new Error('Error API');

        const data           = await respuesta.json();
        const textoRespuesta = data.content.map(b => b.text || '').join('');

        historial[historial.length - 1] = { role: 'user', content: mensajeUsuario };
        historial.push({ role: 'assistant', content: textoRespuesta });
        if (historial.length > 12) historial = historial.slice(-12);

        return textoRespuesta;
    }

    // ─── FALLBACK LOCAL (solo cuando la API no responde) ─────────────
    function buscarFallback(mensaje) {
        const texto = mensaje.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        for (const faq of FAQ_FALLBACK) {
            if (faq.keywords.some(kw => texto.includes(kw.normalize('NFD').replace(/[\u0300-\u036f]/g, '')))) {
                return faq.respuesta;
            }
        }
        return 'Lo siento, no pude conectarme al servidor en este momento. Puedes consultar <a href="rutas.html" style="color:#7a1028;">Rutas</a> y <a href="horarios.html" style="color:#7a1028;">Horarios</a> para información detallada. 🙏';
    }

    // ─── ENVIAR MENSAJE ───────────────────────────────────────────────
    async function enviarMensaje() {
        const input   = document.getElementById('chatbot-input');
        const sendBtn = document.getElementById('chatbot-send');
        const texto   = input.value.trim();
        if (!texto) return;

        agregarMensaje(texto, 'user');
        input.value      = '';
        sendBtn.disabled = true;

        // Indicador de escritura
        const typing     = document.createElement('div');
        typing.className = 'bot-msg typing-indicator';
        typing.innerHTML = '<span></span><span></span><span></span>';
        document.getElementById('chatbot-messages').appendChild(typing);
        scrollChat();

        try {
            const respuesta = await consultarIA(texto);
            typing.remove();
            agregarMensaje(respuesta, 'bot');
        } catch (err) {
            typing.remove();
            agregarMensaje(buscarFallback(texto), 'bot');
        }

        sendBtn.disabled = false;
        input.focus();
    }

    // ─── UTILIDADES ───────────────────────────────────────────────────
    function agregarMensaje(texto, tipo) {
        const messages = document.getElementById('chatbot-messages');
        const burbuja  = document.createElement('div');
        burbuja.className = tipo === 'bot' ? 'bot-msg' : 'user-msg';
        burbuja.innerHTML = texto;
        messages.appendChild(burbuja);
        scrollChat();
    }

    function scrollChat() {
        const m = document.getElementById('chatbot-messages');
        if (m) m.scrollTop = m.scrollHeight;
    }

    // ─── ABRIR / CERRAR ───────────────────────────────────────────────
    window.abrirChatbot = function () {
        const box  = document.getElementById('chatbot-box');
        const hint = document.getElementById('chatbot-hint');
        if (hint) hint.remove();

        if (box.style.display === 'flex') {
            box.style.display = 'none';
            return;
        }
        box.style.display = 'flex';

        const messages = document.getElementById('chatbot-messages');
        if (messages.childElementCount === 0) {
            agregarMensaje('¡Hola! 👋 Soy el asistente de <strong>UrbanSon Navojoa</strong>.<br>Puedo decirte qué rutas pasan por tu colonia, cuándo viene el próximo camión, cómo llegar a un lugar y más. ¿En qué te ayudo?', 'bot');
            mostrarSugerencias();
        }
        document.getElementById('chatbot-input').focus();
    };

    // ─── CHIPS DE SUGERENCIAS ─────────────────────────────────────────
    function mostrarSugerencias() {
        const messages = document.getElementById('chatbot-messages');
        const chips    = document.createElement('div');
        chips.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;';

        const sugerencias = [
            '¿A qué hora viene el próximo camión?',
            '¿Cómo llego al ITSON?',
            '¿Qué rutas pasan por Pueblo Viejo?',
            '¿Cuánto cuesta el pasaje?',
        ];

        sugerencias.forEach(s => {
            const chip = document.createElement('button');
            chip.textContent = s;
            chip.style.cssText = `
                font-size:11px;padding:4px 10px;border-radius:20px;
                border:1.5px solid #7a1028;background:white;color:#7a1028;
                cursor:pointer;font-family:'Outfit',sans-serif;font-weight:600;
                transition:all 0.15s;
            `;
            chip.onmouseenter = () => { chip.style.background = '#7a1028'; chip.style.color = 'white'; };
            chip.onmouseleave = () => { chip.style.background = 'white';   chip.style.color = '#7a1028'; };
            chip.onclick = () => {
                chips.remove();
                document.getElementById('chatbot-input').value = s;
                enviarMensaje();
            };
            chips.appendChild(chip);
        });

        messages.appendChild(chips);
        scrollChat();
    }

    // ─── ESTILOS ANIMACIONES ──────────────────────────────────────────
    const estilos = document.createElement('style');
    estilos.textContent = `
        .typing-indicator {
            display:flex;align-items:center;gap:4px;
            padding:10px 14px !important;
        }
        .typing-indicator span {
            width:7px;height:7px;background:#7a1028;
            border-radius:50%;animation:bounce 1.2s infinite;
        }
        .typing-indicator span:nth-child(2) { animation-delay:.2s; }
        .typing-indicator span:nth-child(3) { animation-delay:.4s; }
        @keyframes bounce {
            0%,60%,100% { transform:translateY(0);opacity:.6; }
            30%         { transform:translateY(-6px);opacity:1; }
        }
        #chatbot-box { animation:slideUp .25s ease; }
        @keyframes slideUp {
            from { opacity:0;transform:translateY(16px); }
            to   { opacity:1;transform:translateY(0); }
        }
        #chatbot-input::placeholder { color:#bbb; }
        #chatbot-send:hover    { opacity:.85;cursor:pointer; }
        #chatbot-send:disabled { opacity:.4;cursor:not-allowed; }
        .bot-msg a { color:#7a1028;font-weight:600; }
    `;
    document.head.appendChild(estilos);

    // ─── INYECTAR HTML ────────────────────────────────────────────────
    function inyectarHTML() {
        if (document.getElementById('chatbot-container')) return;

        const container = document.createElement('div');
        container.id    = 'chatbot-container';
        container.innerHTML = `
            <div id="chatbot-box">
                <div id="chatbot-header">
                    <span>🚌 Asistente UrbanSon</span>
                    <button onclick="abrirChatbot()"
                        style="background:none;border:none;color:white;font-size:18px;
                               cursor:pointer;float:right;margin-top:-2px;opacity:0.8;">✕</button>
                </div>
                <div id="chatbot-messages"></div>
                <div id="chatbot-input-area">
                    <input id="chatbot-input" type="text"
                           placeholder="Escribe tu pregunta..."
                           onkeydown="if(event.key==='Enter') window._chatbotEnviar()">
                    <button id="chatbot-send" onclick="window._chatbotEnviar()">➤</button>
                </div>
            </div>
        `;
        document.body.appendChild(container);

        const btn = document.getElementById('chatbot-btn');
        if (btn) btn.onclick = abrirChatbot;
    }

    window._chatbotEnviar = enviarMensaje;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inyectarHTML);
    } else {
        inyectarHTML();
    }

})();
