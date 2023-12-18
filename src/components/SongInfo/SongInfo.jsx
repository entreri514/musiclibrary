import "./SongInfo.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const SongInfo = ({ songObj }) => {
  const [songData, setSongData] = useState(null);

  const fetchSongData = async () => {
    try {
      const response = await axios.get("https://localhost:7031/api/Songs/");
      setSongData(response.data);
    } catch (error) {
      console.warn("Error fetching music data: ", error);
      setSongData(null);
    }
  };
  useEffect(() => {
    songObj && fetchSongData();
  }, [songObj]);

  return <div></div>;
};

export default SongInfo;
