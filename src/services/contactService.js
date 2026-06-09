import api from './api';

export const contactService = {
  submitMessage: async (formData) => {
    return api.post('/contact', formData);
  },
};

export default contactService;
