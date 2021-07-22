import React from "react";
import "./index.css";

const Button = (props) => {
  return (
    <div>
      <a className="button" href={props.url}>
        {props.name}
      </a>
    </div>
  );
};

export default Button;
