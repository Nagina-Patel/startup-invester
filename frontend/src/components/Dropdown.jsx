import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, items }) => {
  return (
    <div className="group relative">
      <span className="hover:text-orange-500 cursor-pointer py-2">{title}</span>
      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.to}

            className="block px-5 py-2 border-b hover:bg-gray-100"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
