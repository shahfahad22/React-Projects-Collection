# React Master-Detail UI with API Integration  

This project demonstrates a **React-based Master-Detail interface** that fetches data from an API and displays it in a clean, user-friendly layout.  

## 🚀 Features  

✅ **Loading State** – A smooth loading spinner appears while data is being fetched.  
✅ **Error Handling** – Displays a clear error message if the API request fails.  
✅ **Master-Detail Layout** –  
   - **Left Panel**: Displays a list of items as cards (showing only names).  
   - **Right Panel**: Shows complete details of the selected item when a card is clicked.  

This separation makes it easy to scan through items while still being able to view details instantly.  

## 🛠️ Tech Stack  

- **React** (Functional Components + Hooks)  
- **Axios** for API requests  
- **CSS / Tailwind (if applied)** for styling  

## 📚 What I Learned  

- How to manage **API states (loading, success, error)** in React.  
- Implementing a **master-detail UI pattern**.  
- Improving **UX** by separating overview (names) and details (expanded data).  

## 📂 Project Structure  

src/
├── components/
│ ├── Card.js # Displays each user/item in the left panel
│ └── Details.js # Shows full details in the right panel
├── App.js # Main layout and state handling
└── api/axios.js # API request logic (if separated)



## 🎯 Usage  

1. Clone the repository  
   ```bash
   git clone https://github.com/shahfahad22/your-repo-name.git
   cd your-repo-name

# Install dependencies

npm install

npm start

The app will open at http://localhost:3000/
.

🌟 Future Improvements

Add search and filter functionality.

Make it fully responsive for mobile devices.

Use global state management (like Redux or Context API).

![Screenshot](/src/assets/image.png)
