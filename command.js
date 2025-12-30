export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { command } = req.body;

  let response = "";

  if (command.toLowerCase().includes("silverado")) {
    response = "Estimated price for 2025 Silverado: $39,995 - $72,000 depending on trim.";
  } else {
    response = "Command received: " + command;
  }

  return res.status(200).json({ result: response });
}