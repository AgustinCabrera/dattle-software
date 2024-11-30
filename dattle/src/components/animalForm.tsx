"use client";
import React, { useState } from "react";

const AnimalForm = () => {
  const [formData, setFormData] = useState({
    identification: "",
    birthDate: "",
    breed: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/animals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Respuesta del servidor:", result);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Identification:</label>
        <input
          type="text"
          name="identification"
          value={formData.identification}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Birth Date:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Breed:</label>
        <input
          type="text"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Animal</button>
    </form>
  );
};

export default AnimalForm;
