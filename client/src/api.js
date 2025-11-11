const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = {
  get: async (path) => {
    const res = await fetch(`${API_URL}${path.startsWith('/') ? '' : '/'}${path}`);
    if (!res.ok) return [];
    return res.json();
  },
  post: async (path, body) => {
    const res = await fetch(`${API_URL}${path.startsWith('/') ? '' : '/'}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    return res.json();
  }
};

export default api;
