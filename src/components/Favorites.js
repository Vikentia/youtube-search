import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import { favoritesAction, deleteFavoritesAction, changeFavoritesAction } from '../redux/actions/favoritesAction';
import AddFavorites from './AddFavorites';

import styles from './Favorites.module.scss';
// import './InputSearch.css';



function Favorites({ onSearch }) {

    const [visibleFavorites, setVisibleFavorites] = useState(false);
    const favorites = useSelector(state => state.favorites);
    // console.log(favorites)
    // console.log(favorites.request)
    let user = localStorage.getItem('login');
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const isDisabled = false;

    const onSearchFromFavorite = (value) => {
        navigate('/');
        onSearch(value);
    }

    const onChangeFromFavorite = (obj) => {
        setVisibleFavorites(!visibleFavorites);
        dispatch(changeFavoritesAction(obj))
        console.log(obj)
    }

    return (
        <div className={styles.wrap__favorites}>
            <div className={styles.favorites__block}>

                {visibleFavorites && <AddFavorites
                    valueRequest={favorites.request}
                    setVisibleFavorites={setVisibleFavorites}
                    visibleFavorites={visibleFavorites}
                    isDisabled={isDisabled}
                />
                }
                <h2>Избранное</h2>

                {
                    favorites.length
                        ? favorites
                            .filter(item => user == item.login)
                            .map(item => {
                                return (
                                    <div key={item.id} className={styles.favorites__item}>
                                        <Button
                                            type="text"
                                            className={styles.favorite__btn}
                                            onClick={() => onSearchFromFavorite(item.request)}
                                        >
                                            {item.title}
                                        </Button>
                                        <Button type="link" onClick={() => {
                                            console.log('item from btn ', item)
                                            return onChangeFromFavorite(item)
                                        }
                                        }>
                                            Изменить
                                        </Button>
                                        <Button type="text" danger
                                            onClick={() => dispatch(deleteFavoritesAction(item.id))} >
                                            Удалить
                                        </Button>
                                    </div>
                                )
                            })
                        : <p>Пусто - выросла капуста </p>
                }

            </div>
        </div >
    )
}

export default Favorites