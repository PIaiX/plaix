import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, NavLink} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';
import Logo from './svg/Logo';
import Menu from './svg/Menu';
import LanguageSwitcher from './utils/LanguageSwitcher';
import ThemeToggler from './utils/ThemeToggler';

const Header = () => {
    const {mobile} = useIsMobile('991px');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header>
                <Container className='custom-container h-100 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Logo className='logo'/>
                        {
                            (!mobile) && 
                            <nav className='main ms-5'>
                                <ul>
                                    <li>
                                        <NavLink to='/'>Главная</NavLink>
                                    </li>
                                    <li>
                                        <a href='/'>Услуги</a>
                                    </li>
                                    <li>
                                        <a href='/'>Проекты</a>
                                    </li>
                                    <li>
                                        <a href='/'>Отзывы</a>
                                    </li>
                                    <li>
                                        <NavLink to='blog'>Блог</NavLink>
                                    </li>
                                    <li>
                                        <a href='/'>Контакты</a>
                                    </li>
                                </ul>
                            </nav>
                        }
                    </div>
                    <ul className='right'>
                        {
                            (!mobile) &&
                            <li><Link to='/' className='h5'>Личный кабинет</Link></li>
                        }
                        <li><ThemeToggler /></li>
                        <li><LanguageSwitcher/></li>
                        {
                            (mobile) &&
                            <li><button type='button' className='menu'><Menu/></button></li>
                        }
                    </ul>
                </Container>
            </header>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Body>
                    <ul>
                        <li>Блог</li>
                        <li>Политика конфиденциальности</li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header