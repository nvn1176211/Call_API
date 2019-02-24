import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {

  onDelete = (id) => {
    var verify = window.confirm('Do you really want to delete this product?'); 
    if(verify)
    this.props.onDelete(id);
  }
  
  render() {
    var { index, product } = this.props;
    var statusName = product.status === true ? 'stocking' : 'out of stock';
    var statusClass = product.status === true ? 'success' : 'danger';
    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ product.id }</td>
        <td>{ product.name }</td>
        <td>{ product.price }</td>
        <td>
          <span className={`badge badge1 badge-${statusClass}`}>{ statusName }</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn1 btn-success m-r-10">Edit</Link>
          <button 
            type="button" 
            className="btn btn1 btn-danger"
            onClick={ () => this.onDelete(product.id) }
          >Remove</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
