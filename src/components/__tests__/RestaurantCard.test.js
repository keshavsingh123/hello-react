import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RestaurantCard, withCfoLabel } from "../RestaurantCard";
import MOCK_DATA from "../MockData/resCardMocks.json";

it("should render resturantCard component with data", () => {
  render(<RestaurantCard restaurant={MOCK_DATA} />);
  const name = screen.getByText("Domino's Pizza");
  expect(name).toBeInTheDocument();
});
it("should render withLabel HOC component", () => {
  const EnhanceRestaurant = withCfoLabel(RestaurantCard);
  render(<EnhanceRestaurant restaurant={MOCK_DATA} />);
  const badge = screen.getByText("Bulk Offer");
  expect(badge).toBeInTheDocument();
  const imageUrl = screen.getByAltText("res-logo");
  expect(imageUrl).toBeInTheDocument();
});
