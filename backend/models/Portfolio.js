import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    client: { type: String, default: "" },
    category: { type: String, default: "" },
    description: { type: String, required: true },
    coverImage: { type: String, default: "" },
    gallery: [{ type: String }],
    videoUrl: { type: String, default: "" },
    kpis: [
      {
        label: { type: String },
        value: { type: String },
      },
    ],
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Portfolio", portfolioSchema);
