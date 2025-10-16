# 👥 React Users App

A React application that demonstrates **nested routing**, **API data fetching**, and **dynamic user details page** using **React Router DOM** and **Axios**.

---
## 📸 Demo
![Demo Screenshot](https://raw.githubusercontent.com/shahfahad22/React-Projects-Collection/main/07-Nested%20Routing/src/assets/screenshot.png)

---
## ✨ Features

- 🏠 **Home Page** – Simple landing page with navigation.  
- 👤 **Users Page** – Fetches and displays a list of users from [JSONPlaceholder API](https://jsonplaceholder.typicode.com).  
- 📄 **User Details Page** – Nested route (`/users/:id`) that shows details of a selected user.  
- 🔄 **Loading & Error Handling** – Displays loading state and error message on API failure.  
- 🔗 **React Router v6** – Clean routing with nested routes (`<Outlet />`).  

---

## 📂 Project Structure
/src
┣ 📂 pages
┃ ┣ 🏠 Home.jsx
┃ ┣ 👥 Users.jsx
┃ ┗ 📄 UserDetails.jsx
┣ 📜 App.jsx
┣ 📜 main.jsx


## 🛠️ Tech Stack

- **React.js** (Frontend Library)  
- **React Router DOM** (Routing)  
- **Axios** (API Calls)  
- **JavaScript (ES6+)**  

---

## ⚙️ Installation

Clone the repo and install dependencies:

```bash
# Clone the repository
git clone https://github.com/shahfahad22/react-users-app.git

# Navigate into project folder
cd react-users-app

# Install dependencies
npm install

# Start development server
npm run dev

📖 Usage

Visit http://localhost:5173/ after running the dev server.

Navigate to Users Page → /users.

Click on View Details to see details of a user at route /users/:id.

Use Back to Users or Go Home links for navigation.
