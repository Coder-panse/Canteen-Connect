import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col mt-20 gap-10 md:flex-row justify-between items-center md:my-16 ">
      <div >
       <h1 className="text-4xl font-semibold sm:text-5xl md:font-bold md:text-6xl md:tracking-wide md:leading-18">
       Order Your <br />
        <span className="text-orange-400">Meal</span> <br />
        In
        <span className="text-orange-400"> Your College</span>
       </h1>
        <p className="my-4 text-xs sm:text-sm sm:my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, <br />
          sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit <br /> sed
          tortor etiam volutpat ipsum.
        </p>

        <button className="px-8 py-3 rounded-lg outline-none bg-orange-400 text-white font-medium">Order Now</button>
      </div>

      <div>
        <img src="/cheif.png" className="rotate-y-180 w-[400px] sm:w-[500px]" alt="" />
      </div>
    </div>
  );
};

export default Header;
