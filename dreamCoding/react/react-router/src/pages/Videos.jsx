import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos(props) {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="video id : "
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
