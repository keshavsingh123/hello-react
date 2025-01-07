// import { resObj } from "../utils/mockData";
import { RestaurantCard, withCfoLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// State variable(super powerful variable)

export const Body = () => {
  //   const [listOfRest, setListOfRest] = useState(resObj);
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredText, setfilteredText] = useState([]);
  const onlineStatus = useOnlineStatus();

  const LabelCard = withCfoLabel(RestaurantCard); // HOC import
  const { loggedIn, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/chhindwara/chhindwara-locality-restaurants?place_name=Rautha+Wada%2C+Chhindwara&dishv2_id=9055&context=delivery&location=&isMobile=1"
    );
    const jsonformat = await data.json();
    // console.log(jsonformat);

    const restaurants =
      jsonformat?.page_data?.sections?.SECTION_SEARCH_RESULT || [];
    setListOfRest(restaurants);
    setfilteredText(restaurants);

    // const filterId = filteredText.forEach((res) => {
    //   console.log(res?.info?.resId); // Logs the resId for each restaurant
    // });
  };

  if (onlineStatus !== true) {
    return (
      <div className="text-center">
        <h3>You are offline. Please check your internet connection.</h3>
      </div>
    );
  }

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            name=""
            id=""
            value={searchText}
            className="border border-solid border-black"
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-md"
            onClick={() => {
              const filteredText = listOfRest.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredText(filteredText);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 m-4 rounded-md"
            onClick={() => {
              let filterList = listOfRest.filter(
                (res) => res?.info?.rating?.aggregate_rating > 4
              );
              // setListOfRest(filterList);
              setfilteredText(filterList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="p-4 m-4">
          <label>UserName:</label>
          <input
            type="text"
            name=""
            id=""
            value={loggedIn}
            className="border border-solid border-black"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredText.map((res, index) =>
          res?.info?.resId ? (
            <NavLink
              to={`/restaurant/${res?.info?.resId}`} // Encode the name for safe URL usage to={`/restaurant/${res?.info?.name}`}
              key={res.info.resId}
            >
              {res.info.cfo ? (
                <LabelCard restaurant={res.info} />
              ) : (
                <RestaurantCard restaurant={res.info} />
              )}
            </NavLink>
          ) : (
            <div key={index}>Restaurant data unavailable</div>
          )
        )}
      </div>
    </div>
  );
};
