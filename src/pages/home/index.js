import React, { Component } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';

export default class Home extends Component {
  state = {
    itemProducts: [],
  };

  async componentDidMount() {
    const response = await api.get('stock');
    this.setState({ itemProducts: response.data });
  }

  render() {
    const { itemProducts } = this.state;

    return (
      <ProductList>
        {itemProducts.map((product) => (
          <li key={product.id}></li>
        ))}
      </ProductList>
    );
  }
}
