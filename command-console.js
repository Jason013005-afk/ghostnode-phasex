document.getElementById("executeBtn").addEventListener("click", async () => {
  const input = document.getElementById("commandInput").value;
  const outputBox = document.getElementById("consoleOutput");

  outputBox.innerText += `\n> ${input}\n`;
  document.getElementById("agentStatus").innerText = "Processing...";

  const response = await fetch("/api/command", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ command: input })
  });

  const data = await response.json();

  outputBox.innerText += `${data.result}\n`;
  document.getElementById("agentStatus").innerText = "Waiting for input...";
  document.getElementById("commandInput").value = "";
});