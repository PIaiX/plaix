import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import {Link, NavLink} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import { FiX } from "react-icons/fi"
import { IoPersonCircle, IoMenu } from "react-icons/io5"
import home from '../assets/imgs/icons/mobile-home.svg'
import portfolio from '../assets/imgs/icons/mobile-portfolio.svg'
import about from '../assets/imgs/icons/mobile-about.svg'
import reviews from '../assets/imgs/icons/mobile-reviews.svg'
import blog from '../assets/imgs/icons/mobile-blog.svg'
import contacts from '../assets/imgs/icons/mobile-contacts.svg'
import account from '../assets/imgs/icons/mobile-account.svg'
import LanguageSwitcher from './utils/LanguageSwitcher'
import ThemeToggler from './utils/ThemeToggler';

const Header = () => {
    const {mobile} = useIsMobile('991px')

    const [mobileMenu, setMobileMenu] = useState(false)
    const handleCloseMM = () => setMobileMenu(false)
    const handleShowMM = () => setMobileMenu(true)

    return (
        <>
            <header>
                <Container className='custom-container h-100 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <img src="imgs/logo.svg" alt="plaix" className='logo'/>
                        {
                            (mobile)
                            ? <nav className='main'>
                                <ul>
                                    <li>
                                        <Link to='/'>
                                            <IoPersonCircle/>
                                        </Link>
                                    </li>
                                    <li>
                                        <button type='button' onClick={handleShowMM}>
                                            <IoMenu/>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                            : <nav className='main ms-5'>
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
                        <li><Link to='/'>Личный кабинет</Link></li>
                        <li><ThemeToggler /></li>
                        <li><LanguageSwitcher/></li>
                    </ul>
                </Container>
            </header>
            <Offcanvas show={mobileMenu} placement={'end'} onHide={handleCloseMM}>
                <button type='button' className='close' onClick={handleCloseMM}><FiX/></button>
                <Offcanvas.Body>
                    <nav onClick={handleCloseMM}>
                        <ul>
                            <li>
                                <Link to="/">
                                    <img src={home} alt="Главная" />
                                    <span>Главная</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={portfolio} alt="Портфолио" />
                                    <span>Портфолио</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={about} alt="О Нас" />
                                    <span>О Нас</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={reviews} alt="Отзывы" />
                                    <span>Отзывы</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog">
                                    <img src={blog} alt="Блог" />
                                    <span>Блог</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={contacts} alt="Контакты" />
                                    <span>Контакты</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={account} alt="Личный кабинет" />
                                    <span>Личный кабинет</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <figure className='offer'>
                        <img src="imgs/offer-bg-1.jpg" alt="offer" />
                        <figcaption>
                            <h2 className='accent-1'>Lorem ipsum dolor </h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur </h4>
                        </figcaption>
                    </figure>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header