import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Extract resId from the URL
  const [resMenu, setResMenu] = useState([]);
  const resInfo = useRestaurantMenu(resId); //custom hook

  useEffect(() => {
    fetchData();
  }, []);

  //for menu item only
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.zomato.com/webroutes/getPage?page_url=/chhindwara/raimens-caf%C3%A979-chhindwara-locality/order&location=&isMobile=1"
      );
      const jsonform = await data.json();

      const menus = jsonform?.page_data?.order?.menuList || [];
      setResMenu(menus);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error.message);
    }
  };

  // Conditional rendering for loading state
  if (!resInfo) {
    return (
      <div>
        <h2>Restaurant not found</h2>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="menu">
      <h3>{resInfo?.rating?.aggregate_rating} stars</h3>
      <h1>{resInfo?.name}</h1>
      <h3>{resInfo?.cuisine_string}</h3>
      <h3>{resInfo?.info?.locality?.name}</h3>

      <h2>Menu</h2>
      <ul>
        {/* If the restaurant has menus, display them */}
        {resMenu?.menus?.map((menuObj) => (
          <li key={menuObj?.menu?.id}>{menuObj?.menu?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
