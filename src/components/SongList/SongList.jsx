const SongList = ({ songs = [], activeIndx, setAvtiveIndx }) => {
  const songItems = songs.map((song, i) => (
    <SongItem
      key={song.title}
      title={song.title}
      activeIndx={activeIndx}
      setActiveIndx={setActiveIndx}
      index={i}
    />
  ));
  return (
    <div className="flex-item">
      <h3>My Music Library</h3>
      <div>{songItems}</div>
    </div>
  );
};

export default SongList;
