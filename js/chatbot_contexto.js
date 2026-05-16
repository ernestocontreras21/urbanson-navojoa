// ════════════════════════════════════════════════════════════════
//  chatbot_contexto.js
//  Extrae datos de rutas_data.js, horarios_reales.js y resultados.js
//  y los convierte en texto plano para el system prompt del chatbot.
//  Debe cargarse DESPUÉS de esos tres archivos y ANTES de chatbot.js
// ════════════════════════════════════════════════════════════════

window.CHATBOT_CONTEXTO = (function () {

    // ─── 1. RUTAS Y PARADAS (rutas_data.js) ──────────────────────
    function buildContextoRutas() {
        if (typeof RUTAS_COORDENADAS === 'undefined') return '';

        const nombres = {
            0:  'Circuito 1 Lado A — Laureles – Jacarandas',
            1:  'Circuito 1 Lado B — Girasoles – Rosales',
            2:  'Circuito 2 — Tierra y Libertad – Jiménez (Línea 7)',
            3:  'Circuito 3 Lado A — Pueblo Viejo – Misioneros',
            4:  'Circuito 3 Lado B — Pueblo Viejo – Misioneros',
            5:  'Circuito 4 — Sonora (Línea 2-6)',
            6:  'Circuito 4 — Quintana Roo',
            7:  'Circuito 5 — Tetanchopo',
            8:  'Circuito 6 Lado A — Deportiva – Fovissste',
            9:  'Circuito 6 Lado B — Deportiva – Fovissste',
            10: 'Circuito 7 — Sonora Express',
        };

        let txt = '=== RUTAS DISPONIBLES ===\n';
        RUTAS_COORDENADAS.forEach(r => {
            const nombre = r.nombre || nombres[r.indice] || `Circuito índice ${r.indice}`;
            txt += `• ${nombre}\n`;
            if (r.descripcion) txt += `  Recorrido: ${r.descripcion}\n`;
            if (r.colonias && r.colonias.length)
                txt += `  Colonias/zonas: ${r.colonias.join(', ')}\n`;
        });
        return txt;
    }

    // ─── 2. HORARIOS REALES (horarios_reales.js) ─────────────────
    function buildContextoHorarios() {
        if (typeof HORARIOS_REALES === 'undefined') return '';

        let txt = '\n=== HORARIOS REALES POR PARADA ===\n';

        HORARIOS_REALES.forEach(camion => {
            txt += `\n[${camion.unidad}] id_ruta:${camion.id_ruta}\n`;
            const paradaIds = camion.vueltas.length > 0
                ? Object.keys(camion.vueltas[0].paradas) : [];

            paradaIds.forEach(pid => {
                const horas = camion.vueltas
                    .map(v => v.paradas[pid])
                    .filter(Boolean);
                if (horas.length === 0) return;
                // Solo primera, última y total — no todas las horas para ahorrar tokens
                txt += `  Parada ${pid}: ${horas[0]}–${horas[horas.length-1]}, cada ~${calcularFrecuencia(horas)} min (${horas.length} salidas)\n`;
                // Incluir todas las horas para que la IA pueda calcular la próxima
                txt += `    Horario completo: ${horas.join(' | ')}\n`;
            });
        });
        return txt;
    }

    // Helper: calcula frecuencia promedio entre salidas
    function calcularFrecuencia(horas) {
        if (horas.length < 2) return '?';
        const toMin = h => { const [hh,mm] = h.split(':').map(Number); return hh*60+mm; };
        const diffs = [];
        for (let i = 1; i < Math.min(horas.length, 4); i++) {
            diffs.push(toMin(horas[i]) - toMin(horas[i-1]));
        }
        return Math.round(diffs.reduce((a,b)=>a+b,0)/diffs.length);
    }

    // ─── 3. PARADAS (definidas en horarios.html) ─────────────────
    // Las paradas se pasan desde la página que carga el chatbot
    function buildContextoParadas(paradas) {
        if (!paradas || paradas.length === 0) return '';

        let txt = '\n=== PARADAS DEL SISTEMA ===\n';
        paradas.forEach(p => {
            txt += `• ID ${p.id}: ${p.nombre} → rutas: [${p.rutaIds.join(', ')}]\n`;
        });
        return txt;
    }

    // ─── 4. ANÁLISIS DE ENCUESTA (resultados.js) ─────────────────
    function buildContextoAnalisis() {
        if (typeof DATOS_ANALISIS === 'undefined') return '';

        const d   = DATOS_ANALISIS;
        const res = d.resumen || {};
        let txt   = '\n=== DATOS DE ENCUESTA A USUARIOS ===\n';

        txt += `Total respuestas: ${res.total_respuestas || 'N/A'}\n`;
        txt += `Edad promedio: ${res.edad_promedio || 'N/A'} años\n`;
        txt += `Calificación promedio del servicio: ${res.calificacion_promedio || 'N/A'} / 5\n`;
        txt += `Problema más frecuente: ${res.problema_frecuente || 'N/A'}\n`;
        txt += `Ruta más usada: ${res.ruta_mas_usada || 'N/A'}\n`;
        txt += `Hora pico: ${res.hora_pico || 'N/A'}\n`;

        if (d.calificaciones?.promedios) {
            txt += '\nCalificaciones promedio (1-5):\n';
            Object.entries(d.calificaciones.promedios).forEach(([k, v]) => {
                txt += `  ${k}: ${v}\n`;
            });
        }
        if (d.problemas) {
            txt += '\nProblemas reportados (menciones):\n';
            Object.entries(d.problemas)
                .sort((a,b) => b[1]-a[1])
                .forEach(([k,v]) => { txt += `  ${k}: ${v}\n`; });
        }
        if (d.patrones?.horarios) {
            txt += '\nHorarios de mayor uso:\n';
            Object.entries(d.patrones.horarios)
                .sort((a,b)=>b[1]-a[1]).slice(0,4)
                .forEach(([k,v]) => { txt += `  ${k}: ${v} personas\n`; });
        }
        if (d.rutas) {
            txt += '\nRutas más usadas por usuarios:\n';
            Object.entries(d.rutas)
                .sort((a,b)=>b[1]-a[1])
                .forEach(([k,v]) => { txt += `  ${k}: ${v} menciones\n`; });
        }
        if (d.costo) {
            txt += `\nPercepción del costo: ${JSON.stringify(d.costo.percepcion)}\n`;
            txt += `Gasto diario promedio: ${JSON.stringify(d.costo.gasto)}\n`;
        }
        if (d.comentarios && d.comentarios.length) {
            txt += `\nOpiniones y sugerencias de usuarios (muestra):\n`;
            d.comentarios.slice(0, 8).forEach(c => {
                txt += `  [${c.tipo}] "${c.texto}"\n`;
            });
        }
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
