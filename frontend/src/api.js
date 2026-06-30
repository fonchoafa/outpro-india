import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

export const getServices = () => api.get("/api/services").then((r) => r.data);
export const getService = (slug) => api.get(`/api/services/${slug}`).then((r) => r.data);
export const getPortfolio = (featuredOnly = false) =>
  api.get(`/api/portfolio${featuredOnly ? "?featured=true" : ""}`).then((r) => r.data);
export const getTestimonials = (featuredOnly = false) =>
  api.get(`/api/testimonials${featuredOnly ? "?featured=true" : ""}`).then((r) => r.data);
export const submitContactForm = (data) => api.post("/api/contact", data).then((r) => r.data);

export default api;
