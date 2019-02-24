import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProductRequest, editProductRequest, updateProductRequest } from '../../actions/index';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      cStatus: ''
    }
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.editProductRequest(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editProduct) {
      var { editProduct } = nextProps;
      this.setState({
        id: editProduct.id,
        name: editProduct.name,
        price: editProduct.price,
        cStatus: editProduct.status
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    var { name, price, cStatus, id } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: name,
      price: price,
      status: cStatus
    }
    if (id) {
      this.props.updateProductRequest(product);      
    } else {
      this.props.addProductRequest(product);
    }
    history.goBack();
  }

  render() {
    var { name, price, cStatus } = this.state;
    return (
      <div className="row">
        <div className="col-6 mg-c">
          <form onSubmit={this.onSubmit}>

            <div className="form-group">
              <label>Name of Product</label>
              <input
                type="text"
                className="form-control"
                name='name'
                value={name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                name='price'
                value={price}
                onChange={this.onChange}
              />
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name='cStatus'
                  value={cStatus}
                  onChange={this.onChange}
                  checked={cStatus}
                />
                Stocking
              </label>
            </div>

            <button type="submit" className="btn btn-primary m-r-10">Save</button>
            <Link to='/product-list' className="btn btn-danger">Cancel</Link>

          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editProduct: state.editProduct
  }
}

const mapDispactToProps = (dispact, props) => {
  return {
    addProductRequest: (product) => {
      dispact(addProductRequest(product))
    },
    editProductRequest: (id) => {
      dispact(editProductRequest(id))
    },
    updateProductRequest: (product) => {
      dispact(updateProductRequest(product))
    }
  }
}

export default connect(mapStateToProps, mapDispactToProps)(HomePage);
