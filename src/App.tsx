import React from "react";

import "./App.css";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Property from "./components/property/Property";

function App() {
  return (
    <div className="container">
      <Header />
      <Property />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
