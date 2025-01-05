export const RestaurantCard = (props) => {
  // console.log(props);
  //const {resName,cuisine} = props
  const { restaurant } = props;
  return (
    <div className="p-4 m-4 w-56  bg-gray-200 rounded-md hover:bg-gray-800 hover:text-red-500">
      <img src={restaurant?.image?.url} alt="res-logo" className="rounded-lg" />
      <h3 className="font-medium py-2">{restaurant?.name}</h3>
      {<h4>{restaurant?.cuisine.map((item) => item.name).join(", ")}</h4>}
      <h4>{restaurant?.rating.aggregate_rating}</h4>
      <h4>{restaurant?.cft.text}</h4>
      <h4>{restaurant?.locality?.name}</h4>
    </div>
  );
};
