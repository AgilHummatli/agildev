import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={["17:00"]} />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the standard mock values", () => {
  const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toEqual(expectedValue);
});

test("updateTimes returns the same state when no valid action is provided", () => {
    const initialState = ["17:00"];
    const action = { type: "INVALID" };
    expect(updateTimes(initialState, action)).toEqual(initialState);
});
