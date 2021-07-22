import React from "react";
import "./index.css";

const Button = ({ isSelected, value }) => {
  return (
    <div>
      <button className="button">{value}</button>
    </div>
  );
};

export default Button;
