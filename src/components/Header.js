import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../assets/image/sibdev-logo.png'

import styles from './Header.module.scss';


function Header({ logIn, setLogIn }) {


    return (
        <div className={styles.header}>
            <div div className={styles.header__wrap} >
                <img src={logo} alt='logo' />
                <div className={styles.empty}></div>
                <div className={styles.wrap__link}><NavLink to="/">Поиск</NavLink></div>
                <div className={styles.empty}></div>
                <div className={styles.wrap__link}><NavLink to="/favorites">Избранное</NavLink></div>
            </div >
            <div >
                <button className={styles.btn} onClick={() => setLogIn(!logIn)}>Выйти</button>
            </div>


        </div >
    );
}

export default Header;