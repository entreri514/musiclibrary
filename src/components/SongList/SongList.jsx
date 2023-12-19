import axios from "axios";
import React, { useState, useEffect } from "react";
import SongItem from "../SongItem/SongItem";

const SongList = ({ songs = [] }) => {
  const songItems = songs.map((song) => (
    <SongItem
      key={song.id}
      id={song.id}
      title={song.title}
      artist={song.artist}
      album={song.album}
      releasedate={song.releaseDate}
      genre={song.genre}
    />
  ));
  console.log({ songItems });
  return (
    <div>
      <h4>My Music List</h4>
      <table className="flex.item">
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
        <tr>{songItems}</tr>
      </table>
    </div>
  );
};

export default SongList;
