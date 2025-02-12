import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* ItemList de Artistas */}
      <ItemList title="Artistas" items={10} />
      {/* ItemList de Músicas */}
      <ItemList title="Músicas" items={20} />
    </div>
  );
};

export default Main;
