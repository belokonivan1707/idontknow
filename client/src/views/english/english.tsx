import React from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../routes/app-routes';
import { Phrases } from './pages/phrases/phrases';
import { TongueTwisters } from './pages/tongue-twisters/tongue-twisters';
import Tab from '@mui/material/Tab/Tab';
import Tabs from '@mui/material/Tabs/Tabs';
import './english.css';

export const English: React.FC = () => {
    const navigate = useNavigate();
    const params = useParams();

    function handleChange(_: React.SyntheticEvent, route: string) {
        navigate(route);
    };

    return (
        <div className='english-wrapper'>
            <Tabs sx={{mb: '16px'}} value={params['*']} onChange={handleChange}>
                <Tab value="tongue-twisters" label="Tongue Twisters" />
                <Tab value="phrases" label="Phrases" />
            </Tabs>

            <Routes>
                <Route path={ROUTES.ENGLISH.TWISTERS} element={<TongueTwisters />} />
                <Route path={ROUTES.ENGLISH.PHRASES} element={<Phrases />} />
            </Routes>
        </div>
    )
}