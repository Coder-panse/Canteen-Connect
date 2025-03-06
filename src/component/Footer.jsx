import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white  mt-[6rem] px-8 py-4 flex flex-col gap-8 sm:flex-row justify-between text-sm rounded-tl-2xl rounded-tr-2xl flex-wrap md:items-center">
        <div>
          <img src="QuickBite.png" alt="" className="w-28" />
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Commodo
            libero viverra dapibus odio sit malesuada <br /> in quis. Arcu tristique
            elementum viverra integer id.
          </p>
        </div>
        <div>
            <h1 className="text-lg font-medium">Opening Hours</h1>
            <p>Mon-Sat: 10:00 am - 4:00 pm</p>
        </div>
        <div>
            <p className="text-lg font-medium">User Links</p>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Menu</li>
            </ul>
        </div>
        <div>
            <h1 className="text-lg font-medium">Address</h1>
            <p>IIST, Rau , INDORE <br />+123 456 789</p>
        </div>
      </div>

      <div className="bg-gray-900 text-white text-center py-5">
        <p >Copyright@Canteen Connect</p>
      </div>
    </div>
  );
};

export default Footer;
