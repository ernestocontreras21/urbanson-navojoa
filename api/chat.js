export default async function handler(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {

        // DEBUG
        console.log('BODY:', req.body);

        const { messages, system } = req.body;

        const ultimoMensaje =
            messages[messages.length - 1]?.content || '';

        const promptCompleto = `
${system}

Usuario:
${ultimoMensaje}
`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: promptCompleto
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        // DEBUG
        console.log('GEMINI RESPONSE:', JSON.stringify(data));

        if (!response.ok) {
            return res.status(500).json({
                error: data
            });
        }

        const texto =
            data.candidates?.[0]?.content?.parts?.[0]?.text
            || 'No pude generar respuesta.';

        return res.status(200).json({
            content: texto
        });

    } catch (error) {

        console.error('ERROR SERVIDOR:', error);

        return res.status(500).json({
            error: error.message
        });
    }
}
