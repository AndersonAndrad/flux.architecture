import React, { useState, useEffect } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { FormatPrice } from '../../util/format';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/modules/cart/action';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map((product) => ({
        ...product,
        priceFormattedBRL: FormatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(cartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt="" />
          <strong>{product.title}</strong>
          <span>{product.priceFormattedBRL}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>
            <span>Add to card</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
