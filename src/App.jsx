import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";

function App() {
  const [songs, setSongs] = useState([]);
  const [activeIndx, setActiveIndx] = useState(-1);
  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7031/api/Songs/");
      setSongs(response.data);
      console.log(response);
    } catch (error) {
      console.warn("fetchSongs request error: ", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const selectedSong = songs[activeIndx];

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
