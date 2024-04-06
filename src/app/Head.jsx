
import { NavLink } from 'react-router-dom';

import '../css/Head.css';

const Head = () => {
    return (
        <>
            <header>
                <p className="header_site_name">
                    <a href="/">Лабораторная работа №15</a>
                </p>
                <nav className="header_menu">
                    <ul>
                        <li><NavLink to="/news">Новости</NavLink></li>
                        <li><NavLink to="/about">О проекте</NavLink></li>
                        <li><NavLink to="/contact">Контакты</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Head;