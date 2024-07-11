import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import useIsMobile from '../hooks/isMobile';
import ServiceIcon from './svg/ServiceIcon';
import ContactsIcon from './svg/ContactsIcon';
import ProjectsIcon from './svg/ProjectsIcon';
import LogoIcon from './svg/LogoIcon';
import AccountIcon from './svg/AccountIcon';

const Footer = () => {
    let location = useLocation();
    const [activeMenu, setActiveMenu] = useState('pos-2');
    const currentYear = new Date().getFullYear();
    const { mobile } = useIsMobile('991px');

    // const links = [
    //     {
    //         path: '/services',
    //         class: 'pos-0'
    //     },
    //     {
    //         path: '/projects',
    //         class: 'pos-1'
    //     },
    //     {
    //         path: '/',
    //         class: 'pos-2'
    //     },{
    //         path: '/contacts',
    //         class: 'pos-3'
    //     },
    //     {
    //         path: '/account',
    //         class: 'pos-4'
    //     },
    // ];

    // useEffect(
    //     () => {
    //     function updateMenu() {
    //         setActiveMenu(links.find(obj => obj.path === location.pathname).class)
    //     }

    //     window.addEventListener('beforeunload', updateMenu)
    //     updateMenu()
    //     const {t} = useTranslation();
return () => window.removeEventListener('beforeunload', updateMenu)
    // });

    if (mobile) {
        return <footer>
            <Container className='custom-container'>
                <nav>
                    <ul>
                        {/* <li className={'indicator '+activeMenu}>
                            <div></div>
                        </li> */}
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
                                }}>
                                <ServiceIcon />
                                <span>{t('Услуги')}</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/portfolio'>
                                <ProjectsIcon />
                                <span>{t('Проекты')}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                <LogoIcon />
                                <span>{t('Главная')}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacts'>
                                <ContactsIcon />
                                <span>{t('Контакты')}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>
                                <AccountIcon />
                                <span>{t('Аккаунт')}</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </footer>;
    } else {
        return <Container className='custom-container'>
            <footer>
                <span>Plaix {currentYear}</span>
                <Link to='/'>{t('Пользовательское соглашние')}</Link>
                <Link to='/'>{t('Политика конфиденциальности')}</Link>
            </footer>
        </Container>
    }
};

export default Footer;