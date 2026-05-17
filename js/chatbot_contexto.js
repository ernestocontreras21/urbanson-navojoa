// ════════════════════════════════════════════════════════════════
//  chatbot_contexto.js
//  Extrae datos de rutas_data.js, horarios_reales.js y resultados.js
//  y los convierte en texto plano para el system prompt del chatbot.
//  Debe cargarse DESPUÉS de esos tres archivos y ANTES de chatbot.js
// ════════════════════════════════════════════════════════════════

window.CHATBOT_CONTEXTO = (function () {

    function buildContextoRutas() {
        if (typeof RUTAS_COORDENADAS === 'undefined') return '';
        const nombres = {
            0:'Circuito 1A — Laureles–Jacarandas', 1:'Circuito 1B — Girasoles–Rosales',
            2:'Circuito 2 — Tierra y Libertad (Línea 7)', 3:'Circuito 3A — Pueblo Viejo–Misioneros',
            4:'Circuito 3B — Pueblo Viejo–Misioneros', 5:'Circuito 4 — Sonora (Línea 2-6)',
            6:'Circuito 4 — Quintana Roo', 7:'Circuito 5 — Tetanchopo',
            8:'Circuito 6A — Deportiva–Fovissste', 9:'Circuito 6B — Deportiva–Fovissste',
            10:'Circuito 7 — Sonora Express',
        };
        let txt = '=== RUTAS ===\n';
        RUTAS_COORDENADAS.forEach(r => {
            const nombre = r.nombre || nombres[r.indice] || `Circuito ${r.indice}`;
            txt += `• ${nombre}`;
            if (r.colonias?.length) txt += ` | Colonias: ${r.colonias.join(', ')}`;
            txt += '\n';
        });
        return txt;
    }

    function buildContextoHorarios() {
        if (typeof HORARIOS_REALES === 'undefined') return '';
        let txt = '\n=== HORARIOS ===\n';
        HORARIOS_REALES.forEach(c => {
            const paradaIds = c.vueltas.length > 0 ? Object.keys(c.vueltas[0].paradas) : [];
            txt += `[${c.unidad}] ruta:${c.id_ruta} | `;
            const resumen = paradaIds.slice(0, 3).map(pid => {
                const horas = c.vueltas.map(v => v.paradas[pid]).filter(Boolean);
                return horas.length ? `P${pid}:${horas[0]}-${horas[horas.length-1]}` : '';
            }).filter(Boolean);
            txt += resumen.join(' | ') + '\n';
        });
        return txt;
    }

    function buildContextoParadas(paradas) {
        if (!paradas?.length) return '';
        let txt = '\n=== PARADAS ===\n';
        paradas.forEach(p => { txt += `ID${p.id}:${p.nombre}[${p.rutaIds.join(',')}]\n`; });
        return txt;
    }

    function buildContextoAnalisis() {
        if (typeof DATOS_ANALISIS === 'undefined') return '';
        const d = DATOS_ANALISIS, res = d.resumen || {};
        let txt = '\n=== ENCUESTA ===\n';
        txt += `Respuestas:${res.total_respuestas} | Calificación:${res.calificacion_promedio}/5 | Problema frecuente:${res.problema_frecuente} | Ruta más usada:${res.ruta_mas_usada} | Hora pico:${res.hora_pico}\n`;
        if (d.problemas) txt += 'Problemas: ' + Object.entries(d.problemas).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k}:${v}`).join(', ') + '\n';
        return txt;
    }

    // ─── FUNCIÓN PÚBLICA ──────────────────────────────────────────
    // Llama esto desde cada página pasando el arreglo PARADAS local
    function build(paradasLocales) {
        return [
            buildContextoRutas(),
            buildContextoHorarios(),
            buildContextoParadas(paradasLocales),
            buildContextoAnalisis(),
        ].filter(Boolean).join('\n');
    }

    return { build };

})();
