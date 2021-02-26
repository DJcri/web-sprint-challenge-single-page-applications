import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/form">Customize a Pizza</Link>
    </div>
  );
};

export default HomePage;
