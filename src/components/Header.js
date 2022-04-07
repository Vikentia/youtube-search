import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../assets/image/sibdev-logo.png'


import '../App.css';
import './Header.css';


function Header({ logIn, setLogIn }) {


    return (
        <div className="header">
            <div className="header-wrap">
                <img src={logo} alt='logo' />
                <div className="empty"></div>
                <div className="wrap-link"><NavLink to="/">Поиск</NavLink></div>
                <div className="empty"></div>
                <div className="wrap-link"><NavLink to="/favorites">Избранное</NavLink></div>
            </div>
            <div >
                <button className='btn' onClick={() => setLogIn(!logIn)}>Выйти</button>
            </div>


        </div>
    );
}

export default Header;