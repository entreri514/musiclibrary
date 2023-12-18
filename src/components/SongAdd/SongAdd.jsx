import axios from "axios";
import React, { useState, useEffect } from "react";
import TextField from "../TextField/TextField";
const SongAdd = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
      date,
      genre,
    };
    try {
      const response = await axios.post(
        "https://localhost:7031/api/Songs/",
        formData
      );
      if (response.status === 201) {
        onNewSong();
      }
    } catch (error) {
      console.warn("Error submitting new song form: ", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h3>Add a Song</h3>
      <div className="p-2">
        <TextField label="Title" value={title} onChange={setTitle} />
        <TextField label="Artist" value={artist} onChange={setArtist} />
        <TextField label="Album" value={album} onChange={setAlbum} />
        <TextField label="Date" value={date} onChange={setDate} />
        <TextField label="Genre" value={genre} onChange={setGenre} />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default SongAdd;
