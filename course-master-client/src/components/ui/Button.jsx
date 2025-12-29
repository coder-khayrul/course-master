import React from 'react';
import { Link } from 'react-router';

const Button = ({ btnText, type = "button", size, icon: Icon, path,onClick }) => {
  const classes = `animated-button ${size === "sm" ? "px-8 py-1.5 text-sm" : ""}`;

  if (type === "submit") {
    return (
      <button onClick={onClick} type="submit" className={classes}>
        {Icon && <Icon className="arr-1 h-8 w-8" />}
        <span className="text">{btnText}</span>
        <span className="circle"></span>
        {Icon && <Icon className="arr-2 h-8 w-8" />}
      </button>
    );
  }

  return (
    <Link onClick={onClick} to={path || "#"} className={classes}>
      {Icon && <Icon className="arr-1 h-8 w-8" />}
      <span className="text">{btnText}</span>
      <span className="circle"></span>
      {Icon && <Icon className="arr-2 h-8 w-8" />}
    </Link>
  );
};

export default Button;
