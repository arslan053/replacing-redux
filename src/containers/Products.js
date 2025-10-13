import { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import { productContext } from '../context/Products-Context';
import './Products.css';

const Products = props => {
  // const productList = useSelector(state => state.shop.products);

  const productList = useContext(productContext).products
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
