import React from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES, IAppRoutes } from "../../../common/routes/app-routes";
import './app-bar.css';

export const AppBar = () => {
    function renderLinks({ path, title }: IAppRoutes, index: number) {
        return (
            <li key={index} className="app-bar-list-item">
                <Link to={path}>
                    {title}
                </Link>
            </li>
        )
    }


    return (
        <div className="app-bar-wrapper">
            <ul className="app-bar-list">
                {APP_ROUTES.map(renderLinks)}
            </ul>
        </div>
    )
}