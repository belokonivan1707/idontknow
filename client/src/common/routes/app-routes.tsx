import React from "react";
import { Home } from '../../views/home/home';
import { Income } from "../../views/income/income";

export interface IAppRoutes {
    path: string;
    title: string;
    element: React.ReactNode;
}

export const APP_ROUTES = [
    { path: '/', title: 'home', element: <Home /> },
    { path: '/income', title: 'income', element: <Income /> },
    { path: '/test-route', title: 'test route', element: '<h1>Test Route</h1>' },
]