# 🛒 React + TailwindCSS E-Commerce Cart System

## Overview

🚀 **React + TailwindCSS E-Commerce Cart System**  

This project is a **modern e-commerce application** built with React and TailwindCSS. It demonstrates **cart functionality, API integration, responsive design**, and **state management**, giving a real-world e-commerce experience.  

---

![Project Screenshot](https://github.com/shahfahad22/React-Projects-Collection/blob/62da8bb1c4624bf1f9cf47ffe1e08779ed3eac25/09-HPlus%20E-Commerce%20Cart/src/assets/screnshot.png) <!-- Replace with your actual screenshot file -->


## Features


- 🛒 **Dynamic Products:**  
  Products are dynamically fetched from the API (`/products/order/price`) and always stay updated.  

- ➕ **Add to Cart / Remove / Quantity Management:**  
  Users can easily add, remove, and update product quantities in the cart.  

- 💰 **Automatic Total Calculation:**  
  The cart's total price updates automatically when items are added, removed, or quantity is changed.  

- 📌 **Fixed Navbar & Cart Badge:**  
  The navbar stays fixed while scrolling, and the cart badge dynamically reflects the number of items.  

- 📱 **Responsive & Modern UI:**  
  Designed with TailwindCSS for a clean and modern user interface that works on all devices.  

- ⚡ **State Management:**  
  Uses `useReducer` + `Context API` for centralized and scalable state management.  

- 🔗 **Axios API Integration:**  
  Axios is used for API requests, making the code reusable and maintainable.  

---

## Tech Stack

- **Frontend:** React, TailwindCSS, JavaScript (ES6+)  
- **State Management:** React Context + useReducer  
- **API Client:** Axios  
- **Routing:** react-router-dom  

---

## Folder Structure

src/
│
├─ Components/
│ ├─ Navbar.jsx
│ ├─ ProductCard.jsx
│ └─ CartItem.jsx
│
├─ Context/
│ └─ CartContext.jsx
│
├─ Pages/
│ ├─ Home.jsx
│ └─ Cart.jsx
│
├─ Api/
│ └─ axiosClient.js
│
├─ App.jsx
└─ main.jsx


1. **Clone the repository:**  
```bash
git clone https://github.com/shahfahad22/react-ecommerce-cart.git


Install dependencies:
```bash
npm install

```bash
Run the app

```bash
npm run dev


Usage

Products load dynamically on the home page.

Click “Add to Cart” to add items to the cart.

On the cart page, you can increase/decrease item quantity or remove items.

Cart total updates automatically.

Navbar is fixed during scrolling, and the cart badge updates live.

Outcome

This project demonstrates a real-world e-commerce architecture that is scalable, maintainable, and portfolio-ready. It highlights React skills, TailwindCSS proficiency, and modern front-end design principles.

Author

Shah Fahad - GitHub: shahfahad22

💡 This project is ideal for showcasing in your portfolio and demonstrating practical React skills.
