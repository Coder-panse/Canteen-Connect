import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const minus = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="mt-10 ">
      <div className="flex gap-4 mb-10 items-center justify-start ">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <FaArrowLeft />
        </button>
        <h1 className="font-semibold text-xl">My Cart</h1>
      </div>

      {/* item */}

      <div className="flex flex-col items-center md:flex-row justify-center gap-10  ">
        <div className="flex flex-col gap-5 sm:gap-8 ">
          {/* 1 item */}
          <div className="flex gap-4 px-2 py-1 shadow-lg rounded-md w-[300px] md:w-[500px] ">
            <div className="w-20 h-20">
              <img
                src="sandwich.jpeg"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            <div>
              <p className="font-medium">Gyro Sandwich</p>
              <div className="flex items-center gap-2 my-0.5">
                <CiCircleMinus
                  style={{
                    fontSize: "20px",
                  }}
                  onClick={minus}
                />

                {quantity}

                <CiCirclePlus
                  style={{
                    fontSize: "20px",
                  }}
                  onClick={() => setQuantity(quantity + 1)}
                />
              </div>
              <p>$15</p>
            </div>
          </div>

          {/* 2nd item */}
          <div className="flex gap-4 px-2 py-1 shadow-lg rounded-md md:w-[500px]">
            <div className="w-20 h-20">
              <img
                src="sandwich.jpeg"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            <div>
              <p className="font-medium">Gyro Sandwich</p>
              <div className="flex items-center gap-2 my-0.5">
                <CiCircleMinus
                  style={{
                    fontSize: "20px",
                  }}
                  onClick={minus}
                />

                {quantity}

                <CiCirclePlus
                  style={{
                    fontSize: "20px",
                  }}
                  onClick={() => setQuantity(quantity + 1)}
                />
              </div>
              <p>$15</p>
            </div>
          </div>
        </div>

        {/* place order */}

        <div className="mt-10 flex flex-col justify-center md:mt-0 ">
          <h1 className="text-2xl font-medium text-center mb-4">Place Order</h1>
          <div className="w-max p-4 rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Sub Total</td>
                  <td className="p-2 text-right">500rs</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Discount</td>
                  <td className="p-2 text-right">0rs</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Total</td>
                  <td className="p-2 text-right">500rs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="px-6 py-2.5 rounded-full text-white font-medium bg-orange-400 mt-6 mx-auto">CheckOut</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
