import { useContext } from 'react';

import Card from '../UI/Card';
import { productContext } from '../../context/Products-Context';
import './ProductItem.css';

const ProductItem = props => {
//   const dispatch = useDispatch();

const toggleFunction = useContext(productContext).toggleFav

  const toggleFavHandler = () => {
    toggleFunction(props.id)
    // dispatch(toggleFav(props.id));
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
