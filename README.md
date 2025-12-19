# Client Connect 🚀

Client Connect is a **full-stack MERN web application** designed to showcase projects, client testimonials, and capture user inquiries through a professional landing page with an admin dashboard for content management.

This project focuses on **clean UI, real backend integration, cloud image handling, and real-world architecture**.

---

## 🔥 Features

### 🌐 Public Website

* Modern landing page with responsive design
* Hero section with contact form
* About Us section
* “Why Choose Us” section
* Not Your Average Realtor section
* Projects showcase (fetched from backend)
* Happy Clients testimonials (fetched from backend)
* Newsletter subscription
* Fully responsive for mobile, tablet & desktop

### 🛠️ Admin Dashboard

* Add new projects with image upload
* Add client testimonials with image upload
* View contact form submissions
* View newsletter subscribers
* Clean, responsive admin UI
* Real-time data updates after submission

---

## 🧩 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Multer (file handling)
* Cloudinary (image storage)

### Deployment

* Deployed on **Render**
* Database hosted on **MongoDB Atlas**

---

## 📁 Project Structure

```
ClientConnect/
│
├── client/                  # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/api.js
│   │   └── main.jsx
│
├── server/                  # Backend (Node + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **server** folder:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

⚠️ **Never commit `.env` to GitHub**

---

## ▶️ Running Locally

### 1️⃣ Backend

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### 2️⃣ Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🌍 Deployments

```
https://clientconnect-4wm1.onrender.com
```

### Frontend URL

```
https://clientconnect-1.onrender.com/
```

---

## 📸 Image Handling

* Images are uploaded using **Multer**
* Stored securely on **Cloudinary**
* Only image URLs are stored in **MongoDB**

---

## 🎯 Purpose of the Project

* Demonstrate real-world MERN stack skills
* Showcase frontend ↔ backend integration
* Implement cloud-based image handling
* Build admin panel workflows
* Follow clean UI/UX and scalable architecture

---

## 🧠 Key Learnings

* REST API design and structuring
* File uploads with Multer & Cloudinary
* Responsive UI using Tailwind CSS
* Form handling, validation, and error management
* Deployment & environment configuration

---

## 👤 Author

**Kirti Choudhary**

Feel free to fork, explore, or build upon this project.
