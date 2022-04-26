import React from 'react'
import { useSelector } from 'react-redux';

import './Favorites.css';

function Favorites() {

    const favorites = useSelector(state => state.favorites);
    return (
        <div className='wrap-favorites'>
            <div className='favorites-block'>
                <h2>Избранное</h2>

                {!favorites.lenght && favorites.map((item, index) => {
                    return (

                        <button key={`${index}-id`} className={'favorite-item'} onClick={() => console.log(item.request)}>
                            {item.request}
                        </button>

                        // <p> {item.request}</p>

                    );
                })}
            </div>
        </div >
    )
}

export default Favorites