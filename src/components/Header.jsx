import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'
import { FiChevronDown, FiChevronRight } from "react-icons/fi"

const Header = () => {
    const [catalogMenu, setCatalogMenu] = useState(false)
    const [sublevel, setSublevel] = useState(0)
    const meHandler = () => {
        setCatalogMenu(true);
    }
    const mlHandler = () => {
        setCatalogMenu(false);
    }


    return (
        <header>
            <Container className='custom-container h-100 d-flex justify-content-between align-items-center'>
                <Logo/>
                <nav className='main'>
                    <ul>
                        <li>
                            <a href='/'>Главная</a>
                        </li>
                        <li>
                            <a href='/' onMouseEnter={()=>meHandler()} onMouseLeave={()=>mlHandler()}>
                                Услуги
                                <FiChevronDown className='color-2'/>
                            </a>
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
            {
                (catalogMenu) &&
                <div className="services" onMouseEnter={()=>meHandler()} onMouseLeave={()=>mlHandler()}>
                    <nav className='level-1'>
                        <ul>
                            <li>
                                <a href="/" onMouseEnter={()=>setSublevel(0)} className={(sublevel === 0)?'active':''}>
                                    <span>Web разработка</span>
                                    <FiChevronRight/>
                                </a>
                            </li>
                            <li>
                                <a href="/" className={(sublevel === 1)?'active':''} onMouseEnter={()=>setSublevel(1)}>
                                    <span>Мобильные приложения</span>
                                    <FiChevronRight/>
                                </a>
                            </li>
                            <li>
                                <a href="/" className={(sublevel === 2)?'active':''}>
                                    <span>Дизайн</span>
                                    <FiChevronRight/>
                                </a>
                            </li>
                            <li>
                                <a href="/" className={(sublevel === 3)?'active':''}>
                                    <span>Продвижение</span>
                                    <FiChevronRight/>
                                </a>
                            </li>
                            <li>
                                <a href="/" className={(sublevel === 4)?'active':''}>
                                    <span>Соцсети и SMM</span>
                                    <FiChevronRight/>
                                </a>
                            </li>
                            <li>
                                <a href="/" className={(sublevel === 5)?'active':''}>
                                    <span>Чат боты</span>
                                    <FiChevronRight/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav className='level-2'>
                        {
                            (sublevel === 0) &&
                            <ul>
                                <li><a href="/">Лэндинг</a></li>
                                <li><a href="/">Корпоративный сайт</a></li>
                                <li><a href="/">Интернет магазин</a></li>
                                <li><a href="/">Портал</a></li>
                                <li><a href="/">Квиз/Опросник</a></li>
                                <li><a href="/">Индивидуальная разработка</a></li>
                            </ul>
                        }
                        {
                            (sublevel === 1) &&
                            <ul>
                                <li><a href="/">Мобильные приложения 1</a></li>
                                <li><a href="/">Мобильные приложения 2</a></li>
                                <li><a href="/">Мобильные приложения 3</a></li>
                                <li><a href="/">Мобильные приложения 4</a></li>
                                <li><a href="/">Мобильные приложения 5</a></li>
                            </ul>
                        }
                    </nav>
                </div>
            }
        </header>
    );
};

export default Header