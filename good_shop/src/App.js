import React from "react";
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Components/MainPage/mainPage';


export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
}