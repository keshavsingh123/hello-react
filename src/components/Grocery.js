import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenu from "./RestaurantMenu";
import React, { useState, useEffect } from "react";

const Grocery = () => {
  const { resInfo, resMenu } = useRestaurantMenu();
  // Conditional rendering for loading state
  if (!resInfo) {
    return (
      <div>
        <h2>Restaurant not found</h2>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-center">Info about particular Card </h2>
      <RestaurantMenu resMenu={resMenu} resInfo={resInfo} />
    </div>
  );
};

export default Grocery;
