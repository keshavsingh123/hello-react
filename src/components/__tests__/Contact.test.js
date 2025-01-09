import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should check heading in contact component", () => {
  render(<Contact />);
  //Querying
  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});
test("should check button text in contact component", () => {
  render(<Contact />);
  //Querying
  const button = screen.getByText("Submit");

  //Assertion
  expect(button).toBeInTheDocument();
});
test("check input with placeholder name in contact component", () => {
  render(<Contact />);
  //Querying
  const inputName = screen.getByPlaceholderText("name"); //return array
  //Assertion
  expect(inputName).toBeInTheDocument();
});

test("check 2 input in contact component", () => {
  render(<Contact />);
  //Querying
  const inputBoxes = screen.getAllByRole("textbox"); //return array
  // console.log(inputBoxes);
  //Assertion
  expect(inputBoxes.length).toBe(2);
});
