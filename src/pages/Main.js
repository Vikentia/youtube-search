import React from "react";
import { useState } from "react";
import Header from '../components/Header';
import InputSearch from "../components/InputSearch";
import SearchResults from "../components/SearchResults";
import Favorites from "../components/Favorites";
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';

function Main({ logIn, setLogIn }) {

    const [valueRequest, setValueRequest] = useState('');
    const [resultsVideos, setResultsVideos] = useState([]);
    const KEY = 'AIzaSyD3NtVEz2D0_f_1bcilE2YmKaQYO0pUEdk';



    // const onSearch = async (value, maxResults = 12, typeOrder = "relevance") => {
    const onSearch = async (value) => {
        // const onSearch = async (value, maxRes = 12) => {
        setValueRequest('');
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',
            {
                params: {
                    part: "snippet",
                    type: "video",
                    // maxResults: maxRes,
                    maxResults: 12,
                    // order: typeOrder,
                    order: "relevance",
                    q: value,
                    key: KEY,
                }
            });
        setValueRequest(value);
        setResultsVideos(response.data.items);

    };

    return (
        <div>

            <Header logIn={logIn} setLogIn={setLogIn} />
            <Routes>
                <Route path='/' element={<InputSearch
                    onSearch={onSearch}
                    valueRequest={valueRequest}
                    resultsVideos={resultsVideos}
                />} />
                <Route path='/favorites' element={<Favorites
                    onSearch={onSearch}
                />} />

            </Routes>
        </div>
    );
}

export default Main;