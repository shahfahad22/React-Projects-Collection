# 🏠 HomeRent – Rental Property Web App

HomeRent is a **React-based rental property web application** that allows users to browse rental listings with authentication and protected routes. It provides a simple yet powerful interface for exploring apartments, villas, and family homes across multiple cities.  

---

## 🚀 Features

- 🔑 **Login & Authentication**  
  - User credentials are verified with data fetched from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).  
  - Session is stored in **localStorage**.  
  - **Protected Routes** ensure only logged-in users can access certain pages.  

- 🧭 **Dynamic Navbar with Logout**  
  - Navigation includes **Home, Properties, About, Contact, and Logout**.  
  - Logout clears the session and redirects to the login page.  

- 🎯 **Hero Section with Search**  
  - Filter properties by **city, price, and rooms**.  

- 🏘 **Featured Rentals**  
  - Showcases **Modern Apartments, Luxury Villas, and Family Apartments** with details like pricing & location.  

- 🔒 **Protected Routing**  
  - A custom `ProtectedRoute` component redirects unauthorized users to the login page.  

- 🎨 **Clean & Responsive UI**  
  - Built with **CSS** for a smooth, user-friendly experience.  

---

## 🛠 Tech Stack

- ⚛ **React**
- 🔗 **React Router DOM**
- 🌐 **Fetch API** (for login authentication)
- 💾 **localStorage** (for user sessions)
- 🎨 **CSS**

---

## ✨ Learning Highlights

- Implemented **authentication flow** using API + localStorage.  
- Practiced **state management** with `useState` and `useNavigate`.  
- Strengthened understanding of **component-based architecture** and reusable components.  

---

## 📸 Demo Screenshot

![Project Screenshot](./screenshot.png)  
*(Add your project screenshot inside the repo and update the path if needed.)*




## 📂 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/shahfahad22/React-Projects-Collection.git


# Navigate to project folder
cd HomeRent

# Install dependencies
npm install

# Run the app
npm run dev
