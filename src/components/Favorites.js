import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import './Favorites.css';
import './InputSearch.css';
import deleteFavoritesAction from '../redux/actions/deleteFavoritesAction';

function Favorites({ onSearch }) {

    const favorites = useSelector(state => state.favorites);
    console.log(favorites);
    let user = localStorage.getItem('login');
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const onSearchFromFavorite = (value) => {
        navigate('/');
        onSearch(value);
    }

    return (
        <div className='wrap-favorites'>
            <div className='favorites-block'>
                <h2>Избранное</h2>
                {
                    favorites.length
                        ? favorites
                            .filter(item => user == item.login)
                            .map(item => {
                                return (
                                    <div key={item.id} className='favorites-item'>
                                        <Button
                                            type="text"
                                            className={'favorite-btn'}
                                            onClick={() => onSearchFromFavorite(item.request)}
                                        >
                                            {item.title}
                                        </Button>
                                        <Button type="link" onClick={() => console.log('изменить')} >
                                            Изменить
                                        </Button>
                                        <Button type="text" danger onClick={() => dispatch(deleteFavoritesAction(item.id))} >
                                            {/* <Button type="text" danger onClick={() => console.log(item.id)} > */}
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