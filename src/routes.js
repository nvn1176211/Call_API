import React from 'react';
import HomePage from './pages/homePage/HomePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import ProductListPage from './pages/productListPage/ProductListPage';
import ProductActionPage from './pages/productActionPage/ProductActionPage';

const routes = [
    {
        path:'/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path:'/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path:'/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history} />
    },
    {
        path:'/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductActionPage history={history} match={match} />
    },
    {
        path:'',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;