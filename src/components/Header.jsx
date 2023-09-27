import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, NavLink} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';
import Logo from './svg/Logo';
import Menu from './svg/Menu';
import LanguageSwitcher from './utils/LanguageSwitcher';
import ThemeToggler from './utils/ThemeToggler';
import Close from './svg/Close';

const Header = () => {
    const {mobile} = useIsMobile('991px');
    const [showMenu, setShowMenu] = useState(false);

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
                                        <NavLink to='/blog'>Блог</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/contacts'>Контакты</NavLink>
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
                            <li>
                                <button 
                                type='button' 
                                className='menu'
                                onClick={()=>setShowMenu(!showMenu)}
                                >
                                    {
                                        (showMenu)
                                        ? <Close/>
                                        : <Menu/>
                                    }
                                </button>
                            </li>
                        }
                    </ul>
                </Container>
            </header>

            <Offcanvas show={showMenu} onHide={()=>setShowMenu(false)}>
                <Offcanvas.Body>
                    <div className="box">
                        <img src="imgs/plaix-menu-bg.jpg" alt="plaix"/>
                        <ul>
                            <li>
                                <Link to="">Блог</Link>
                            </li>
                            <li>
                                <Link to="">Политика конфиденциальности</Link>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header