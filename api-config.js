const API_CONFIG = {
  local: 'http://localhost:8001',

  // REAL backend (PythonAnywhere)
  production: 'https://shahroz1423.pythonanywhere.com',

  getBaseURL() {
    if (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    ) {
      return this.local;
    }
    return this.production;
  }
};

window.API_CONFIG = API_CONFIG;
