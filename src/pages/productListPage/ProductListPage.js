import React, { Component } from 'react';
import ProductList from './../../components/productList/ProductList';
import ProductItem from './../../components/productItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductsRequest, deleteProductsRequest } from './../../actions/index';

class HomePage extends Component {
  componentDidMount() {
      this.props.fetchProductsRequest()
  }
  render() {
    var { products } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link to='product/add' className="btn btn-primary m-b-20">Add product
          </Link>
            <ProductList>
              {this.showProduct(products)}
            </ProductList>
          </div>
        </div>
      </div>
    );
  }

  showProduct = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem
          key={index}
          index={index}
          product={product}
          onDelete={this.onDelete}
        />
      })
    }
    return result;
  }

  onDelete = (id) => {
    this.props.deleteProductsRequest(id)
  }
}

const mapStatetoProps = state => {
  return {
    products: state.products
  }
}

const mapDispactToProps = (dispact, props) => {
  return {
    fetchProductsRequest: products => {
      dispact(fetchProductsRequest(products))
    },
    deleteProductsRequest: id => {
      dispact(deleteProductsRequest(id))
    }
  }
}

export default connect(mapStatetoProps, mapDispactToProps)(HomePage);
