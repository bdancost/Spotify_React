import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* ItemList de Artistas */}
      <ItemList
        title="Artistas"
        items={10}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />
      {/* ItemList de Músicas */}
      <ItemList
        title="Músicas"
        items={25}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;
