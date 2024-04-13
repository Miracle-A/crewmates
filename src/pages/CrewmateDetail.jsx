// CrewmateDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./CrewmateDetail.css";

const CrewmateDetail = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching crewmate", error);
      } else {
        setCrewmate(data);
      }
    };

    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <div>Loading...</div>;
  return (
    <div className="crewmate-detail">
      <h1>Crewmate: {crewmate.name}</h1>
      <br />
      <h2>Stats:</h2>
      <br />
      <h3>
        <p>Speed: {crewmate.speed} mph</p>
      </h3>
      <h3>
        <p>Color: {crewmate.color}</p>
      </h3>

      <div className="detail-buttons">
        <Link to="/gallery" className="button back-to-gallery">
          Back to Gallery
        </Link>
        <Link to={`/edit/${crewmate.id}`} className="button edit-crewmate">
          Edit Crewmate
        </Link>
      </div>
    </div>
  );
};

export default CrewmateDetail;
