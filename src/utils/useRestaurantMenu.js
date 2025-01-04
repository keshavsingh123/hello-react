import React, { useState, useEffect } from "react";

import React from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/chhindwara/raimens-caf%C3%A979-chhindwara-locality/order&location=&isMobile=1"
    );
    const jsonform = await data.json();

    // Access the SECTION_SEARCH_RESULT array
    const restaurants = jsonform?.page_data?.sections?.SECTION_BASIC_INFO || {};

    console.log("Menus:", jsonform?.page_data?.order);

    const selectedRestaurant = restaurants?.res?.res_id === resId;
    if (selectedRestaurant === resId) {
      setResInfo(restaurants); // Set the restaurant info
    } else {
      console.error("No restaurant found with the given resId");
    }
  };
};

export default useRestaurantMenu;
