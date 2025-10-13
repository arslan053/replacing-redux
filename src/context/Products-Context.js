import { createContext, useState } from "react";

export const productContext = createContext({ products: [], toggleFav })

export default function ProductsProvider({ children }) {
  const [productList, setProductList] = useState( [
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ] )

  const toggleFavourite = productId => {
    setProductList(currentProductList => {
      const productIndex = currentProductList.findIndex(p => p.id === productId);
      const newFavourite = !currentProductList[productIndex].isFavorite

      const updatedProduct = {...currentProductList[productIndex], isFavorite: newFavourite}
      const updatedProducts = [...currentProductList]
      updatedProducts[productIndex] = updatedProduct;

      return updatedProducts
    })
  }
  return <productContext.Provider value={{products: productList, toggleFav: toggleFavourite}}>
    {children}
  </productContext.Provider>
} 