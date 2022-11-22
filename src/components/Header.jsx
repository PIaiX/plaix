import React from 'react'
import Container from 'react-bootstrap/Container'
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'

const Header = () => {
    return (
        <header>
            <Container className='custom-container h-100 d-flex justify-content-between align-items-center'>
                <Logo/>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Главная</a>
                        </li>
                        <li>
                            <a href='/'>Услуги</a>
                        </li>
                        <li>
                            <a href='/'>Портфолио</a>
                        </li>
                        <li>
                            <a href='/'>О Нас</a>
                        </li>
                        <li>
                            <a href='/'>Отзывы</a>
                        </li>
                        <li>
                            <a href='/'>Блог</a>
                        </li>
                        <li>
                            <a href='/'>Контакты</a>
                        </li>
                        <li>
                            <a href='/'>Личный кабинет</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header