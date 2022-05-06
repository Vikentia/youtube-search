import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Input, Space } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import favoritesAction from '../redux/actions/favoritesAction';

import SearchResults from './SearchResults';
import AddFavorites from './AddFavorites';

import './InputSearch.css';
import './SearchResults.css';



function InputSearch({ onSearch, valueRequest, resultsVideos }) {
    const { Search } = Input;
    // const [resultsVideos, setResultsVideos] = useState([]);
    // const [valueRequest, setValueRequest] = useState('');
    const [visibleFavorites, setVisibleFavorites] = useState(false);

    // const KEY = 'AIzaSyD3NtVEz2D0_f_1bcilE2YmKaQYO0pUEdk';

    const dispatch = useDispatch();
    const array = useSelector(state => state.favorites);
    // console.log(array)

    // const onSearch = async (value) => {
    //     setValueRequest('');
    //     // console.log(value);
    //     const response = await axios.get('https://www.googleapis.com/youtube/v3/search',
    //         {
    //             params: {
    //                 part: "snippet",
    //                 type: "video",
    //                 maxResults: 12,
    //                 order: "relevance",
    //                 q: value,
    //                 key: KEY,
    //             }
    //         });
    //     setValueRequest(value);
    //     setResultsVideos(response.data.items);

    // };

    return (
        <div>
            <div className={resultsVideos.length ? 'search-result' : 'search-block'}>

                <p className='search-title'>Поиск видео</p>
                {visibleFavorites && <AddFavorites
                    valueRequest={valueRequest}
                    setVisibleFavorites={setVisibleFavorites}
                    visibleFavorites={visibleFavorites}
                />
                }

                <Space direction="vertical" className='search-input'>
                    <Search
                        placeholder="Что хотите посмотреть?"
                        allowClear
                        enterButton="Найти"
                        size="large"
                        onSearch={onSearch}
                        // suffix={resultsVideos.length
                        suffix={valueRequest
                            ? <button className='search-heart' onClick={() => setVisibleFavorites(!visibleFavorites)}>
                                <HeartTwoTone twoToneColor="#35a2ec" />
                            </button>
                            : null
                        }
                    />
                </Space>

                <div className='result-block'>
                    {
                        resultsVideos.length > 0
                        && < SearchResults resultsVideos={resultsVideos} valueRequest={valueRequest} />
                    }
                </div>
            </div>


        </div>
    )
}

export default InputSearch;