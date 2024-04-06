
import '../css/Head.css';

const Head = () => {
    return (
        <header>
            <p className="header_site_name">Lab 15</p>
            <nav className="header_menu">
                <ul>
                    <li><a href="#news">Новости</a></li>
                    <li><a href="#about">О проекте</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Head;