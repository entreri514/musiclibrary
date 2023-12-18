import React, { useState, useEffect } from "react";
import SongList from "../SongList/SongList";
import "./SongItem.css";

const SongItem = ({
  title,
  artist,
  album,
  releaseDate,
  genre,
  activeIndx,
  setActiveIndx,
  index,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (e) => {
    setIsEdit(!isEdit);
  };

  const handleActive = () => {
    setActiveIndx(index);
  };

  return (
    <div>
      <table>
        <td>{title}</td>
        <td>{artist}</td>
        <td>{album}</td>
        <td>{releaseDate}</td>
        <td>{genre}</td>
      </table>
    </div>
  );
};

export default SongItem;
