// Simple Prompt to Action Mapping
function processPrompt(prompt) {
 if(prompt.includes('scan')) return 'Running DIS...';
 return 'Unknown command.';
}