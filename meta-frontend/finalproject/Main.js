import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

// Standard Mock API for the Capstone
const fetchAPI = (date) => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const submitAPI = (formData) => true;

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0];
  return fetchAPI(today);
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <section style={{ padding: "50px", textAlign: "center" }}>
        <h1>Reserve a Table</h1>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </section>
    </main>
  );
};

export default Main;
