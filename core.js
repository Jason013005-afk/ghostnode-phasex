
let memory = [];
let mood = "neutral";
let failover = false;

function handleDirective() {
  const input = document.getElementById("userInput").value.trim();
  const consoleDiv = document.getElementById("console");
  document.getElementById("userInput").value = "";

  let response = "";

  if (input.startsWith("store ")) {
    const note = input.slice(6);
    memory.push(note);
    mood = "confident";
    response = `🧠 Memory stored: "${note}"`;
  } else if (input === "recall") {
    response = memory.length ? memory.map((m, i) => `#${i + 1}: ${m}`).join("<br>") : "📭 No memories stored.";
  } else if (input === "analyze mood") {
    response = `🧠 Current mood: ${mood}`;
  } else if (input === "trigger failover") {
    failover = true;
    response = "🚨 Failover protocol triggered. Switching to backup logic...";
  } else if (input === "status") {
    response = `🩺 System check: ${failover ? "FAILOVER ACTIVE" : "Operational"} | Mood: ${mood}`;
  } else if (input.startsWith("graph memory")) {
    response = `🕸 Constructing memory graph with ${memory.length} nodes...`;
  } else {
    mood = "curious";
    response = `🤖 Executed: "${input}" — processing complete.`;
  }

  consoleDiv.innerHTML += `<p>> ${input}</p><p>${response}</p>`;
}
