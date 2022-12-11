import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AppBar } from "../ui/components/app-bar/app-bar";
import { APP_ROUTES, IAppRoutes } from "../common/routes/app-routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <AppBar />
        <Routes>
          {APP_ROUTES.map((route: IAppRoutes, index: number) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
