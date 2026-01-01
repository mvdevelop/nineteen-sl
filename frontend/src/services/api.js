
// Configuração base da API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Headers padrão
const defaultHeaders = {
  'Content-Type': 'application/json',
};

// Cliente HTTP genérico
const apiClient = {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = {
      ...defaultHeaders,
      ...options.headers,
    };

    // Adicionar token de autenticação se existir
    const token = localStorage.getItem('authToken');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);
      
      // Verificar se a resposta é JSON
      const contentType = response.headers.get('content-type');
      const data = contentType?.includes('application/json') 
        ? await response.json() 
        : await response.text();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  },

  // Métodos HTTP
  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  },

  post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  patch(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  },
};

// Serviços específicos
export const authService = {
  async login(credentials) {
    return apiClient.post('/auth/login', credentials);
  },

  async register(userData) {
    return apiClient.post('/auth/register', userData);
  },

  async logout() {
    return apiClient.post('/auth/logout');
  },

  async refreshToken() {
    return apiClient.post('/auth/refresh');
  },

  async getProfile() {
    return apiClient.get('/auth/profile');
  },
};

export const courseService = {
  async getCourses() {
    return apiClient.get('/courses');
  },

  async getCourse(id) {
    return apiClient.get(`/courses/${id}`);
  },

  async enrollCourse(courseId) {
    return apiClient.post(`/courses/${courseId}/enroll`);
  },

  async getProgress(courseId) {
    return apiClient.get(`/courses/${courseId}/progress`);
  },
};

export const userService = {
  async updateProfile(userData) {
    return apiClient.put('/users/profile', userData);
  },

  async changePassword(passwordData) {
    return apiClient.put('/users/password', passwordData);
  },

  async getStatistics() {
    return apiClient.get('/users/statistics');
  },
};

// Utilitários
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};

export default apiClient;
