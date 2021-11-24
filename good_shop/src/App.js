import React from "react";
import { Route, Routes } from 'react-router-dom';

import { MainPage } from './Components/MainPage/mainPage';
import { CategoryPage } from "./Components/CategoriesPage";


export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
           
      <Route path="/:type" element={<CategoryPage />} />
        </Routes>
    );
}