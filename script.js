
document.getElementById('command-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const input = document.getElementById('command-input');
    const output = document.getElementById('console-output');
    const status = document.getElementById('status');
    const command = input.value;

    output.textContent += `> ${command}\n`;
    status.textContent = "Status: Processing...";

    const response = await fetch('/api/command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command })
    });

    const data = await response.json();
    if (data.result) {
        output.textContent += `${data.result}\n`;
    } else {
        output.textContent += `Error: ${data.error || "Unknown error"}\n`;
    }

    status.textContent = "Status: Ready";
    input.value = '';
});
