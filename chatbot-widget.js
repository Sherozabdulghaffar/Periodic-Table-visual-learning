// Chatbot widget for Periodic Puzzle
// Professional floating assistant

class PeriodicChatbot {
  constructor() {
    this.isOpen = false;
    this.conversationHistory = [];
    this.init();
  }

  init() {
    this.injectStyles();
    this.createWidget();
    this.attachEventListeners();
  }

  injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Chatbot Widget Styles */
      .chatbot-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }

      .chatbot-button {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2563eb 0%, #6d28d9 100%);
        border: none;
        cursor: pointer;
        box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .chatbot-button:hover {
        transform: scale(1.1);
        box-shadow: 0 12px 32px rgba(37, 99, 235, 0.5);
      }

      .chatbot-button:active {
        transform: scale(1.05);
      }

      .chatbot-button svg {
        width: 32px;
        height: 32px;
        fill: white;
        transition: transform 0.3s ease;
      }

      .chatbot-button.open svg {
        transform: rotate(90deg);
      }

      .chatbot-pulse {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgba(37, 99, 235, 0.4);
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(1.5);
          opacity: 0;
        }
      }

      .chatbot-window {
        position: absolute;
        bottom: 80px;
        right: 0;
        width: 380px;
        height: 550px;
        background: rgba(15, 37, 58, 0.98);
        backdrop-filter: blur(20px);
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(100, 255, 218, 0.2);
        display: none;
        flex-direction: column;
        overflow: hidden;
        animation: slideUp 0.3s ease;
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .chatbot-window.open {
        display: flex;
      }

      .chatbot-header {
        background: linear-gradient(135deg, #2563eb 0%, #6d28d9 100%);
        padding: 16px 20px;
        color: white;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }

      .chatbot-header-icon {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      }

      .chatbot-header-text {
        flex: 1;
      }

      .chatbot-header-title {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 2px 0;
      }

      .chatbot-header-subtitle {
        font-size: 12px;
        opacity: 0.9;
        margin: 0;
      }

      .chatbot-close {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
      }

      .chatbot-close:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: rotate(90deg);
      }

      .chatbot-messages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        background: rgba(10, 25, 47, 0.5);
      }

      .chatbot-messages::-webkit-scrollbar {
        width: 6px;
      }

      .chatbot-messages::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
      }

      .chatbot-messages::-webkit-scrollbar-thumb {
        background: rgba(100, 255, 218, 0.3);
        border-radius: 3px;
      }

      .chatbot-message {
        padding: 12px 16px;
        border-radius: 12px;
        max-width: 85%;
        word-wrap: break-word;
        word-break: break-word;
        overflow-wrap: break-word;
        animation: messageIn 0.3s ease;
        line-height: 1.5;
        font-size: 14px;
        white-space: pre-wrap;
      }

      @keyframes messageIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .chatbot-message.user {
        background: linear-gradient(135deg, #2563eb 0%, #6d28d9 100%);
        color: white;
        align-self: flex-end;
        margin-left: auto;
        border-bottom-right-radius: 4px;
      }

      .chatbot-message.assistant {
        background: rgba(255, 255, 255, 0.08);
        color: #e6f1ff;
        align-self: flex-start;
        border: 1px solid rgba(100, 255, 218, 0.2);
        border-bottom-left-radius: 4px;
      }

      .chatbot-message.system {
        background: rgba(100, 255, 218, 0.1);
        color: #64ffda;
        align-self: center;
        text-align: center;
        font-size: 13px;
        border: 1px solid rgba(100, 255, 218, 0.3);
      }

      .chatbot-message.error {
        background: rgba(255, 95, 86, 0.15);
        color: #ff9f9f;
        align-self: center;
        border: 1px solid rgba(255, 95, 86, 0.4);
      }

      .chatbot-typing {
        display: none;
        align-items: center;
        gap: 4px;
        padding: 12px 16px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        max-width: 60px;
        align-self: flex-start;
        border: 1px solid rgba(100, 255, 218, 0.2);
      }

      .chatbot-typing.active {
        display: flex;
      }

      .chatbot-typing-dot {
        width: 6px;
        height: 6px;
        background: #64ffda;
        border-radius: 50%;
        animation: typingDot 1.4s infinite;
      }

      .chatbot-typing-dot:nth-child(2) {
        animation-delay: 0.2s;
      }

      .chatbot-typing-dot:nth-child(3) {
        animation-delay: 0.4s;
      }

      @keyframes typingDot {
        0%, 60%, 100% {
          transform: translateY(0);
          opacity: 0.5;
        }
        30% {
          transform: translateY(-8px);
          opacity: 1;
        }
      }

      .chatbot-input-container {
        padding: 16px;
        background: rgba(17, 34, 64, 0.8);
        border-top: 1px solid rgba(100, 255, 218, 0.2);
        display: flex;
        gap: 8px;
      }

      .chatbot-input {
        flex: 1;
        padding: 12px 16px;
        border: 1px solid rgba(100, 255, 218, 0.3);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        color: #e6f1ff;
        font-size: 14px;
        font-family: inherit;
        transition: all 0.2s ease;
      }

      .chatbot-input:focus {
        outline: none;
        border-color: #64ffda;
        background: rgba(255, 255, 255, 0.08);
      }

      .chatbot-input::placeholder {
        color: rgba(230, 241, 255, 0.4);
      }

      .chatbot-send {
        background: linear-gradient(135deg, #2563eb 0%, #6d28d9 100%);
        border: none;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
      }

      .chatbot-send:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
      }

      .chatbot-send:active:not(:disabled) {
        transform: translateY(0);
      }

      .chatbot-send:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .chatbot-send svg {
        width: 20px;
        height: 20px;
        fill: white;
      }

      .chatbot-quick-questions {
        padding: 12px 16px;
        background: rgba(17, 34, 64, 0.8);
        border-top: 1px solid rgba(100, 255, 218, 0.2);
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .chatbot-quick-btn {
        background: rgba(100, 255, 218, 0.1);
        border: 1px solid rgba(100, 255, 218, 0.3);
        color: #64ffda;
        padding: 6px 12px;
        border-radius: 16px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .chatbot-quick-btn:hover {
        background: rgba(100, 255, 218, 0.2);
        border-color: #64ffda;
      }

      @media (max-width: 480px) {
        .chatbot-container {
          bottom: 10px;
          right: 10px;
          left: 10px;
        }

        .chatbot-window {
          width: 100%;
          height: calc(100vh - 80px);
          bottom: 70px;
          right: 0;
          left: 0;
          margin: 0 auto;
          max-width: 100%;
        }

        .chatbot-button {
          width: 56px;
          height: 56px;
          bottom: 0;
          right: 0;
        }

        .chatbot-message {
          max-width: 90%;
          font-size: 13px;
        }

        .chatbot-header-title {
          font-size: 15px;
        }

        .chatbot-header-subtitle {
          font-size: 11px;
        }

        .chatbot-quick-questions {
          padding: 10px 12px;
        }

        .chatbot-quick-btn {
          font-size: 11px;
          padding: 5px 10px;
        }
      }

      @media (max-width: 360px) {
        .chatbot-message {
          font-size: 12px;
          padding: 10px 14px;
        }

        .chatbot-input {
          font-size: 13px;
          padding: 10px 14px;
        }

        .chatbot-header {
          padding: 14px 16px;
        }

        .chatbot-header-icon {
          width: 36px;
          height: 36px;
          font-size: 18px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  createWidget() {
    const container = document.createElement('div');
    container.className = 'chatbot-container';
    container.innerHTML = `
      <div class="chatbot-window" id="chatbotWindow">
        <div class="chatbot-header">
          <div class="chatbot-header-icon">🤖</div>
          <div class="chatbot-header-text">
            <h3 class="chatbot-header-title">ORION Assistant</h3>
            <p class="chatbot-header-subtitle">by Shahroz</p>
          </div>
          <button class="chatbot-close" id="chatbotClose">✕</button>
        </div>
        
        <div class="chatbot-messages" id="chatbotMessages">
          <div class="chatbot-message system">
            👋 Hi! I'm ORION from Periodic Puzzle by Shahroz. Ask me about elements, game tips, or anything related to the periodic table! 🧪
          </div>
        </div>
        
        <div class="chatbot-typing" id="chatbotTyping">
          <div class="chatbot-typing-dot"></div>
          <div class="chatbot-typing-dot"></div>
          <div class="chatbot-typing-dot"></div>
        </div>
        
        <div class="chatbot-quick-questions">
          <button class="chatbot-quick-btn" data-question="How do I play the game?">🎮 How to play?</button>
          <button class="chatbot-quick-btn" data-question="What are noble gases?">⚛️ Noble gases?</button>
          <button class="chatbot-quick-btn" data-question="Tips for memorizing elements?">💡 Memory tips?</button>
        </div>
        
        <div class="chatbot-input-container">
          <input 
            type="text" 
            class="chatbot-input" 
            id="chatbotInput" 
            placeholder="Ask me anything about chemistry..."
            autocomplete="off"
          />
          <button class="chatbot-send" id="chatbotSend">
            <svg viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <button class="chatbot-button" id="chatbotButton">
        <div class="chatbot-pulse"></div>
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
        </svg>
      </button>
    `;
    document.body.appendChild(container);
  }

  attachEventListeners() {
    const button = document.getElementById('chatbotButton');
    const closeBtn = document.getElementById('chatbotClose');
    const sendBtn = document.getElementById('chatbotSend');
    const input = document.getElementById('chatbotInput');
    const quickBtns = document.querySelectorAll('.chatbot-quick-btn');

    button.addEventListener('click', () => this.toggleChat());
    closeBtn.addEventListener('click', () => this.toggleChat());
    sendBtn.addEventListener('click', () => this.sendMessage());
    
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    quickBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const question = e.target.getAttribute('data-question');
        input.value = question;
        this.sendMessage();
      });
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    const window = document.getElementById('chatbotWindow');
    const button = document.getElementById('chatbotButton');
    
    window.classList.toggle('open', this.isOpen);
    button.classList.toggle('open', this.isOpen);

    if (this.isOpen) {
      document.getElementById('chatbotInput').focus();
    }
  }

  addMessage(role, content, isError = false) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isError ? 'error' : role}`;
    
    // Simple markdown formatting
    let formattedContent = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // **bold**
      .replace(/\*(.*?)\*/g, '<em>$1</em>')              // *italic*
      .replace(/`(.*?)`/g, '<code style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">$1</code>') // `code`
      .replace(/\n/g, '<br>');                            // line breaks
    
    messageDiv.innerHTML = formattedContent;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  setTyping(isTyping) {
    const typingIndicator = document.getElementById('chatbotTyping');
    const sendBtn = document.getElementById('chatbotSend');
    const input = document.getElementById('chatbotInput');
    
    typingIndicator.classList.toggle('active', isTyping);
    sendBtn.disabled = isTyping;
    input.disabled = isTyping;
    
    if (isTyping) {
      const messagesContainer = document.getElementById('chatbotMessages');
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  async sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    this.addMessage('user', message);
    input.value = '';
    
    this.conversationHistory.push({
      role: 'user',
      content: message
    });
    
    this.setTyping(true);
    
    try {
      const apiURL = window.API_CONFIG ? window.API_CONFIG.getBaseURL() : '';
      const response = await fetch(`${apiURL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: this.conversationHistory
        })
      });
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      const assistantMessage = data.response;
      this.addMessage('assistant', assistantMessage);
      
      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage
      });
      
    } catch (error) {
      console.error('Chat error:', error);
      this.addMessage('system', `⚠️ ${error.message}. Please try again.`, true);
    } finally {
      this.setTyping(false);
    }
  }
}

// Initialize chatbot when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PeriodicChatbot();
  });
} else {
  new PeriodicChatbot();
}
