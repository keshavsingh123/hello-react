import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Items from "./Items";

const RestaurantMenu = ({ resInfo, resMenu }) => {
  const [visibleItems, setVisibleItems] = useState({});

  const toggleVisibility = (id) => {
    setVisibleItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the visibility for the specific id
    }));
  };
  return (
    <div className="p-5 mx-7 my-5">
      <div className="grid grid-flow-col grid-cols-1 gap-4">
        <div className="">
          <h1 className="font-semibold text-4xl">{resInfo?.name}</h1>
          <h3 className="text-gray-500">{resInfo?.cuisine_string}</h3>
          <h3 className="text-gray-400">{resInfo?.info?.locality?.name}</h3>
          <p className="text-gray-400">{resInfo?.timing?.timing_desc}</p>
        </div>

        <div className="flex justify-between">
          <div className="col-span-6 inline-flex mr-8">
            <div className="mt-1 mr-2">
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-2 rounded-md font-medium border border-gray-200 bg-green-600 text-white shadow-sm">
                {resInfo?.rating_new?.ratings?.DINING?.rating} ⭐
              </span>
            </div>
            <div className="col-span-6 ">
              <p className="font-bold">
                {resInfo?.rating_new?.ratings?.DINING?.reviewCount}
              </p>
              <p className="border-b-violet-600">
                {resInfo?.rating_new?.ratings?.DINING?.sideSubTitle}
              </p>
            </div>
          </div>
          <div className="col-span-6 flex">
            <div className="mt-1 mr-2">
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-2 rounded-md font-medium border border-gray-200 bg-green-600 text-white shadow-sm">
                {resInfo?.rating_new?.ratings?.DELIVERY?.rating} ⭐
              </span>
            </div>

            <div className="">
              <p className="font-bold">
                {resInfo?.rating_new?.ratings?.DELIVERY?.reviewCount}
              </p>
              <p>{resInfo?.rating_new?.ratings?.DELIVERY?.sideSubTitle}</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center">Menu</h2>
      {resMenu?.menus?.map((menuObj) => (
        <div
          key={menuObj?.menu?.id}
          className="grid grid-cols-12 gap-4 divide-x-2"
        >
          <div className="col-span-3 " key={menuObj?.menu?.id}>
            <h2 className="hover:text-semibold hover:bg-red-300">
              {menuObj?.menu?.name}({(menuObj?.menu?.name).length})
            </h2>
          </div>
          <div className="col-span-9 ml-5 mb-10 ">
            {menuObj?.menu?.categories?.map((c) => (
              <div className="ml-2" key={c?.category?.id}>
                <h2
                  className="text-gray-500 text-3xl p-3 bg-orange-100 cursor-pointer"
                  onClick={() => toggleVisibility(c?.category?.id)}
                >
                  {c?.category?.name} ⏬
                </h2>
                {visibleItems[c?.category?.id] && (
                  <Items
                    categoryId={c?.category?.id}
                    visibleItems={visibleItems}
                    toggleVisibility={toggleVisibility}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
