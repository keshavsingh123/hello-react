import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const Items = () => {
  const { resMenu } = useRestaurantMenu(); //custom hook
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  return (
    <>
      {/* <h1 className="text-center text-bold">Items</h1> */}
      {resMenu?.menus?.map((menuObj, index) => (
        <div key={index} data-testid="foodItems">
          {menuObj?.menu?.categories?.map((c) => (
            <div key={c?.category?.id}>
              {c?.category?.items?.map((item) => (
                <div
                  className="bg-gray-200 shadow-md mb-10 p-3"
                  key={item?.item?.id}
                >
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-semibold">{item?.item?.name}</h4>
                      <h4 className="">
                        {Math.round(item?.item?.rating?.value)} ⭐
                      </h4>
                      <h5 className="text-gray-500 mb-4">
                        ₹ {item?.item?.default_price}
                      </h5>
                      <button
                        onClick={() => handleAdd(item?.item)}
                        className="bg-sky-500 text-xl text-white p-2 my-4 rounded-lg cursor-pointer"
                      >
                        Add+
                      </button>
                    </div>

                    <div className="col-span-6">
                      <label>
                        {item?.item?.item_image_thumb_url && (
                          <img
                            className="w-4 h-4 absolute mt-2"
                            src={item?.item?.item_tag_image}
                          />
                        )}
                      </label>
                      <img
                        className="rounded-md"
                        src={item?.item?.item_image_thumb_url}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* </div> */}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Items;
