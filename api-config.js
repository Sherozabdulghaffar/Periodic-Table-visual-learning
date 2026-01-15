// API Configuration for Production
// Update this with your Render backend URL after deployment

const API_CONFIG = {
  // Local development
  local: 'http://localhost:8001',
  
  // Production - UPDATE THIS with your Render URL
  // Example: 'https://your-app-name.onrender.com'
  production: 'https://shahroz1423.pythonanywhere.com/',
  
  // Auto-detect environment
  getBaseURL() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return this.local;
    }
    return this.production;
  }
};

// Export for use in other scripts
window.API_CONFIG = API_CONFIG;
