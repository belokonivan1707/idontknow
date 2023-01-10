import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import './app-bar.css';

interface IProps {
    toggleDrawer: () => void;
}

export const AppBar: React.FC<IProps> = ({ toggleDrawer }) => {
    return (
        <React.Fragment>
            <div className="app-bar-wrapper">
                <div className="app-bar-container">
                    <IconButton sx={{ borderRadius: 0 }} onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </div>
            <div className="app-bar-empty" />
        </React.Fragment>
    )
}