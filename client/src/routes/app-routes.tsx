import React from "react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SchoolIcon from '@mui/icons-material/School';

export interface IAppRoutes {
    path: string;
    title: string;
    element: React.ReactNode;
}

export const DROWER_ROUTES = [
    { path: '/', title: 'home', icon: <AccountBalanceIcon /> },
    { path: '/income', title: 'income', icon: <AttachMoneyIcon />},
    { path: '/english/tongue-twisters', title: 'english', icon: <SchoolIcon />},
]

export const ROUTES = {
    HOME: '/',
    INCOME: '/income',
    ENGLISH: {
        HOME: '/english/*',
        TWISTERS: '/tongue-twisters',
        PHRASES: '/phrases',
    },
}