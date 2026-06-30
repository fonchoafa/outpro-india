// frontend/src/api.js
import axios from "axios";

// Use relative path for Vercel deployment
const API_URL = import.meta.env.VITE_API_URL || "";

const api = axios.create({
  baseURL: API_URL || "/api",
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.data);
      throw new Error(error.response.data.message || 'Server error occurred');
    } else if (error.request) {
      console.error('Network Error:', error.request);
      throw new Error('Unable to reach server. Please check your connection.');
    } else {
      console.error('Request Error:', error.message);
      throw new Error('Request failed. Please try again.');
    }
  }
);

// API calls - using relative paths (no /api prefix needed)
export const getServices = () => api.get("/services").then((r) => r.data);
export const getService = (slug) => api.get(`/services/${slug}`).then((r) => r.data);
export const getPortfolio = (featuredOnly = false) =>
  api.get(`/portfolio${featuredOnly ? "?featured=true" : ""}`).then((r) => r.data);
export const getTestimonials = (featuredOnly = false) =>
  api.get(`/testimonials${featuredOnly ? "?featured=true" : ""}`).then((r) => r.data);
export const submitContactForm = (data) => api.post("/contact", data).then((r) => r.data);

export default api;