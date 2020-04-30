import React, { Component } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { bindActionCreators } from 'redux';
import { ProductList } from './styles';
import api from '../../services/api';
import { FormatPrice } from '../../util/format';
import { connect } from 'react-redux';
import * as cartActions from '../../store/modules/cart/action';

class Home extends Component {
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

  handleAddProduct = (id) => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { itemProducts } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {itemProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt="" />
            <strong>{product.title}</strong>
            <span>{product.priceFormattedBRL}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
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
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
