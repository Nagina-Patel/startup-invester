import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import LogoImage from "../assets/Images/logo.png";
import Home5 from "../assets/Images/home5.jpg";
import Dropdown from "./Dropdown";
import aboutItems from "../data/aboutDropdown";
import recogitionItems from "../data/recognitionDropdown";
import fundingItems from "../data/FundingDropdown";
import SchemesandPoliciesItems from "../data/SchemesandPoliciesDropdown"
import marketAccessItems from "../data/marketAccessDropdown";
import MarqueeInitiativesItems from "../data/MarqueeInitiativesDropdown";
import ResourcesItems from "../data/ResourcesDropdown";
import NetworkItems from "../data/NetworkDropdown";
import SearchBox from "./SearchBox"; 

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      {/* Top Bar for Mobile */}
      <div className="flex justify-between items-center px-4 py-3 md:hidden">
        <img
          src={LogoImage}
          alt="Logo"
          className="h-14 w-14 rounded-full object-cover"
        />
        <button
          className="text-orange-500 text-2xl"
          onClick={() => setShowMenu(true)}
        >
          ☰
        </button>
      </div>
      {/* Left Slide Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${showMenu ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}

      >
        {/* Header inside drawer */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setShowMenu(false)} className="text-2xl">
            <IoClose />
          </button>
        </div>

        {/* Drawer Menu Items */}
        <nav className="flex flex-col gap-4 px-4 py-4 text-base font-semibold text-gray-800">
         
          <Dropdown title="About"items={aboutItems} />
         <Dropdown title="Recognition"items={recogitionItems} />
          <Dropdown title="funding"items={fundingItems} />
          <Dropdown title="Schemes&Policies"items={SchemesandPoliciesItems} />
         <Dropdown title="Market"items={marketAccessItems} />
         <Dropdown title="Initiatives"items={MarqueeInitiativesItems} />
         <Dropdown title="Resources"items={ResourcesItems} />
        <Dropdown title="Network"items={NetworkItems} />

          {/* English Button */}
          {/* <button className="bg-orange-500 text-white mt-2 px-4 py-2 rounded-md">
            ENGLISH
          </button> */}

          {/* Search Bar */}
          <div className="w-full mt-3">
            <div className="relative w-full">
              {/* <input
                type="text"
                placeholder="Search here"
                className="w-full border border-gray-600 rounded-full pl-5 pr-12 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <FaSearch className="absolute right-4 top-2.5 text-orange-500 text-lg" /> */}

                  <SearchBox /> {/* 👈 Yahaan pe use karo jahan aapko search chahiye */}



          
            </div>
          </div>
        </nav>
      </div>

      {/* Main Navbar for Desktop */}
      <div className="hidden md:flex md:items-center md:justify-between px-10 py-4">
        {/* Logo */}
        <div>
          <img
            src={LogoImage}
            alt="Logo"
            className="h-14 w-14 rounded-full object-cover"
          />
        </div>

        {/* Center Links */}
        <nav className="flex gap-6 text-base font-semibold text-gray-800">

         <Dropdown title="About" items={aboutItems} />
         <Dropdown title="Recognition" items={recogitionItems} />
         <Dropdown title="funding" items={fundingItems} />
         <Dropdown title="Schemes&Policies"items={SchemesandPoliciesItems} />
         <Dropdown title="Market"items={marketAccessItems} />
         <Dropdown title="Initiatives"items={MarqueeInitiativesItems} />
        <Dropdown title="Resources"items={ResourcesItems} />
        <Dropdown title="Network"items={NetworkItems} />

        </nav>

        {/* Right Section */} 
        <div className="flex items-center gap-4">
          <div className="relative w-44">
            {/* <input
              type="text"
              placeholder="Search here"
              className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <FaSearch className="absolute right-3 top-2.5 text-orange-500 text-lg" />
          */}

                 <SearchBox /> {/* 👈 Yahaan pe use karo jahan aapko search chahiye */}


         
          </div>

          {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-base">
            ENGLISH ⌄
          </button> */}

          <img
            src={Home5}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar; 