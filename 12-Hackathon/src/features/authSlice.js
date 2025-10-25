import { createSlice } from "@reduxjs/toolkit";

// Load users array from localStorage or empty array
const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

const initialState = {
  users: savedUsers,
  user: currentUser,
  isLoggedIn: currentUser ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      // Add new user to users array
      state.users.push(action.payload);
      state.user = action.payload;
      state.isLoggedIn = true;
      // Save all users to localStorage
      localStorage.setItem("users", JSON.stringify(state.users));
      // Save current logged-in user
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    login: (state, action) => {
      // Find user by email & password
      const matchedUser = state.users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );
      if (matchedUser) {
        state.user = matchedUser;
        state.isLoggedIn = true;
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      } else {
        state.isLoggedIn = false;
        state.user = null;
        alert("Invalid credentials");
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
