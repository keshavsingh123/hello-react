import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../MockData/singleRestData.json";
import "@testing-library/jest-dom";
import Items from "../Items";
import { Header } from "../Header";
import { Provider } from "react-redux";
import { act } from "react";

import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should check Add button in every item", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Items />
        </Provider>
      </BrowserRouter>
    )
  );

  //Querying
  //   const itemName = screen.getByText("Whole Wheat Pepper Paneer");
  const addBtn = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();
  //   expect(screen.getAllByTestId("foodItems").length).toBe(25);

  //   expect(itemName).toBeInTheDocument();
  //   expect(addBtn.length).toBeGreaterThan(0);
});
