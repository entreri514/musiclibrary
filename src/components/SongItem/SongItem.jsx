import React, { useState, useEffect } from "react";
import SongList from "../SongList/SongList";
import "./SongItem.css";
import SongEdit from "../SongEdit/SongEdit";

import axios from "axios";

const SongItem = ({ id, title, artist, album, releaseDate, genre }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const handleEdit = (e) => {
    setIsEdit(!isEdit);
  };
  const handleDelete = async (e) => {
    setIsDelete(!isDelete);

    try {
      const response = await axios.delete(
        `https://localhost:7031/api/Songs/${id}`
      );
    } catch (error) {
      console.warn("Error deleting song: ", error);
    }
  };

  const btnClass = isDelete ? "btn btn-success" : "btn btn-secondary";

  return (
    <div className="flex-item">
      <tr>
        <td>{title}</td>
        <td>{artist}</td>
        <td>{album}</td>
        <td>{releaseDate}</td>
        <td>{genre}</td>

        {
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" type="button">
              Edit
            </button>
          </div>
        }

        <button className={btnClass} onClick={handleDelete}>
          Delete
        </button>
      </tr>
    </div>
  );
};

export default SongItem;
