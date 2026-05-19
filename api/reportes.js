export default async function handler(req, res) {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;
    const headers = {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
    };

    // GET — obtener reportes
    if (req.method === 'GET') {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/reportes?order=id.desc`,
            { headers }
        );
        const data = await response.json();
        return res.status(200).json(data);
    }

    // POST — guardar reporte
    if (req.method === 'POST') {
        const { nombre, tipo, descripcion } = req.body;

        if (!tipo || !descripcion) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/reportes`,
            {
                method: 'POST',
                headers: { ...headers, 'Prefer': 'return=minimal' },
                body: JSON.stringify({
                    nombre: nombre || 'Anónimo',
                    tipo,
                    descripcion,
                    fecha: new Date().toLocaleString('es-MX', {
                        day: '2-digit', month: 'short', year: 'numeric',
                        hour: '2-digit', minute: '2-digit',
                        timeZone: 'America/Hermosillo'
                    })
                })
            }
        );

        if (!response.ok) {
            const err = await response.json();
            return res.status(500).json({ error: err });
        }

        return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Método no permitido' });
}
