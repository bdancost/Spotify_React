import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link to={path} className="item-list__link">
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired, // `title` deve ser uma string obrigatória
  items: PropTypes.number.isRequired, // `items` deve ser um número obrigatório
  itemsArray: PropTypes.array.isRequired, // `itemsArray` deve ser um array obrigatório
  path: PropTypes.string.isRequired, // `path` deve ser uma string obrigatória
  idPath: PropTypes.string, // `idPath` pode ser uma string opcional
};

export default ItemList;
