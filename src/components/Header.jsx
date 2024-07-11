import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';
import Logo from './svg/Logo';
import Menu from './svg/Menu';
import LanguageSwitcher from './utils/LanguageSwitcher';
import ThemeToggler from './utils/ThemeToggler';
import Close from './svg/Close';

const Header = () => {
    const { mobile } = useIsMobile('991px');
    const [showMenu, setShowMenu] = useState(false);

    const {t} = useTranslation();
return (
        <>
            <header>
                <Container className='custom-container h-100 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <NavLink to='/'><Logo className='logo' /></NavLink>
                        {
                            (!mobile) &&
                            <nav className='main ms-5'>
                                <ul>
                                    <li>
                                        <NavLink to='/'>{t('Главная')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/"
                                            onClick={() => {
                                                setTimeout(() => {
                                                    const element = document.getElementById("uslugy");

                                                    if (element) {
                                                        window.scrollTo({
                                                            top: element.getBoundingClientRect().top + window.pageYOffset - 140,
                                                            behavior: "smooth"
                                                        });
                                                    }
                                                }, 100);
                                            }}>{t('Услуги')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/portfolio'>{t('Проекты')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'>{t('Отзывы')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/article'>{t('Блог')}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/contacts'>{t('Контакты')}</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        }
                    </div>
                    <ul className='right'>
                        {
                            (!mobile) &&
                            <li><Link to='/login' className='h5'>{t('Личный кабинет')}</Link></li>
                        }
                        <li><ThemeToggler /></li>
                        <li><LanguageSwitcher /></li>
                        {
                            (mobile) &&
                            <li>
                                <button
                                    type='button'
                                    className='menu'
                                    onClick={() => setShowMenu(!showMenu)}
                                >
                                    {
                                        (showMenu)
                                            ? <Close />
                                            : <Menu />
                                    }
                                </button>
                            </li>
                        }
                    </ul>
                </Container>
            </header>

            <Offcanvas show={showMenu} onHide={() => setShowMenu(false)}>
                <Offcanvas.Body>
                    <div className="box">
                        <img src="/imgs/plaix-menu-bg.webp" alt="plaix" />
                        <ul>
                            <li>
                                <Link to="/article">{t('Блог')}</Link>
                            </li>
                            <li>
                                <Link to="/">{t('Политика конфиденциальности')}</Link>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header