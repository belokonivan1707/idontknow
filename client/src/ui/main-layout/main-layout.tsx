import React from 'react';
import { Box } from '@mui/material';
import { AppBar } from '../app-bar/app-bar';
import { Drawer } from '../drawer/drawer';

interface IProps {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
    const [anchor, setAnchor] = React.useState(false);

    function toggleDrawer() {
        setAnchor((prev) => !prev);
    };

    return (
        <div id="private-layout" style={{ width: '100%', height: '100%' }}>
            <AppBar toggleDrawer={toggleDrawer} />
            <Drawer anchor={anchor} toggleDrawer={toggleDrawer} />

            <Box id="content" sx={{p: '0 16px'}}>
                <Box>
                    {children}
                </Box>
            </Box>
        </div>
    );
};
