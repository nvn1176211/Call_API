import React, { Component } from 'react';

class ProductList extends Component {
  render() {  
    return (
      <div className="card">
        <div className="card-header bg-primary text-light">List of Products</div>
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Index</th>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             { this.props.children }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
