import { MOCK_PROPERTIES, MOCK_USER } from './mockData';

// Simulated delay to mimic network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API structure
export const userAPI = {
  register: async (data: any) => {
    await delay(800);
    return { data: { success: true, user: { ...data, _id: 'new_user' }, token: 'mock_token' } };
  },

  login: async (data: any) => {
    await delay(800);
    if (data.email === 'guest@estateflow.com') {
      return { data: { success: true, user: MOCK_USER, token: 'mock_token' } };
    }
    // For portfolio demo, allow any login
    return { data: { success: true, user: { ...MOCK_USER, email: data.email }, token: 'mock_token' } };
  },

  forgotPassword: async (email: string) => {
    await delay(500);
    return { data: { success: true, message: 'Reset link sent to ' + email } };
  },

  resetPassword: async (token: string, password: string) => {
    await delay(800);
    return { data: { success: true, message: 'Password reset successfully' } };
  },

  verifyEmail: async (token: string) => {
    await delay(500);
    return { data: { success: true, message: 'Email verified' } };
  },

  getProfile: async () => {
    await delay(300);
    return { data: { success: true, user: MOCK_USER } };
  },
};

export const propertiesAPI = {
  getAll: async () => {
    await delay(600);
    return { data: { success: true, property: MOCK_PROPERTIES } };
  },

  getById: async (id: string) => {
    await delay(400);
    const property = MOCK_PROPERTIES.find(p => p._id === id);
    return { data: { success: !!property, property } };
  },
};

export const userListingsAPI = {
  create: async (formData: FormData) => {
    await delay(1000);
    return { data: { success: true, message: 'Property listed successfully!' } };
  },

  getMyListings: async () => {
    await delay(600);
    return { data: { success: true, properties: MOCK_PROPERTIES.slice(0, 2) } };
  },

  update: async (id: string, formData: FormData) => {
    await delay(800);
    return { data: { success: true, message: 'Property updated!' } };
  },

  delete: async (id: string) => {
    await delay(500);
    return { data: { success: true, message: 'Property deleted!' } };
  },
};

export const appointmentsAPI = {
  schedule: async (data: any) => {
    await delay(800);
    return { data: { success: true, message: 'Appointment scheduled for ' + data.date } };
  },

  getByUser: async () => {
    await delay(500);
    return { data: { success: true, appointments: [] } };
  },

  cancel: async (id: string, reason?: string) => {
    await delay(500);
    return { data: { success: true, message: 'Appointment cancelled' } };
  },
};

export const aiAPI = {
  search: async (data: any) => {
    await delay(1200);
    // Rough search logic for mock
    let filtered = [...MOCK_PROPERTIES];
    if (data.city) {
      filtered = filtered.filter(p => p.location.toLowerCase().includes(data.city.toLowerCase()));
    }
    return { data: { success: true, properties: filtered } };
  },

  locationTrends: async (city: string) => {
    await delay(800);
    return { data: { success: true, trends: { priceTrend: 'increasing', demand: 'high' } } };
  },

  validateKeys: async (keys?: any) => {
    await delay(400);
    return { data: { success: true } };
  },
};

export const apiKeyStorage = {
  getGithubKey:    ()    => localStorage.getItem('estateflow_github_key') || '',
  getFirecrawlKey: ()    => localStorage.getItem('estateflow_firecrawl_key') || '',
  setGithubKey:    (key: string) => localStorage.setItem('estateflow_github_key', key),
  setFirecrawlKey: (key: string) => localStorage.setItem('estateflow_firecrawl_key', key),
  hasKeys: () => !!(localStorage.getItem('estateflow_github_key') && localStorage.getItem('estateflow_firecrawl_key')),
  clear: () => {
    localStorage.removeItem('estateflow_github_key');
    localStorage.removeItem('estateflow_firecrawl_key');
  },
};

export const contactAPI = {
  submit: async (data: any) => {
    await delay(800);
    return { data: { success: true, message: 'Message sent!' } };
  },
};

// Default export as an object for backward compatibility if needed, 
// though the app mostly uses named exports now.
export default { userAPI, propertiesAPI, userListingsAPI, appointmentsAPI, aiAPI, contactAPI };

