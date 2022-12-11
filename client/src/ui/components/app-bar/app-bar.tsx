import React from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES, IAppRoutes } from "../../../common/routes/app-routes"

export const AppBar = () => {
    function renderLinks({ path, title }: IAppRoutes, index: number) {
        return (
            <li key={index}>
                <Link to={path}>
                    {title}
                </Link>
            </li>
        )
    }


    return (
        <div>
            <ul>
                {APP_ROUTES.map(renderLinks)}
            </ul>
        </div>
    )
}