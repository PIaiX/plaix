import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const {mobile} = useIsMobile('991px');

    if (mobile) {
        return <footer>
            <Container className='custom-container'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/services'>
                                <span>Услуги</span>
                            </NavLink>
                        </li>
                        <li><NavLink to='/projects'>Проекты</NavLink></li>
                        <li><NavLink to='/'>Главная</NavLink></li>
                        <li><NavLink to='/contacts'>Контакты</NavLink></li>
                        <li><NavLink to='/account'>Аккаунт</NavLink></li>
                    </ul>
                </nav>
            </Container>
        </footer>;
    } else {
        return <Container className='custom-container'>
            <footer>
                <span>Plaix {currentYear}</span>
                <Link to='/'>Пользовательское соглашние</Link>
                <Link to='/'>Политика конфиденциальности</Link>
            </footer>
        </Container>
    }
};

export default Footer;