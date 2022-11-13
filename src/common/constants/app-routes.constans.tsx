import React from "react";
import {Home} from '../../views/home/home';

export interface IAppRoutes {
    path: string;
    title: string;
    element: React.ReactNode;
}

export const APP_ROUTES = [
    {path: '/', title: 'home', element: <Home />},
    {path: '/expenses', title: 'expenses', element: '<h1>expenses</h1>'},
    {path: '/test-route', title: 'test route', element:  '<h1>Test Route</h1>'},
]