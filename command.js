
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { command } = req.body;

    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: command,
                max_tokens: 100
            })
        });

        const data = await response.json();
        res.status(200).json({ result: data.choices[0].text.trim() });

    } catch (error) {
        res.status(500).json({ error: "OpenAI request failed" });
    }
}
