import { combineReducers } from 'redux';
import products from './products';
import editProduct from './editProduct';

const appReducers = combineReducers({
    products,
    editProduct
});

export default appReducers;