import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true },
    company: { type: String, default: "" },
    role: { type: String, default: "" },
    quote: { type: String, default: "" },
    videoUrl: { type: String, default: "" },
    avatar: { type: String, default: "" },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);
