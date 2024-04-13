import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import "./CreateCrewmate.css";

const initialCrewmateState = {
  name: "",
  speed: "",
  color: "",
};

const CreateCrewmate = () => {
  const [crewmate, setCrewmate] = useState(initialCrewmateState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCrewmate({ ...crewmate, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.from("crewmates").insert([
      {
        name: crewmate.name,
        speed: crewmate.speed,
        color: crewmate.color,
      },
    ]);

    if (error) {
      console.error("Error inserting data: ", error.message);
    } else {
      console.log("Successfully inserted data: ", data);
      setCrewmate(initialCrewmateState);
    }
  };

  return (
    <div className="create-crewmate">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={crewmate.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="speed">Speed (mph):</label>
          <input
            id="speed"
            name="speed"
            type="text"
            value={crewmate.speed}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Color:</label>
          <div>
            <input
              id="red"
              name="color"
              type="radio"
              value="Red"
              onChange={handleInputChange}
            />
            <label htmlFor="red">Red</label>
            <label htmlFor="blue">
              <input
                id="blue"
                name="color"
                type="radio"
                value="Blue"
                checked={crewmate.color === "Blue"}
                onChange={handleInputChange}
              />
              Blue
            </label>
            <label htmlFor="green">
              <input
                id="green"
                name="color"
                type="radio"
                value="Green"
                checked={crewmate.color === "Green"}
                onChange={handleInputChange}
              />
              Green
            </label>
            <label htmlFor="yellow">
              <input
                id="yellow"
                name="color"
                type="radio"
                value="Yellow"
                checked={crewmate.color === "Yellow"}
                onChange={handleInputChange}
              />
              Yellow
            </label>

            <label htmlFor="purple">
              <input
                id="purple"
                name="color"
                type="radio"
                value="Purple"
                checked={crewmate.color === "Purple"}
                onChange={handleInputChange}
              />
              Purple
            </label>
          </div>
        </div>
        <button type="submit">Create Crewmate</button>
      </form>
    </div>
  );
};

export default CreateCrewmate;
