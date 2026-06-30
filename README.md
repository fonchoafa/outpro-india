# Outpro.India — Corporate Profile Website

Full-stack corporate website built per the Unlox Major Project brief.

**Stack:** React (Vite) + Tailwind · Node.js/Express · MongoDB Atlas (Mongoose) · Vercel deployment

## Structure
```
outpro-india/
├── frontend/        # React app (Vite)
└── backend/         # Express API (deployable as Vercel serverless functions)
```

## Quick start

### Backend
```bash
cd backend
npm install
cp .env.example .env   # fill in your MongoDB Atlas URI
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend expects the API at `VITE_API_URL` (set in `frontend/.env`, defaults to `http://localhost:5000`).

## Deploying to Vercel
- **Frontend:** import `frontend/` as a Vercel project (Framework: Vite).
- **Backend:** import `backend/` as a separate Vercel project (it includes `vercel.json` so Express runs as a serverless function), OR host it on Render/Railway if you prefer a persistent server. Set `MONGODB_URI` as an environment variable on whichever platform you choose.
- Update `VITE_API_URL` in the frontend Vercel project to point at the deployed backend URL.

## What's scaffolded
- 5 core pages: Home, About, Services (+ dynamic detail page), Portfolio, Testimonials, Contact
- Mongoose models: Service, Portfolio, Testimonial, Lead (contact form submissions)
- REST API routes for all four, plus a contact form POST endpoint
- Placeholder brand colors/copy — swap these once real brand assets are ready
- GA4 script slot left in `index.html` (add your Measurement ID)

## Next steps (per the brief)
- [ ] Swap placeholder colors/typography for real Outpro.India brand kit
- [ ] Replace placeholder copy/images with real content
- [ ] Hook up GA4 + Search Console IDs
- [ ] Optional: Live chat (Tawk.to), Mailchimp newsletter, CRM
- [ ] Lighthouse pass to hit 90+/95+ PageSpeed targets (lazy loading, image compression, CDN)
