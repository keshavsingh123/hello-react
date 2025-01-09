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
