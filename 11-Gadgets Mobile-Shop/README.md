# 🛍️ Gadgets Mobile-Shop &nbsp;&nbsp;[🌐 **Live Preview**](https://gadgetsmobileshop1.netlify.app/login)

A modern **Single Page Application (SPA)** built with **React**, featuring **user authentication**, **protected/public routes**, **a fully functional cart system**, and **a clean, responsive UI** using **Tailwind CSS**.


---

## 📸 Screenshots

> 🖼️ Add your project screenshots here. Replace the link below with your own image URLs.

![Project Screenshot](https://github.com/shahfahad22/React-Projects-Collection/blob/275ba62e3141694d5685570f79759bc88974fd1b/11-Gadgets%20Mobile-Shop/src/assets/Screenshot.png)

---

## 🚀 Features

- 🔐 **Authentication System**  
  - Register and Login functionality using `localStorage`  
  - Public routes (Login, Register) and Protected routes (Home, Products, Cart, etc.)  
  - Redirection for unauthorized users  

- 🧭 **Routing**  
  - SPA navigation using **React Router DOM v6**  
  - Dynamic routing for Product Detail Pages (PDP)  

- 🛒 **Cart Management**  
  - Add, increase, decrease, and remove items  
  - Real-time cart updates using `localStorage` and `window` events  
  - Per-user cart storage (`cart_useremail`) for multi-user support  
  - Cart summary with total items & price calculation  

- 🧱 **Pages**  
  - `Home`, `Products`, `About`, `Blog`, `Contact`  
  - `Login` / `Register`  
  - `Add to Cart` Page  
  - `PDP` (Product Detail Page) with related products section  

- 🎨 **UI / UX**  
  - Responsive layout using Tailwind CSS  
  - Clean grid-based product sections  
  - Interactive quantity buttons and hover effects

---

## 🛠️ Tech Stack

- ⚛️ **React** (Functional Components & Hooks)  
- 🧭 **React Router DOM v6**  
- 💾 **LocalStorage API**  
- 🧼 **Tailwind CSS**  
- 🧰 **Lucide React Icons**

---

## 📂 Project Structure

# src/
├── App.jsx
├── index.js
├── Layout/
├── Pages/
│ ├── Home.jsx
│ ├── ProductsPage.jsx
│ ├── PDPPage.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Addtocart.jsx
│ └── ...
└── assets/


---

## ▶️ Getting Started

```bash
# Clone the repository
git clone https://github.com/shahfahad22/your-repo-name.git

# Install dependencies
npm install

# Run the project
npm run dev
Open 👉 http://localhost:5173 (or the port shown in your terminal) to see the app live.

