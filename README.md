# 🍽️ Teravia — Food Recipe Finder

> Discover delicious recipes, explore different cuisines, and find your next favorite meal with Teravia.

## 🌐 Live Demo

🚀 **[Visit Teravia Live](https://teravia-one.vercel.app/)**

---

## 📖 About The Project

**Teravia** is a modern food recipe finder website designed to make discovering recipes simple, beautiful, and enjoyable.

Users can explore recipes, browse food categories, search for specific recipes, and view detailed recipe information through a clean and responsive interface.

The project was built using **React.js** with a focus on responsive design, reusable components, and a smooth user experience.

---

## ✨ Features

- 🏠 **Home Page** — Beautiful landing page with featured recipes
- 🔍 **Recipe Search** — Search for recipes easily
- 🍕 **Categories** — Explore recipes based on food categories
- 📖 **Recipe Details** — View detailed recipe information
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile
- ☰ **Responsive Navbar** — Mobile-friendly hamburger navigation
- 📩 **Contact Form** — Users can send messages through the contact page
- 📜 **Terms & Services** — Dedicated terms and services page
- 🔒 **Privacy Policy** — Policy information for users
- ❌ **Error Page** — Custom page for invalid routes
- ⚡ **Fast Performance** — Built with Vite
- 🎨 **Modern UI** — Dark theme with an elegant food-inspired design

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- React Router
- React Icons

### Backend / Services

- Supabase
- Supabase Edge Functions
- Gmail SMTP

### Deployment

- Vercel

---

## 📂 Project Structure

```text
recipe-finder/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── Terms.json
│   │
│   ├── components/
│   │   ├── CategoryCard.jsx
│   │   ├── Hamburger.jsx
│   │   ├── HeroComponent.jsx
│   │   ├── Navbar.jsx
│   │   ├── NotResultFound.jsx
│   │   └── RecipeCard.jsx
│   │
│   ├── layouts/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Categories.jsx
│   │   ├── CategoryItem.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── TermsOfServices.jsx
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── supabase/
│   └── functions/
│       └── send-contact-email/
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md