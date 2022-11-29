import React from 'react'
import { Input, Space } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';


import SearchResults from './SearchResults';
import AddFavorites from './AddFavorites';

import styles from './InputSearch.module.scss';
// import './SearchResults.css';



function InputSearch({ onSearch, valueRequest, resultsVideos }) {
    const { Search } = Input;
    const [visibleFavorites, setVisibleFavorites] = React.useState(false);
    const array = useSelector(state => state.favorites);
    const isDisabled = true;

    console.log('array^ ', array)

    return (
        <div>
            <div className={resultsVideos.length ? styles.search__result : styles.search__block}>

                <p className={styles.search__title}>Поиск видео</p>
                {visibleFavorites && <AddFavorites
                    valueRequest={valueRequest}
                    setVisibleFavorites={setVisibleFavorites}
                    visibleFavorites={visibleFavorites}
                    isDisabled={isDisabled}
                />
                }

                <Space direction="vertical" className={styles.search__input}>
                    <Search
                        placeholder="Что хотите посмотреть?"
                        allowClear
                        enterButton="Найти"
                        size="large"
                        onSearch={onSearch}
                        suffix={valueRequest
                            ? <button className={styles.search__heart}
                                onClick={() => setVisibleFavorites(!visibleFavorites)}>
                                <HeartTwoTone twoToneColor="#35a2ec" />
                            </button>
                            : null
                        }
                    />
                </Space>

                <div className={styles.result__block}>
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