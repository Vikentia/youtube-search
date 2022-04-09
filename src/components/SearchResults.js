import React from 'react'

import './SearchResults.css';

function SearchResults({ resultsVideos, valueRequest }) {
    return (
        <div className='wrap'>
            {
                valueRequest ? <p> Видео по запросу: &#171;{valueRequest}&#187;</p> : null
            }
            <div className='wrap-video'>
                {
                    valueRequest
                    && resultsVideos.map(item => {
                        let link = `https://www.youtube.com/embed/${item.id.videoId}`;
                        console.log(item);
                        return (
                            <div className={'video-item'}>
                                <iframe className={'video'} src={link} > </iframe>
                                <p className={'video-title'}>{item.snippet.title}</p>
                                <p className={'video-views'}>wer rjkbxtcndj ghjkjh hre erj hejr er rhk jjrkh ejrk </p>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
}

export default SearchResults;


