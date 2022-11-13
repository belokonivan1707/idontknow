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
import { AppBar } from "../common/components/app-bar/app-bar";
import { APP_ROUTES } from "../common/constants/app-routes.constans";

const App = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        {APP_ROUTES.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
