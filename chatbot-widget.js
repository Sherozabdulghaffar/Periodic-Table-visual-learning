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
      /* Floating Chatbot Widget Styles — chart-paper theme, matching Periodix */
      .chatbot-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
        font-family: 'Karla', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        pointer-events: none;
      }

      .chatbot-button {
        width: 64px;
        height: 64px;
        border-radius: 8px;
        background: linear-gradient(135deg, #1e5b3f 0%, #2e7d5b 100%);
        border: 2px solid #20242e;
        cursor: pointer;
        box-shadow: 0 8px 28px 0 rgba(32, 36, 46, 0.28);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.38s cubic-bezier(.4,2,.6,1), box-shadow 0.38s cubic-bezier(.4,2,.6,1);
        position: relative;
        overflow: visible;
        pointer-events: auto;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-button svg {
        width: 34px;
        height: 34px;
        fill: #f4f0e7;
        filter: drop-shadow(0 0 8px #f4f0e755);
        transition: transform 0.5s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-button.open svg {
        transform: rotate(90deg);
      }

      .chatbot-button:hover {
        transform: scale(1.08);
        box-shadow: 0 12px 32px 0 rgba(32, 36, 46, 0.32);
      }

      .chatbot-button:active {
        transform: scale(0.97);
      }

      .chatbot-pulse {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background: radial-gradient(circle, rgba(46,125,91,0.22) 0%, rgba(30,91,63,0.12) 100%);
        transform: translate(-50%, -50%);
        animation: pulse 3.2s infinite;
        z-index: 0;
        pointer-events: none;
      }

      @keyframes chatbot-fadeIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }

      @keyframes pulse {
        0% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 0;
        }
      }

      .chatbot-window {
        position: absolute;
        bottom: 80px;
        right: 0;
        width: 390px;
        height: 560px;
        background: #fbf9f3;
        border-radius: 14px;
        box-shadow: 0 24px 64px 0 rgba(32, 36, 46, 0.3);
        border: 2px solid #20242e;
        display: none;
        flex-direction: column;
        overflow: hidden;
        animation: chatbot-slideUp 0.7s cubic-bezier(.4,2,.6,1);
        pointer-events: auto;
      }

      @keyframes chatbot-slideUp {
        from {
          opacity: 0;
          transform: translateY(48px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .chatbot-window.open {
        display: flex;
        animation: chatbot-slideUp 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-header {
        background: linear-gradient(135deg, #1e5b3f 0%, #2e7d5b 100%);
        padding: 18px 24px 16px 20px;
        color: #f4f0e7;
        display: flex;
        align-items: center;
        gap: 14px;
        border-bottom: 2px solid #20242e;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-header-icon {
        width: 44px;
        height: 44px;
        background: rgba(244,240,231,0.22);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        border: 1.5px solid rgba(244,240,231,0.4);
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-header-text {
        flex: 1;
        min-width: 0;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-header-title {
        font-size: 18px;
        font-weight: 700;
        margin: 0 0 2px 0;
        letter-spacing: 0.01em;
        line-height: 1.2;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-header-subtitle {
        font-size: 13px;
        opacity: 0.92;
        margin: 0;
        font-weight: 500;
        letter-spacing: 0.01em;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-close {
        background: rgba(244,240,231,0.2);
        border: 1.5px solid rgba(244,240,231,0.4);
        color: #f4f0e7;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.28s, transform 0.38s cubic-bezier(.4,2,.6,1);
        font-size: 18px;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-close:hover {
        background: rgba(244,240,231,0.32);
        transform: rotate(90deg) scale(1.08);
      }

      .chatbot-messages {
        flex: 1;
        overflow-y: auto;
        padding: 24px 22px 18px 22px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        background: #f4f0e7;
        scrollbar-width: thin;
        scrollbar-color: #1e5b3f #ece6d8;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-messages::-webkit-scrollbar {
        width: 7px;
      }
      .chatbot-messages::-webkit-scrollbar-thumb {
        background: #1e5b3f;
        border-radius: 4px;
      }
      .chatbot-messages::-webkit-scrollbar-track {
        background: #ece6d8;
      }

      .chatbot-message {
        padding: 13px 18px;
        border-radius: 10px;
        max-width: 82%;
        word-wrap: break-word;
        word-break: break-word;
        overflow-wrap: break-word;
        animation: chatbot-messageIn 0.7s cubic-bezier(.4,2,.6,1);
        line-height: 1.6;
        font-size: 15px;
        white-space: pre-wrap;
        box-shadow: 0 2px 8px 0 rgba(32, 36, 46, 0.08);
        transition: background 0.28s, color 0.28s;
      }

      @keyframes chatbot-messageIn {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .chatbot-message.user {
        background: linear-gradient(135deg, #1e5b3f 0%, #2e7d5b 100%);
        color: #f4f0e7;
        align-self: flex-end;
        margin-left: auto;
        border-bottom-right-radius: 6px;
        font-weight: 500;
        box-shadow: 0 2px 8px 0 rgba(32, 36, 46, 0.14);
        animation: chatbot-messageIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-message.assistant {
        background: #fbf9f3;
        color: #20242e;
        align-self: flex-start;
        border: 1.2px solid rgba(32, 36, 46, 0.16);
        border-bottom-left-radius: 6px;
        font-weight: 400;
        animation: chatbot-messageIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-message.system {
        background: rgba(30, 91, 63, 0.1);
        color: #1e5b3f;
        align-self: center;
        text-align: center;
        font-size: 14px;
        border: 1.2px solid rgba(30, 91, 63, 0.24);
        font-weight: 600;
        letter-spacing: 0.01em;
        animation: chatbot-messageIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-message.error {
        background: rgba(192, 57, 43, 0.1);
        color: #c0392b;
        align-self: center;
        border: 1.2px solid rgba(192, 57, 43, 0.32);
        animation: chatbot-messageIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-typing {
        display: none;
        align-items: center;
        gap: 5px;
        padding: 13px 18px;
        background: #ece6d8;
        border-radius: 10px;
        max-width: 70px;
        align-self: flex-start;
        border: 1.2px solid rgba(32, 36, 46, 0.16);
        box-shadow: 0 2px 8px 0 rgba(32, 36, 46, 0.08);
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-typing.active {
        display: flex;
      }

      .chatbot-typing-dot {
        width: 7px;
        height: 7px;
        background: #1e5b3f;
        border-radius: 50%;
        animation: chatbot-typingDot 2.2s infinite;
      }

      .chatbot-typing-dot:nth-child(2) {
        animation-delay: 0.3s;
      }

      .chatbot-typing-dot:nth-child(3) {
        animation-delay: 0.6s;
      }

      @keyframes chatbot-typingDot {
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
        padding: 18px;
        background: #ece6d8;
        border-top: 1.5px solid rgba(32, 36, 46, 0.2);
        display: flex;
        gap: 10px;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-input {
        flex: 1;
        padding: 13px 18px;
        border: 1.5px solid rgba(32, 36, 46, 0.3);
        border-radius: 6px;
        background: #f4f0e7;
        color: #20242e;
        font-size: 15px;
        font-family: inherit;
        transition: border 0.28s, background 0.28s;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-input:focus {
        outline: none;
        border-color: #1e5b3f;
        background: #fbf9f3;
      }

      .chatbot-input::placeholder {
        color: rgba(32, 36, 46, 0.45);
      }

      .chatbot-send {
        background: linear-gradient(135deg, #1e5b3f 0%, #2e7d5b 100%);
        border: none;
        color: #f4f0e7;
        width: 44px;
        height: 44px;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.28s, box-shadow 0.28s;
        box-shadow: 0 2px 8px 0 rgba(32, 36, 46, 0.14);
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-send:hover:not(:disabled) {
        transform: translateY(-2px) scale(1.08);
        box-shadow: 0 4px 16px 0 rgba(30, 91, 63, 0.3);
      }

      .chatbot-send:active:not(:disabled) {
        transform: scale(0.97);
      }

      .chatbot-send:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .chatbot-send svg {
        width: 22px;
        height: 22px;
        fill: #f4f0e7;
      }

      .chatbot-quick-questions {
        padding: 14px 18px;
        background: #ece6d8;
        border-top: 1.5px solid rgba(32, 36, 46, 0.2);
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-quick-btn {
        background: #fbf9f3;
        border: 1.5px solid rgba(32, 36, 46, 0.3);
        color: #20242e;
        padding: 7px 16px;
        border-radius: 6px;
        font-size: 13px;
        cursor: pointer;
        font-weight: 600;
        letter-spacing: 0.01em;
        transition: background 0.28s, border 0.28s, color 0.28s, transform 0.28s;
        animation: chatbot-fadeIn 0.7s cubic-bezier(.4,2,.6,1);
      }

      .chatbot-quick-btn:hover {
        background: #1e5b3f;
        border-color: #1e5b3f;
        color: #f4f0e7;
        transform: scale(1.06);
      }

      @media (max-width: 600px) {
        .chatbot-window {
          width: 100vw;
          height: 80vh;
          min-width: 0;
          right: 0;
          left: auto;
          transform: none;
          bottom: 80px;
          max-width: 100vw;
          border-radius: 12px;
        }
      }

      @media (max-width: 480px) {
        .chatbot-container {
          bottom: 16px;
          left: 0;
          right: 0;
          width: 100vw;
          max-width: 100vw;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: fixed;
        }
        .chatbot-button {
          position: absolute;
          right: 16px;
          bottom: 16px;
          z-index: 10001;
        }
        .chatbot-window {
          width: calc(100vw - 32px);
          height: 90vh;
          left: 16px;
          right: 16px;
          margin: 0 auto;
          transform: none;
          bottom: 70px;
          max-width: 480px;
          border-radius: 12px;
          box-shadow: 0 8px 32px 0 rgba(32, 36, 46, 0.28);
        }
        .chatbot-button {
          width: 56px;
          height: 56px;
        }
        .chatbot-message {
          max-width: 98%;
          font-size: 13px;
        }
        .chatbot-header-title {
          font-size: 16px;
        }
        .chatbot-header-subtitle {
          font-size: 12px;
        }
        .chatbot-quick-questions {
          padding: 10px 8px;
        }
        .chatbot-quick-btn {
          font-size: 12px;
          padding: 6px 10px;
        }
      }

      @media (max-width: 360px) {
        .chatbot-message {
          font-size: 11px;
          padding: 8px 10px;
        }
        .chatbot-input {
          font-size: 11px;
          padding: 8px 10px;
        }
        .chatbot-header {
          padding: 10px 6px;
        }
        .chatbot-header-icon {
          width: 28px;
          height: 28px;
          font-size: 14px;
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
            <h3 class="chatbot-header-title">ORION Tutor</h3>
            <p class="chatbot-header-subtitle">by Shahroz</p>
          </div>
          <button class="chatbot-close" id="chatbotClose">✕</button>
        </div>
        
        <div class="chatbot-messages" id="chatbotMessages">
          <div class="chatbot-message system">
            👋 Hi! I'm ORION, Periodix's built-in chemistry tutor — everything I know lives right here in your browser, no servers needed. Ask me about elements, how to play, or memory tips! 🧪⚛️
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
      .replace(/`(.*?)`/g, '<code style="background: rgba(32,36,46,0.12); color: inherit; padding: 2px 6px; border-radius: 4px;">$1</code>') // `code`
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
      // Answer from the built-in tutorial knowledge base (fully local)
      await new Promise((resolve) => setTimeout(resolve, 450 + Math.random() * 350));

      const engine = window.PeriodixTutorials;
      const assistantMessage = engine
        ? engine.getReply(this.conversationHistory)
        : "Tutorials are still warming up — try asking about noble gases, memory tips, or how to play!";

      this.addMessage('assistant', assistantMessage);
      
      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage
      });
      
    } catch (error) {
      console.error('Tutor error:', error);
      this.addMessage('system', `Something went wrong: ${error.message}. Please try again.`, true);
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