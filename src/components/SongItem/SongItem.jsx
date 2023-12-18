import React, { useState, useEffect } from "react";
import SongList from "../SongList/SongList";
import "./SongItem.css";

const SongItem = ({ title, artist, album, releaseDate, genre }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (e) => {
    setIsEdit(!isEdit);
  };

  //  const handleActive = () => {
  //    setActiveIndx(index);
  //  };

  return (
    <table>
      <tr>
        <td>
          {title}
          {artist}
          {album}
          {releaseDate}
          {genre}
        </td>
      </tr>
    </table>
  );
};

export default SongItem;
