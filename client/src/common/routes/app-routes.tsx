import React from "react";
import { Home } from '../../views/home/home';
import { Income } from "../../views/income/income";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export interface IAppRoutes {
    path: string;
    title: string;
    element: React.ReactNode;
}

export const APP_ROUTES = [
    { path: '/', title: 'home', element: <Home />, icon: <AccountBalanceIcon /> },
    { path: '/income', title: 'income', element: <Income />, icon: <AttachMoneyIcon />},
]