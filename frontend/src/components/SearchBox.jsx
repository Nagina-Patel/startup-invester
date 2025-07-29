// src/components/SearchBox.jsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="relative w-44">
      <input
        type="text"
        placeholder="Search here"
        className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <FaSearch className="absolute right-3 top-2.5 text-orange-500 text-lg" />
    </div>
  );
};

export default SearchBox;
