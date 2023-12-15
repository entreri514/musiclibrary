import "./SongInfo.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const SongInfo = ({ songObj }) => {
  const [songData, setSongData] = useState(null);

  const fetchSongData = async () => {
    try {
      const response = await axios.get("https://localhost:7031/api/Songs/");
      setSongData(response.data);
      console.log(response);
    } catch (error) {
      console.warn("Error fetching music data: ", error);
      setSongData(null);
    }
  };
  useEffect(() => {
    songObj && fetchSongData();
  }, [songObj]);

  return (
    <div>
      <h5>Title</h5>

      <h5>Artist</h5>
      <h5>Album</h5>
      <h5>Genre</h5>
      <h5>ReleaseDate</h5>
      <h5>Delete</h5>
      <h5>Edit</h5>
    </div>
  );
};

export default SongInfo;
