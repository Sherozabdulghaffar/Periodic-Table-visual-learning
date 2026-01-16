// Chat functionality for ORION AI Assistant

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
  messageDiv.textContent = content;
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

// Send message to backend
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
    const apiURL = window.API_CONFIG ? window.API_CONFIG.getBaseURL() : 'https://shahroz1423.pythonanywhere.com';
    const response = await fetch(`${apiURL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: conversationHistory
      })
    });
    
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    // Add assistant response
    const assistantMessage = data.response;
    addMessage('assistant', assistantMessage);
    
    // Add to conversation history
    conversationHistory.push({
      role: 'assistant',
      content: assistantMessage
    });
    
  } catch (error) {
    console.error('Chat error:', error);
    addMessage('system', `Error: ${error.message}. Please try again.`, true);
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

