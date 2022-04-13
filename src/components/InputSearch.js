import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import SearchResults from './SearchResults';


import './InputSearch.css';
import './SearchResults.css';




function InputSearch() {
    const { Search } = Input;
    const [resultsVideos, setResultsVideos] = useState([]);
    const [valueRequest, setValueRequest] = useState('');

    const KEY = 'AIzaSyD3NtVEz2D0_f_1bcilE2YmKaQYO0pUEdk';

    const suffix = <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />;

    const onSearch = async (value) => {
        setValueRequest('');
        console.log(value);
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',
            {
                params: {
                    part: "snippet",
                    type: "video",
                    maxResults: 12,
                    order: "relevance",
                    q: value,
                    key: KEY,
                }
            });
        setValueRequest(value);
        setResultsVideos(response.data.items);

    };


    return (
        <div className={resultsVideos.length ? 'search-result' : 'search-block'}>

            <p className='search-title'>Поиск видео</p>
            <Space direction="vertical" className='search-input'>
                <Search
                    placeholder="Что хотите посмотреть?"
                    allowClear
                    enterButton="Найти"
                    size="large"
                    onSearch={onSearch}
                />
            </Space>
            <div className='result-block'>
                {
                    resultsVideos.length > 0
                    && < SearchResults resultsVideos={resultsVideos} valueRequest={valueRequest} />
                }
            </div>


        </div>
    )
}

export default InputSearch;