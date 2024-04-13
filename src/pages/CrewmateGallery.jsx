// CrewmateGallery.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import "./CrewmateGallery.css";
import { Link } from "react-router-dom";

const CrewmateCard = ({ crewmate, onDelete, onEdit }) => {
  return (
    <div className="crewmate-card">
      <h3>
        <Link to={`/crewmate/${crewmate.id}`}>{crewmate.name}</Link>{" "}
      </h3>
      <p>Speed: {crewmate.speed} mph</p>
      <p>Color: {crewmate.color}</p>
      <button onClick={() => onEdit(crewmate)}>Edit</button>
      <button onClick={() => onDelete(crewmate.id)}>Delete</button>
    </div>
  );
};

const CrewmateGallery = () => {
  const [crewmates, setCrewmates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const fetchCrewmates = async () => {
    const { data, error } = await supabase.from("crewmates").select("*");
    if (error) {
      console.error("Error fetching crewmates:", error);
    } else {
      setCrewmates(data);
    }
  };

  const deleteCrewmate = async (id) => {
    const { error } = await supabase.from("crewmates").delete().match({ id });
    if (error) {
      console.error("Error deleting crewmate:", error);
    } else {
      setCrewmates(crewmates.filter((crewmate) => crewmate.id !== id));
    }
  };

  const handleEdit = (crewmate) => {
    navigate(`/edit/${crewmate.id}`);
  };

  return (
    <div className="crewmate-gallery">
      {crewmates.map((crewmate) => (
        <CrewmateCard
          key={crewmate.id}
          crewmate={crewmate}
          onDelete={deleteCrewmate}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default CrewmateGallery;
