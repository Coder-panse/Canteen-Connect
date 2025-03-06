import React from 'react'

const Menu = () => {
    const item = [
        {
          img: "/sandwich.jpeg",
          name: "Gyro Sandwhic",
          price: "$15",
          button: "Add to Cart",
        },
        {
          img: "/pic2.jpeg",
          name: "Enchilade",
          price: "$15",
          button: "Add to Cart",
        },
        {
          img: "/pic3.jpeg",
          name: "Green Beans",
          price: "$15",
          button: "Add to Cart",
        },
        {
          img: "/pic4.jpeg",
          name: "Pizza",
          price: "$15",
          button: "Add to Cart",
        },
        {
          img: "/pic5.jpeg",
          name: "Chicken Pot Pie",
          price: "$15",
          button: "Add to Cart",
        },
        {
          img: "/pic6.jpeg",
          name: "Green Salad",
          price: "$15",
          button: "Add to Cart",
        },
      ];
      return (
        <div className="w-full mt-16">
          <div className="w-full text-center">
            <p className="text-md text-orange-400 ">Product</p>
            <h1 className="text-3xl font-semibold">Most Popular Items</h1>
          </div>
    
          <div className="my-20 flex gap-10 sm:gap-16 justify-center flex-wrap">
            {item.map((item) => (
              <div className="w-60 sm:w-52 md:w-72 rounded-lg overflow-hidden shadow-lg">
                <div className="w-60  sm:w-52 md:w-72 md:h-48">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="px-2.5 pt-2.5 pb-5 sm:pb-8">
                  <p className="text-lg font-medium mb-2.5">{item.name}</p>
                  <div className="flex justify-between">
                    <button className="px-3 py-1 sm:px-5 sm:py-2 bg-orange-400 rounded-full text-white  text-xs sm:text-sm">
                      {item.button}
                    </button>
                    <p className="text-sm">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
    
          </div>
    
        </div>
      );
}

export default Menu