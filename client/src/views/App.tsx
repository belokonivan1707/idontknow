import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { AppBar } from "../ui/app-bar/app-bar";
import { Drawer } from "../ui/drawer/drawer";
import { ROUTES } from "../routes/app-routes";
import { Home } from "./home/home";
import { Income } from "./income/income";
import { English } from "./english/english";
import { MuiTheme } from "../styles/mui-theme";
import { MainLayout } from "../ui/main-layout/main-layout";

const App = () => {

  return (
    <ThemeProvider theme={MuiTheme}>
      <BrowserRouter>
        <div className="wrapper">
          <MainLayout>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.INCOME} element={<Income />} />
              <Route path={ROUTES.ENGLISH.HOME} element={<English />} />
              <Route path={ROUTES.HOME} element={<Home />} />
            </Routes>
          </MainLayout>
        </div>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
