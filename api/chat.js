// api/chat.js

export default async function handler(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Método no permitido'
        });
    }

    try {

        const { message, systemPrompt, historial } = req.body;

        // Convertir historial al formato Gemini
        const contents = [];

        if (historial && historial.length) {

            historial.forEach(msg => {

                contents.push({
                    role: msg.role === 'assistant' ? 'model' : 'user',
                    parts: [
                        { text: msg.content }
                    ]
                });

            });

        }

        // Mensaje actual
        contents.push({
            role: 'user',
            parts: [
                {
                    text: message
                }
            ]
        });

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    systemInstruction: {
                        parts: [
                            {
                                text: systemPrompt
                            }
                        ]
                    },

                    contents,

                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 600
                    }

                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        const texto =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            'No pude generar respuesta.';

        return res.status(200).json({
            text: texto
        });

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }
}
