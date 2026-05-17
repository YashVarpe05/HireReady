# Interview AI Prep

A modern interview preparation app built with AI-powered report generation, resume PDF creation, and JWT-based authentication.

This project helps job seekers turn their resume, self-description, and job description into actionable interview preparation content using Google GenAI. It includes a React frontend and an Express backend with MongoDB.

---

## 🚀 What this project does

- Register and log in with email/password authentication.
- Upload a resume and provide your self-description plus job description.
- Generate a custom interview report with:
  - technical and behavioral questions
  - intention behind questions
  - suggested answers
  - skill gap analysis
  - a day-by-day preparation plan
- Generate a polished resume PDF from the AI output.
- Store interview reports for each logged-in user.

---

## 🧰 Stack

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- Google GenAI (`@google/genai`)
- Puppeteer for PDF generation
- Multer for file uploads
- Zod for schema validation

### Frontend

- React
- Vite
- Axios
- Sass
- React Router

---

## 📁 Project structure

```text
Backend/
  package.json
  server.js
  src/
    app.js
    config/database.js
    controllers/
      auth.controller.js
      interview.controller.js
    middlewares/
      auth.middleware.js
      file.middleware.js
    models/
      blacklist.model.js
      interviewReport.model.js
      user.model.js
    routes/
      auth.routes.js
      interview.routes.js
    services/
      ai.service.js

Frontend/
  package.json
  vite.config.js
  index.html
  src/
    main.jsx
    App.jsx
    app.routes.jsx
    style.scss
    features/
      auth/
      interview/
```

---

## ✅ Prerequisites

Before you begin, make sure you have:

- Node.js installed (recommended v18+)
- npm installed
- MongoDB running locally or a MongoDB Atlas connection string
- Google GenAI API access with a valid API key

---

## ⚙️ Backend setup

1. Open a terminal in `Backend/`
2. Install dependencies:

```bash
cd Backend
npm install
```

3. Create a `.env` file in `Backend/` with:

```env
MONGO_URI=mongodb://localhost:27017/interview-ai-yt
JWT_SECRET=your-very-long-secret-string
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
```

4. Start the backend server:

```bash
npm run dev
```

If `nodemon` is not installed globally, install it with:

```bash
npm install -g nodemon
```

The backend runs at:

- `http://localhost:3000`

---

## 🧩 Frontend setup

1. Open a terminal in `Frontend/`
2. Install dependencies:

```bash
cd Frontend
npm install
```

3. Start the React app:

```bash
npm run dev
```

The frontend runs at:

- `http://localhost:5173`

---

## 🌐 How the app works

1. Register or login on the frontend.
2. Upload your resume file.
3. Enter your self-description and a target job description.
4. Submit the form to generate the AI-powered interview report.
5. View saved reports and download a generated resume PDF.

---

## 🔧 Important configuration

The backend uses these env variables:

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret phrase used to sign JWT tokens
- `GOOGLE_GENAI_API_KEY` — Google GenAI API key

The frontend currently sends requests to:

- `http://localhost:3000`

If you change backend ports or deploy, update `Frontend/src/features/auth/services/auth.api.js` and `Frontend/src/features/interview/services/interview.api.js`.

---

## 💡 Tips

- Keep your `.env` file secret and never commit it to Git.
- Use a strong JWT secret generated with Node or PowerShell.
- Make sure MongoDB is available before starting the backend.
- If the AI response fails, verify your Google GenAI key and network access.

---

## ✨ Why this project is useful

This app turns raw interview preparation inputs into a polished plan. It gives job seekers:

- focused preparation guidance
- tailored interview questions and answers
- a custom resume PDF
- a single, easy interface for managing reports

---

## 📌 Want to improve it?

Possible next enhancements:

- environment-based API URL configuration for frontend
- better error handling and loading states
- user profile editing
- resume text extraction from PDF files
- deployment to cloud hosting platforms

---

Made with AI, built for interview success. Good luck! 🚀
