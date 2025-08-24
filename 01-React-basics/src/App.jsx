import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Service";

const App = () => {
  let currentPage = "Home";
  let showPage;

  if (currentPage === "Home") {
    showPage = <Home />;
  } else if (currentPage === "About") {
    showPage = <About />;
  } else if (currentPage === "Services") {
    showPage = <Services />;
  } else {
    showPage = <h1>No Page Is Chosen</h1>;
  }

useEffect(() => {
alert("Hello ")
}, [])
  return (
    <div>
      <Header />
      <main className="content">{showPage}</main>
      <Footer />
    </div>
  );
};

export default App;
