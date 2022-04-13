import React from 'react';
import { useState } from 'react';

import list from '../assets/image/list.svg';
import grid from '../assets/image/grid.svg';
import './SearchResults.css';

function SearchResults({ resultsVideos, valueRequest }) {

    const [sort, setSort] = useState('list');

    console.log(sort);


    return (

        <div className='wrap'>
            {
                valueRequest
                    ? <div className='filter-panel'>
                        <p> Видео по запросу: &#171;{valueRequest}&#187;</p>
                        <div className='video-sort'>
                            <button onClick={() => setSort('list')}>
                                <img className={sort == 'grid' ? 'sort-list sort-opacity' : 'sort-list'} src={list} alt="list" />
                            </button>
                            <button onClick={() => setSort('grid')}>
                                <img className={sort == 'list' ? 'sort-grid sort-opacity' : 'sort-grid'} src={grid} alt="grid" />
                            </button>
                        </div>
                    </div>
                    : null

            }
            <div className='wrap-video'>
                {
                    valueRequest
                    && resultsVideos.map(item => {
                        let link = `https://www.youtube.com/embed/${item.id.videoId}`;
                        console.log(item);
                        return (
                            <div className={`video-wrap-${sort}`}>
                                <div className={`video-item-${sort}`}>
                                    <iframe className={`video-${sort}`} src={link} > </iframe>
                                    <div className='block'>
                                        <p className={`video-title-${sort}`}>{item.snippet.title}</p>
                                        <p className={`video-views-${sort}`}>{item.snippet.channelTitle} </p>

                                    </div>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </div >

    )
}

export default SearchResults;


