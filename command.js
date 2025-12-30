
export default async function handler(req, res) {
    if (req.method === "POST") {
        const { command } = req.body;
        // Simulate response or connect to OpenAI API here
        const response = `Command "${command}" received. Simulated response here.`;
        res.status(200).json({ response });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
