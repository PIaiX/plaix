import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'
import { FiChevronDown, FiChevronRight } from "react-icons/fi"
import { IoPersonCircle, IoMenu } from "react-icons/io5"

const Header = () => {
    const {mobile} = useIsMobile('991px')

    const [services, setServices] = useState(false)
    const [sublevel, setSublevel] = useState(0)

    return (
        <header>
            <Container className='custom-container h-100 d-flex justify-content-between align-items-center'>
                <Logo className='logo'/>
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
                                <button type='button'>
                                    <IoMenu/>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    : <nav className='main'>
                        <ul>
                            <li>
                                <a href='/'>Главная</a>
                            </li>
                            <li>
                                <a href='/' onMouseEnter={()=>setServices(true)} onMouseLeave={()=>setServices(false)}>
                                    Услуги
                                    <FiChevronDown className='color-2 fs-13'/>
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
                }
            </Container>
            {
                (services) &&
                <div className="services" onMouseEnter={()=>setServices(true)} onMouseLeave={()=>setServices(false)}>
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
                    <div className='level-2'>
                        {
                            (sublevel === 0) &&
                            <nav>
                                <ul>
                                    <li><a href="/">Лэндинг</a></li>
                                    <li><a href="/">Корпоративный сайт</a></li>
                                    <li><a href="/">Интернет магазин</a></li>
                                    <li><a href="/">Портал</a></li>
                                    <li><a href="/">Квиз/Опросник</a></li>
                                    <li><a href="/">Индивидуальная разработка</a></li>
                                </ul>
                                <img src="imgs/img1.jpg" alt="Web разработка" />
                            </nav>
                        }
                        {
                            (sublevel === 1) &&
                            <nav>
                                <ul>
                                    <li><a href="/">Мобильные приложения 1</a></li>
                                    <li><a href="/">Мобильные приложения 2</a></li>
                                    <li><a href="/">Мобильные приложения 3</a></li>
                                    <li><a href="/">Мобильные приложения 4</a></li>
                                    <li><a href="/">Мобильные приложения 5</a></li>
                                </ul>
                                <img src="imgs/img2.jfif" alt="Мобильные приложения" />
                            </nav>
                        }
                    </div>
                </div>
            }
        </header>
    );
};

export default Header