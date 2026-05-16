export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { contents } = req.body;
    if (!contents) {
        return res.status(400).json({ error: 'Falta contents' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key no configurada' });
    }

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents,
                    generationConfig: {
                        maxOutputTokens: 500,
                        temperature: 0.7,
                    },
                    safetySettings: [
                        { category: 'HARM_CATEGORY_HARASSMENT',       threshold: 'BLOCK_NONE' },
                        { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_NONE' },
                        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
                        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
                    ],
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error('Gemini error:', data);
            return res.status(response.status).json(data);
        }

        return res.status(200).json(data);

    } catch (err) {
        console.error('Error interno:', err);
        return res.status(500).json({ error: err.message });
    }
}
