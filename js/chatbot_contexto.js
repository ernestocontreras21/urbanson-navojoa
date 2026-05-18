// ════════════════════════════════════════════════════════════════
//  chatbot_contexto.js
//  Extrae datos de rutas_data.js, horarios_reales.js y resultados.js
//  y los convierte en texto plano para el system prompt del chatbot.
//  Debe cargarse DESPUÉS de esos tres archivos y ANTES de chatbot.js
// ════════════════════════════════════════════════════════════════

window.CHATBOT_CONTEXTO = (function () {

    function getProximaHora(horasArray, horaActual) {
        const toMin = h => { const [hh,mm] = h.split(':').map(Number); return hh*60+mm; };
        const ahoraMin = toMin(horaActual);
        const proxima = horasArray.find(h => toMin(h) >= ahoraMin);
        return proxima || null;
    }

    function build(paradasLocales) {
        const ahora = new Date();
        const horaActual = ahora.toLocaleTimeString('es-MX', {
            hour:'2-digit', minute:'2-digit', hour12:false,
            timeZone: 'America/Hermosillo'
        });

        // ─── 1. RUTAS Y COLONIAS ─────────────────────────────────────
        let txt = `=== RUTAS Y COLONIAS ===
Circuito 1 Lado A — Laureles–Jacarandas | Mercado, Ley del Mayo, Unidad Deportiva "Faustino Félix", ITSON, UES, Col. Laureles, Col. Girasoles, CBTIS 64, Hospital San José, Secundaria Othón Almada, IMSS, Plaza Santa Fe, Bodega Aurrerá, Secundaria #29, Col. Allende, Col. Jacarandas, Panteón Nuevo, Panteón Viejo, Col. Rosales, ISSSTE
Circuito 1 Lado B — Girasoles–Rosales | Mercado, Plaza Santa Fe, IMSS, Secundaria Othón Almada, Hospital San José, COBACH, Unidad Deportiva "Faustino Félix", CBTIS 64, Col. Girasoles, Col. Laureles, UES, ITSON, Ley del Mayo, Col. Rosales, ISSSTE, Panteón Viejo, Panteón Nuevo, Col. Jacarandas, Col. Allende, Secundaria #29, Bodega Aurrerá
Circuito 2 — Tierra y Libertad–Jiménez (Línea 7) | Mercado, Bodega Aurrerá, UNISON, Col. Aeropuerto, Col. Tierra y Libertad, Lázaro Cárdenas, Ley Aviación, Mariano Jiménez, Iglesia de la Sagrada Familia, Col. Tierra Blanca, Periférico
Circuito 3 Lado A — Pueblo Viejo–Misioneros por Ley | Mercado, Ley del Mayo, Secundaria Técnica #5, COBACH, Hospital San José, Secundaria Othón Almada, Soriana, Hospital General, Col. Misioneros, Col. Infonavit Sonora, Col. Tepeyac, Socum, IMSS, Bodega Aurrerá, ISSSTE, Col. Salvatierra, Misión Santa María III, Misión Santa María IV, Col. La Herradura, Pueblo Viejo
Circuito 3 Lado B — Pueblo Viejo–Misioneros por IMSS | Mercado, IMSS, Soriana, Hospital General, Socum, Col. Tepeyac, Col. Infonavit Sonora, Col. Misioneros, Secundaria Othón Almada, COBACH, Ley del Mayo, ISSSTE, Col. Salvatierra, Misión Santa María III, Misión Santa María IV, Col. La Herradura, Pueblo Viejo
Circuito 4 — Sonora (Línea 2-6) | Mercado, IMSS, Soriana, Hospital General, Pedagógico, Juan de la Barrera, Col. Sonora, Col. Infonavit Sonora, Col. 16 de Junio, CBTIS 207, Col. Tierra y Libertad, Col. Francisco Villa, UNISON, Ley Aviación, Bodega Aurrerá
Circuito 4 — Quintana Roo | Mercado, Calle Quintana Roo, Col. Tierra Blanca, Mariano Jiménez, Leona Vicario, Ley del Mayo, IMSS, Bodega Aurrerá
Circuito 5 — Tetanchopo | Mercado, Av. Morelos, Oficinas del IMSS, Nuevo IMSS, Parque Infantil, Cereso, Col. Tetanchopo, Fraccionamiento Los Arcos, Col. Villa Lourdes, Iglesia del Sagrado Corazón
Circuito 6 Lado A — Deportiva–Fovissste por IMSS | Mercado, Plaza Santa Fe, IMSS, Secundaria Othón Almada, Blvd. Sosa Chávez, Hospital San José, COBACH, Unidad Deportiva "Faustino Félix", Col. Deportiva, Col. Pradera Dorada, Sport Town, Col. Beltrones, Col. Fovissste, Col. Brisas del Valle, La Joya, Col. Villa Dorada, ITSON, Ley del Mayo
Circuito 6 Lado B — Deportiva–Fovissste por Ley | Mercado, Ley del Mayo, Unidad Deportiva "Faustino Félix", ITSON, Col. Villa Dorada, La Joya, Col. Fovissste, Col. Brisas del Valle, Col. Beltrones, Col. Pradera Dorada, Sport Town, Col. Deportiva, Blvd. Sosa Chávez, COBACH, Hospital San José, Secundaria Othón Almada, IMSS, Plaza Santa Fe
Circuito 7 — Sonora Express | Mercado, Bodega Aurrerá, Blvd. Sonora, Col. Sonora, Juan de la Barrera, Col. Infonavit Sonora, Calle Cajeme, UNISON, Ley Aviación

`;

        // ─── 2. PARADAS CON RUTAS ────────────────────────────────────
        const PARADAS_INFO = [
            {id:1,n:'Mercado Municipal Lado García Morales',r:[1,2,3,4,5,9,10]},
            {id:2,n:'Mercado Municipal Lado No Reelección',r:[4,5,6,7,11]},
            {id:3,n:'Juan de la Barrera y Huatabampo',r:[6,11]},
            {id:4,n:'Col. Laureles',r:[1,2]},
            {id:5,n:'Col. Girasoles',r:[1,2]},
            {id:6,n:'Soriana',r:[4,5,6]},
            {id:7,n:'Col. 16 de Junio (Av. Pótam)',r:[6]},
            {id:8,n:'Lázaro Cárdenas y Plutarco Elías Calles',r:[3,6]},
            {id:9,n:'UES Navojoa',r:[1]},
            {id:10,n:'Frente UES Navojoa',r:[2]},
            {id:11,n:'UNISON Navojoa',r:[3,6]},
            {id:12,n:'Infonavit Sonora (Román Yocupicio y Bacerac)',r:[4,5]},
            {id:13,n:'Ley del Mayo',r:[1,4,7,10]},
            {id:14,n:'Frente Ley del Mayo',r:[2,5,9]},
            {id:15,n:'ITSON Navojoa',r:[1,10]},
            {id:16,n:'Frente ITSON Navojoa',r:[2,9]},
            {id:17,n:'Ramón Corona y Av. México',r:[1,2,9,10]},
            {id:18,n:'Blvd. Rafael Almada y Av. Jalisco',r:[1]},
            {id:19,n:'Blvd. Rafael Almada y Av. Jalisco',r:[2]},
            {id:20,n:'Bodega Aurrerá',r:[2,3,4,6,7,11]},
            {id:21,n:'Frente Bodega Aurrerá',r:[1,3,11]},
            {id:22,n:'Ley Aviación',r:[3,6,11]},
            {id:23,n:'Frente Ley Aviación',r:[3,11]},
            {id:24,n:'Primaria Francisco Villa',r:[3,6,11]},
            {id:25,n:'Frente UNISON Navojoa',r:[3]},
            {id:26,n:'UPN Navojoa',r:[3]},
            {id:27,n:'Frente UPN Navojoa',r:[3]},
            {id:28,n:'Blvd. Colosio y Lázaro Cárdenas',r:[6]},
            {id:29,n:'Lázaro Cárdenas y Calle Segunda',r:[3,6]},
            {id:30,n:'Calle Quinta y Cjón. Río Balsas',r:[3]},
            {id:31,n:'Av. Río Humaya y Calle Quinta',r:[3]},
            {id:32,n:'Col. Aeropuerto',r:[3]},
            {id:33,n:'Calle Segunda y Av. Río Humaya',r:[3,6]},
            {id:34,n:'Av. Cócorit y Blvd. Colosio',r:[6]},
            {id:35,n:'CBTIS 207',r:[6]},
            {id:36,n:'Calle Huatabampo y Av. Cócorit',r:[6]},
            {id:37,n:'Calle Huatabampo y Av. Jesús García',r:[6]},
            {id:38,n:'Calle Huatabampo y Av. Agustín Melgar',r:[6,11]},
            {id:39,n:'Calle Huatabampo y Av. Baca Calderón',r:[4,5]},
            {id:40,n:'Av. Román Yocupicio y Calle Yavaros',r:[4,5]},
            {id:41,n:'Calle Nogales y Colegio Militar',r:[4,5]},
            {id:42,n:'Calle Nogales y Callejón Quinto',r:[4,5]},
            {id:43,n:'Av. Román Yocupicio y Calle Guaymas',r:[4,5]},
            {id:44,n:'Juan de la Barrera y Calle Nogales',r:[4,5,6]},
            {id:45,n:'Calle Nogales y Calle Bacobampo',r:[4,5,11]},
            {id:46,n:'Frente Soriana',r:[4,5]},
            {id:47,n:'Frente IMSS',r:[5,6,7]},
            {id:48,n:'Pesqueira y Av. Amado Nervo',r:[4,7]},
            {id:49,n:'Pesqueira y Av. Leona Vicario',r:[5,6]},
            {id:50,n:'García Morales e Hidalgo',r:[8]},
            {id:51,n:'Pedagógico',r:[6]},
            {id:52,n:'Blvd. Sonora y Juan de la Barrera',r:[6]},
            {id:53,n:'Guaymas y Juan de la Barrera',r:[6,11]},
            {id:54,n:'Juan de la Barrera y Bacoachi',r:[6,11]},
            {id:55,n:'Blvd. Sonora y Lázaro Cárdenas',r:[11]},
            {id:56,n:'Blvd. Sonora y Cócorit',r:[11]},
            {id:57,n:'Cócorit y Nogales',r:[11]},
            {id:58,n:'Agustín Melgar y Guaymas',r:[11]},
            {id:59,n:'Cajeme y Bacobampo',r:[11]},
            {id:60,n:'Cajeme e Ímuris',r:[11]},
            {id:61,n:'Cajeme y Lázaro Cárdenas',r:[11]},
            {id:62,n:'Blvd. Cuauhtemoc e Hidalgo',r:[1,10]},
            {id:63,n:'Blvd. Cuauhtemoc y Rodolfo Campodónico',r:[1,2,5,9,10]},
            {id:64,n:'Blvd. Cuauhtemoc y Blvd. Sosa Chávez',r:[1,9,10]},
            {id:65,n:'Blvd. Sosa Chávez (Unidad Deportiva)',r:[2,9,10]},
            {id:66,n:'Blvd. Luis Salido y Durango',r:[1]},
            {id:67,n:'Blvd. Luis Salido y Jalisco',r:[1]},
            {id:68,n:'Blvd. Luis Salido y Javier Talamante',r:[2]},
            {id:69,n:'Blvd. Luis Salido y Av. México',r:[1,2,9,10]},
            {id:70,n:'Cuauhtemoc y Paseo de los Olivos',r:[1,2]},
            {id:71,n:'Tercera sección Col. Laureles',r:[1,2]},
            {id:72,n:'Segunda sección Col. Laureles',r:[1,2]},
            {id:73,n:'Primera sección Col. Laureles',r:[1,2]},
            {id:74,n:'Girasoles y Tulipanes',r:[1,2]},
            {id:75,n:'Talamante y Campeche',r:[1,2]},
            {id:76,n:'Blvd. Almada y Oaxaca',r:[1]},
            {id:77,n:'Policlínica ISSSTESON',r:[2]},
            {id:78,n:'CAFFENIO Sosa Chávez',r:[1,4,10]},
            {id:79,n:'COBACH',r:[2,5,9]},
            {id:80,n:'No Reelección y Blvd. Sosa Chávez',r:[1,2,9,10]},
            {id:81,n:'Plaza Santa Fe',r:[2,9]},
            {id:82,n:'Frente Plaza Santa Fe',r:[1,10]},
            {id:83,n:'Secundaria #29 Heroico Colegio Militar',r:[1,2]},
            {id:84,n:'Col. Jacarandas',r:[1,2]},
            {id:85,n:'Aquiles Serdán y Blvd. Julio Martínez',r:[1,2]},
            {id:86,n:'Panteón Nuevo',r:[1,2]},
            {id:87,n:'Panteón Viejo',r:[1,2]},
            {id:88,n:'Arteaga y Chijubampo',r:[1,2]},
            {id:89,n:'Reforma y Av. Sobarzo',r:[1,2]},
            {id:90,n:'ISSSTE',r:[1,2,4,5]},
            {id:91,n:'Av. Melchor Ocampo y No Reelección',r:[1,2,4,5]},
            {id:92,n:'Mercado Municipal lado García Morales #2',r:[1,2,3]},
            {id:93,n:'Pesqueira y Periférico',r:[4,5]},
            {id:94,n:'Col. Misioneros',r:[4,5]},
            {id:95,n:'Nogales y San Antonio',r:[4,5]},
            {id:96,n:'Callejón Quinto y Guaymas',r:[4,5]},
            {id:97,n:'Jiménez y Guelatao',r:[3]},
            {id:98,n:'Jiménez y Pedro Moreno',r:[3]},
            {id:99,n:'Jiménez y Club de Leones',r:[3]},
            {id:100,n:'Jiménez y Club Activo',r:[3]},
            {id:101,n:'Jiménez y Juan Escutia',r:[3,7]},
            {id:102,n:'Periférico y Manuel Doblado',r:[3]},
            {id:103,n:'Jiménez y Francisco Márquez',r:[3]},
            {id:104,n:'Jiménez y Club Activo #2',r:[3,7]},
            {id:105,n:'Jiménez y Club de Leones #2 (Sagrada Familia)',r:[3]},
            {id:106,n:'Jiménez y Pedro Moreno #2',r:[3]},
            {id:107,n:'Jiménez y Guelatao #2',r:[3]},
            {id:108,n:'Quintana Roo y Pedro Moreno',r:[7]},
            {id:109,n:'Quintana Roo y Club de Leones',r:[7]},
            {id:110,n:'Quintana Roo y Club Activo',r:[7]},
            {id:111,n:'Manuel Doblado y Club Activo',r:[7]},
            {id:112,n:'Manuel Doblado y Juan Escutia',r:[7]},
            {id:113,n:'Club Activo y Leona Vicario',r:[7]},
            {id:114,n:'Blvd. Almada y Sor Juana Inés de la Cruz',r:[7]},
            {id:115,n:'Blvd. Sosa Chávez y Belisario Domínguez',r:[9,10]},
            {id:116,n:'Blvd. Sosa Chávez y Club Rotario',r:[9,10]},
            {id:117,n:'Col. Pradera Dorada',r:[9,10]},
            {id:118,n:'Av. Oaxaca y Arnulfo Gómez',r:[9,10]},
            {id:119,n:'Arnulfo Gómez y California',r:[9,10]},
            {id:120,n:'Arnulfo Gómez y Los Pinos',r:[9,10]},
            {id:121,n:'Blvd. Brisas del Valle',r:[9,10]},
            {id:122,n:'Brisas del Valle y Camelia',r:[9,10]},
            {id:123,n:'Iglesia de San Judas Tadeo',r:[9,10]},
            {id:124,n:'La Joya',r:[9,10]},
            {id:125,n:'Col. Villa Dorada',r:[9,10]},
            {id:126,n:'Ramón Corona y Durango',r:[9,10]},
            {id:127,n:'Col. Salvatierra',r:[4,5]},
            {id:128,n:'Misión Santa María IV',r:[4,5]},
            {id:129,n:'Col. La Herradura',r:[4,5]},
            {id:130,n:'Francisco I. Madero y Mina',r:[4,5]},
            {id:131,n:'Ignacio Zaragoza y Álvaro Obregón',r:[4,5]},
            {id:132,n:'Mariano Abasolo y Benito Juárez',r:[4,5]},
            {id:133,n:'Pueblo Viejo',r:[4,5]},
            {id:134,n:'Ignacio Zaragoza y Sonora',r:[4,5]},
            {id:135,n:'San Juan y Cjón. Pueblo Viejo',r:[4,5]},
            {id:136,n:'Misión Santa María III',r:[4,5]},
            {id:137,n:'Av. Guillermo Prieto y Cjón. Pueblo Viejo',r:[4,5]},
            {id:138,n:'Super Ley Express Rosales C3',r:[4,5]},
        ];

        const NOMBRES_RUTA = {
            1:'C1A',2:'C1B',3:'C2',4:'C3A',5:'C3B',
            6:'C4-Sonora',7:'C4-QRoo',8:'C5-Tetanchopo',
            9:'C6A',10:'C6B',11:'C7-Express'
        };

        txt += '=== PARADAS ===\n';
        PARADAS_INFO.forEach(p => {
            const rutas = p.r.map(r => NOMBRES_RUTA[r] || r).join(',');
            txt += `ID${p.id}:${p.n} [${rutas}]\n`;
        });

        // ─── 3. PRÓXIMOS HORARIOS POR PARADA ────────────────────────
        if (typeof HORARIOS_REALES !== 'undefined') {
            // Agrupar todas las horas por parada
            const horasPorParada = {};
            HORARIOS_REALES.forEach(camion => {
                camion.vueltas.forEach(vuelta => {
                    Object.entries(vuelta.paradas).forEach(([pid, hora]) => {
                        if (!horasPorParada[pid]) horasPorParada[pid] = [];
                        horasPorParada[pid].push(hora);
                    });
                });
            });

            // Ordenar y calcular próxima hora por parada
            txt += '\n=== PRÓXIMA SALIDA POR PARADA (hora actual: ' + horaActual + ' GMT-7) ===\n';
            Object.entries(horasPorParada).forEach(([pid, horas]) => {
                const ordenadas = [...new Set(horas)].sort();
                const proxima = getProximaHora(ordenadas, horaActual);
                if (proxima) {
                    const parada = PARADAS_INFO.find(p => p.id === parseInt(pid));
                    const nombre = parada ? parada.n : `Parada ${pid}`;
                    txt += `ID${pid} ${nombre}: próxima a las ${proxima}\n`;
                }
            });
        }

        return txt;
    }

    return { build };
})();
