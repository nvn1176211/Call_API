import * as types from './../constants/actionTypes';
import apiCaller from '../utils/apiCaller';

export const fetchProductsRequest = () => {
    return dispact => {
        return apiCaller('product-list', 'GET', null).then(res => {
            dispact(fetchProducts(res.data))
        })
    }
}

export const fetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCT,
        products
    }
}

export const deleteProductsRequest = (id) => {
    return dispact => {
        return apiCaller(`product-list/${id}`, 'DELETE', null).then(res => {
            dispact(deleteProducts(id))
        })
    }
}

export const deleteProducts = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

export const addProductRequest = (product) => {
    return dispact => {
        return apiCaller('product-list', 'POST', product).then(res => {
            dispact(addProduct(res.data))
        })
    }
}

export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const editProductRequest = (id) => {
    return dispact => {
        return apiCaller(`product-list/${id}`, 'GET', null).then(res => {
            dispact(editProduct(res.data))
        })
    }
}

export const editProduct = (product) => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}

export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}

export const updateProductRequest = (product) => {
    return dispact => {
        return apiCaller(`product-list/${product.id}`, 'PUT', product).then(res => {
            dispact(updateProduct(res.data));
        })
    }
}