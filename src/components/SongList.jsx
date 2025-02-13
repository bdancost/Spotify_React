import SingleItem from "./SongItem";

const SongList = ({ songsArrayFromArtist }) => {
  return (
    <div className="song-list">
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />

      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};

export default SongList;
