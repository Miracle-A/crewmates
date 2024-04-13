// EditCrewmate.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const EditCrewmate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" });

  useEffect(() => {
    fetchCrewmate();
  }, [id]);

  const fetchCrewmate = async () => {
    const { data, error } = await supabase
      .from("crewmates")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      console.error("Error fetching crewmate:", error);
    } else {
      setCrewmate(data);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCrewmate({ ...crewmate, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from("crewmates")
      .update({
        name: crewmate.name,
        speed: crewmate.speed,
        color: crewmate.color,
      })
      .eq("id", id);
    if (error) {
      console.error("Error updating crewmate:", error);
    } else {
      navigate("/gallery");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={crewmate.name}
        onChange={handleInputChange}
      />
      <label>Speed:</label>
      <input
        type="text"
        name="speed"
        value={crewmate.speed}
        onChange={handleInputChange}
      />
      <label>Color:</label>
      <input
        type="text"
        name="color"
        value={crewmate.color}
        onChange={handleInputChange}
      />
      <button type="submit">Update Crewmate</button>
    </form>
  );
};

export default EditCrewmate;
