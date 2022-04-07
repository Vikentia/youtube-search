import React from "react";
import Header from '../components/Header';
import InputSearch from "../components/InputSearch";
import SearchResults from "../components/SearchResults";

import { Routes, Route } from 'react-router-dom';

function Main({ logIn, setLogIn }) {
    return (
        <div>

            <Header logIn={logIn} setLogIn={setLogIn} />
            <Routes>
                <Route path='/' element={<InputSearch />} />
                <Route path='/results' element={<SearchResults />} />

            </Routes>
        </div>
    );
}

export default Main;