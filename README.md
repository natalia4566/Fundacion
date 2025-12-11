# Fundación Hogar Geriátrico Tu Amparo y Tu Fortaleza

> Full-stack institutional website built with React, Node.js, Express and MongoDB.

This project is a complete web platform developed for the “Fundación Hogar Geriátrico Tu Amparo y Tu Fortaleza”, an organization dedicated to improving the quality of life of elderly individuals. The platform includes key features to present the foundation’s mission, activities, donation support, blog news, testimonials, and contact forms.

The website is deployed and actively used, with responsive layouts and a secure backend that handles dynamic content and payment integration.

🔗 Live site: https://www.hogaramparofortaleza.org/  
📍 GitHub: https://github.com/natalia4566/Fundacion  

---

## 📌 Table of Contents

1. Features  
2. Tech Stack
3. Project Structure
4. Getting Started
5. Environment Variables 
6. API Endpoints


## 🚀 Features

- Responsive and professional UI built with **React** and **CSS Modules**  
- Dynamic routing and navigation between pages  
- Backend APIs built in **Node.js** with **Express**  
- Database management with **MongoDB**  
- Authentication and protected admin routes  
- Donation integration using **Wompi API**  
- Blog section for posting news and updates  
- Contact form and user interaction sections  
- Deployed using **Vercel**

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, CSS Modules |
| Backend | Node.js, Express |
| Database | MongoDB |
| Deployment | Vercel |
| API Integration | Wompi API |
| Tools | Git, Postman, Figma |

---

## 📁 Project Structure

Fundacion/
├── app/ # Frontend React code
├── backend/ # Backend Node.js & Express API
├── components/ # Reusable UI components
├── public/ # Static assets
├── styles/ # Global and module styles
├── package.json
├── README.md



> The project is split between frontend and backend logic, with the React app consuming API endpoints provided by the Express server.

---

## 🧩 Getting Started

### Requirements

Make sure you have installed:

- Node.js (>= 18.x)  
- npm or yarn  
- MongoDB (local or cloud instance)

### Installation

1. Clone the repo:

```bash
git clone https://github.com/natalia4566/Fundacion.git
Install dependencies:
npm install

Start server:
npm run dev

Start the frontend:
npm start

🔐 Environment Variables
Create a .env file in the backend root with:
PORT=5000
MONGO_URI=mongodb_connection_string
WOMPI_PUBLIC_KEY=wompi_public_key
WOMPI_PRIVATE_KEY=wompi_private_key


📡 API Endpoints
Here are some example endpoints for local usage:

Method	Route	Description
GET	/api/about	Get about section
POST	/api/contact	Submit contact form
GET	/api/blogs	Fetch blog posts
POST	/api/blogs	Create a new blog 
