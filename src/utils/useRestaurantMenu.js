// import React, { useState, useEffect } from "react";

// import React from "react";

// const useRestaurantMenu = () => {
//   // const [resInfo, setResInfo] = useState(null);
//   const [resMenu, setResMenu] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.zomato.com/webroutes/getPage?page_url=/chhindwara/raimens-caf%C3%A979-chhindwara-locality/order&location=&isMobile=1"
//     );
//     const jsonform = await data.json();

//     // Access the SECTION_SEARCH_RESULT array
//     // const restaurants = jsonform?.page_data?.sections?.SECTION_BASIC_INFO || {};
//     const menus = jsonform?.page_data?.order?.menuList || [];
//     setResMenu(menus);
//     // setResInfo(restaurants);
//   };
//   return resMenu
// };

// export default useRestaurantMenu;
import { useState, useEffect } from "react";

const useRestaurantMenu = (url) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://www.zomato.com/webroutes/getPage?page_url=/chhindwara/raimens-caf%C3%A979-chhindwara-locality/order&location=&isMobile=1";
        const data = await fetch(url);
        const jsonform = await data.json();

        const restaurants =
          jsonform?.page_data?.sections?.SECTION_BASIC_INFO || {};
        const menus = jsonform?.page_data?.order?.menuList || [];
        setResInfo(restaurants);
        setResMenu(menus);
      } catch (error) {
        console.error("Error fetching restaurant menu:", error.message);
      }
    };

    fetchData();
  }, [url]);

  return { resInfo, resMenu };
};

export default useRestaurantMenu;
