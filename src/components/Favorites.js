import React from 'react'
import { useSelector } from 'react-redux';

import './Favorites.css';

function Favorites() {

    const favorites = useSelector(state => state.favorites);
    let user = localStorage.getItem('login');


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
                                    <button key={item.id} className={'favorite-item'} onClick={() => console.log(item.request, item.title)}>
                                        {item.title}
                                    </button>
                                )
                            })
                        : <p>Пусто - выросла капуста </p>
                }

            </div>
        </div >
    )
}

export default Favorites