import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" my-5 mx-10 p-10">
      <h1 className="text-center font-2xl font-bold">Cart</h1>
      <div className="flex items-end justify-end">
        <span
          onClick={handleClear}
          className="bg-sky-500 text-xl text-white px-4 py-2 my-4 rounded-lg cursor-pointer"
        >
          clear
        </span>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="bg-gray-200 shadow-md mb-10 p-3" key={item?.id}>
            <div className="flex justify-between">
              <div>
                <h4 className="text-semibold">{item?.name}</h4>
                <h4 className="">{Math.round(item?.rating?.value)} ⭐</h4>
                <h5 className="text-gray-500">₹ {item?.default_price}</h5>
              </div>

              <div className="col-span-6">
                <label>
                  {item?.item_image_thumb_url && (
                    <img
                      className="w-4 h-4 absolute mt-2"
                      src={item?.item_tag_image}
                    />
                  )}
                </label>
                <img className="rounded-md" src={item?.item_image_thumb_url} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-center">Your cart is empty.</h2>
      )}
    </div>
  );
};

export default Cart;
