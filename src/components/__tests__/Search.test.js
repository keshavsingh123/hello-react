const { render, screen, fireEvent } = require("@testing-library/react");
import "@testing-library/jest-dom";
import { act } from "react";
import { Body } from "../Body";
import MOCK_DATA from "../MockData/mockResList.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render Body with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  //screen should load card according input
  const cards = screen.getAllByTestId("resCard");
  // expect(searchBtn).toBeInTheDocument();
  expect(cards.length).toBe(2);
});
it("should search rest list of restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeClick = screen.getAllByTestId("resCard");
  expect(cardsBeforeClick.length).toBe(9);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  fireEvent.click(topRatedBtn);

  //screen should load card according input
  const cardsAfterClick = screen.getAllByTestId("resCard");
  expect(cardsAfterClick.length).toBe(4);
});
// it("should filter topRated restaurant", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );
//   const cardsBeforeSearch = screen.getAllByTestId("resCard");
//   expect(cardsBeforeSearch.length).toBe(10);
//   const searchBtn = screen.getByRole("button", { name: "Search" });
//   const searchInput = screen.getByTestId("searchInput");
//   fireEvent.change(searchInput, { target: { value: "burger" } });
//   fireEvent.click(searchBtn);

//   //screen should load card according input
//   const cardsAfterSearch = screen.getAllByTestId("resCard");
//   // expect(searchBtn).toBeInTheDocument();
//   expect(cardsAfterSearch.length).toBe(2);
// });
