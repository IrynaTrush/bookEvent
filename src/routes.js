import React from 'react';
import Home from './pages/Home/index';
import Bucket from './pages/bucket/index';

export const routes = [
    {
        path: '/bookEvent/bucket',
        component: <Bucket />, 
    },
    {
        path: '/bookEvent/',
        component: <Home />,
        exact: true
    },
    {
        path: '*',
        component: () => ( <div>page not found 404</div>)
    }
]