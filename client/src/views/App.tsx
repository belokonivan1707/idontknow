import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AppBar } from "../ui/app-bar/app-bar";
import { Drawer } from "../ui/drawer/drawer";
import { APP_ROUTES, IAppRoutes } from "../common/routes/app-routes";

const App = () => {
  const [anchor, setAnchor] = React.useState(false);

  function toggleDrawer() {
    setAnchor((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        <AppBar toggleDrawer={toggleDrawer}/>
        <Drawer anchor={anchor} toggleDrawer={toggleDrawer}/>
        
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
