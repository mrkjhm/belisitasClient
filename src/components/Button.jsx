import { Link } from "react-router-dom";

const Button = ({ text, link, bgColor, textColor = "#FFFFFF", className = "" }) => {


  if (link) {
    return (
        <Link
            to={link}
            className={`${className}`}
            style={{ backgroundColor: bgColor, color: textColor }}
        >
          {text}
        </Link>
    );
  }

  return (
      <button
          className={`${className}`}
          style={{ backgroundColor: bgColor, color: textColor }}
      >
        {text}
      </button>
  );
};

export default Button;
