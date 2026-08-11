// Chat functionality for ORION Tutor — fully local, no backend.

const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');

// Store conversation history
let conversationHistory = [];

// Add message to chat
function addMessage(role, content, isError = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isError ? 'error' : role}`;
  // Simple formatting: **bold** and line breaks
  let html = content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
  messageDiv.innerHTML = html;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show/hide typing indicator
function setTyping(isTyping) {
  typingIndicator.classList.toggle('active', isTyping);
  sendBtn.disabled = isTyping;
  chatInput.disabled = isTyping;
  if (isTyping) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Send message to the local tutor
async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  // Add user message to UI
  addMessage('user', message);
  chatInput.value = '';

  // Add to conversation history
  conversationHistory.push({
    role: 'user',
    content: message
  });

  // Show typing indicator
  setTyping(true);

  try {
    // Small delay so the typing indicator reads naturally
    await new Promise((resolve) => setTimeout(resolve, 450 + Math.random() * 350));

    // Answer from the built-in tutorial knowledge base
    const engine = window.PeriodixTutorials;
    const assistantMessage = engine
      ? engine.getReply(conversationHistory)
      : "Tutorials are still warming up — try asking about noble gases, memory tips, or how to play!";

    addMessage('assistant', assistantMessage);
    conversationHistory.push({
      role: 'assistant',
      content: assistantMessage
    });
  } catch (error) {
    console.error('Tutor error:', error);
    addMessage('system', `Something went wrong: ${error.message}`, true);
  } finally {
    setTyping(false);
  }
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

// Focus input on load
chatInput.focus();
