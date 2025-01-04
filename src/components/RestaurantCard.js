export const RestaurantCard = (props) => {
  // console.log(props);
  //const {resName,cuisine} = props
  const { restaurant } = props;
  return (
    <div className="res-card">
      <img src={restaurant?.image?.url} alt="res-logo" className="res-logo" />
      <h3>{restaurant?.name}</h3>
      {<h4>{restaurant?.cuisine.map((item) => item.name).join(", ")}</h4>}
      <h4>{restaurant?.rating.aggregate_rating}</h4>
      <h4>{restaurant?.cft.text}</h4>
      <h4>{restaurant?.locality?.name}</h4>
    </div>
  );
};
