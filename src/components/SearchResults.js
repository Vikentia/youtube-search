import React from 'react';

import list from '../assets/image/list.svg';
import grid from '../assets/image/grid.svg';
import styles from './SearchResults.module.scss';

function SearchResults({ resultsVideos, valueRequest }) {

    const [sort, setSort] = React.useState('grid');

    // console.log(sort); 


    return (

        <div className={styles.wrap}>
            {
                valueRequest
                    ? <div className={styles.filter__panel}>
                        <p> Видео по запросу: &#171;{valueRequest}&#187;</p>
                        <div className={styles.video__sort}>
                            <button onClick={() => setSort('list')}>
                                <img className={`${styles.sort__list} ${sort === 'grid' ? styles.sort__opacity : ''}`} src={list} alt="list" />
                            </button>
                            <button onClick={() => setSort('grid')}>
                                <img className={`${styles.sort__grid} ${sort === 'list' ? styles.sort__opacity : ''}`} src={grid} alt="grid" />
                            </button>
                        </div>
                    </div>
                    : null

            }

            <div className={`${sort == 'list' ? styles.wrap__video_list : styles.wrap__video_grid}`}>
                {
                    valueRequest
                    && resultsVideos.map(item => {
                        let link = `https://www.youtube.com/embed/${item.id.videoId}`;
                        // console.log(item);
                        return (
                            <div className={`${sort == 'list' ? styles.video__wrapper_list : styles.video__wrapper_grid}`}>
                                <div className={`${sort == 'list' ? styles.video__item_list : styles.video__item_grid}`}>
                                    <iframe
                                        className={`${sort == 'list' ? styles.video__list : styles.video__grid}`}
                                        src={link} >
                                    </iframe>
                                    <div className={styles.block}>
                                        <p className={`${sort == 'list' ? styles.video__title_list : styles.video__title_grid}`}>
                                            {item.snippet.title}
                                        </p>
                                        <p className={`${sort == 'list' ? styles.video__views_list : styles.video__views_grid}`}>
                                            {item.snippet.channelTitle}
                                        </p>

                                    </div>
                                </div>
                            </div >

                        )
                    })
                }
            </div >
        </div >

    )
}

export default SearchResults;


