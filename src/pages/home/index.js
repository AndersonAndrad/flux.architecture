import React, { Component } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { FormatPrice } from '../../util/format';

export default class Home extends Component {
  state = {
    itemProducts: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map((product) => ({
      ...product,
      priceFormattedBRL: FormatPrice(product.price),
    }));
    this.setState({ itemProducts: data });
  }

  render() {
    const { itemProducts } = this.state;

    return (
      <ProductList>
        {itemProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt="" />
            <strong>{product.title}</strong>
            <span>{product.priceFormattedBRL}</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
              </div>
              <span>Add to card</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
