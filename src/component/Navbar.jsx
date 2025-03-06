import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav >
      <div className="flex justify-between items-center my-5">
        <div>
          <img className="w-24 md:w-32" src="QuickBite.png" alt="" />
        </div>

        <div className="font-medium hidden md:block">
          <ul className="flex gap-16">
            <li>
              <NavLink className={({isActive})=>isActive? `text-orange-500`:""} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive? `text-orange-500`:""} to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=>isActive? `text-orange-500`:""} to="/shop">Service</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-8">
          <IoMdCart style={{ fontSize: "25px" }} />
          <div>
            <button onClick={() => setIsOpen(!isOpen)}>
        
                <RiMenu3Fill className="md:hidden text-[25px]" />
              
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ x: "100%" }} // Start from the right
        animate={{ x: isOpen ? 0 : "100%" }} // Slide in when open, slide out when closed
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed top-0 right-0 h-full w-2/3 bg-white z-20 text-lg py-10 shadow-lg md:hidden"
      >
        <div className="w-full flex justify-end pr-10 sm:pr-20"> 
          <button onClick={()=>setIsOpen(!isOpen)}>
            <IoCloseSharp className="  md:hidden text-[25px]" />
          </button>
        </div>

        <div className="flex flex-col items-center mt-10">
        <ul className="space-y-6">
          <li className="cursor-pointer hover:text-gray-300">
            <NavLink className={({isActive})=>isActive? `text-orange-500`:""} to="/" onClick={()=>setIsOpen(!isOpen)}>Home</NavLink>
          </li>
          <li className="cursor-pointer hover:text-gray-300">
            <NavLink className={({isActive})=>isActive? `text-orange-500`:""} to="/menu" onClick={()=>setIsOpen(!isOpen)}>Menu</NavLink>
          </li>
          <li className="cursor-pointer hover:text-gray-300">
            <NavLink className={({isActive})=>isActive? `text-orange-500`:""} to="/menu" onClick={()=>setIsOpen(!isOpen)}>Service</NavLink>
          </li>
        </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
