import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Link, NavLink} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'

import {ReactComponent as Logo} from '../assets/imgs/logo.svg'
import {ReactComponent as Home} from '../assets/imgs/home.svg'
import {ReactComponent as Call} from '../assets/imgs/call.svg'
import {ReactComponent as Cases} from '../assets/imgs/cases.svg'
import {ReactComponent as Services} from '../assets/imgs/services.svg'
import {ReactComponent as Message} from '../assets/imgs/message.svg'
import Social from './utils/Social'

const Footer = () => {
    const {mobile} = useIsMobile('991px')

    return (
        <footer>
            <Container className='custom-container h-100'>
                
                {
                    (mobile)
                    ? <nav>
                        <ul>
                            <li>
                                <NavLink to='/'>
                                    <Home/>
                                    <span>Главная</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='services'>
                                    <Services/>
                                    <span>Услуги</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='cases'>
                                    <Cases/>
                                    <span>Кейсы</span>
                                </NavLink>
                            </li>
                            <li>
                                <a href="tel:+79000000000">
                                    <Call/>
                                    <span>Звонок</span>
                                </a>
                            </li>
                            <li>
                                <NavLink to='messages'>
                                    <Message/>
                                    <span>Сообщение</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    : <Row className='h-100 justify-content-between align-items-center'>
                        <Col md={3}>
                            <Logo className='logo'/>
                            <div className='mt-3'>@Asmpromo, 2016-2022 г</div>
                            <div className='mt-3'><Link to="/">Пользовательское соглашние</Link></div>
                            <div className='mt-3'><Link to="/">Политика конфиденциальности</Link></div>
                        </Col>
                        <Col md={3}>
                            <p className='text-center mb-4'>Мы в соц. сетях</p>
                            <Social/>
                        </Col>
                        <Col md={3}>
                            <address className='text-end'>
                                <ul className="list-unstyled">
                                    <li>420141, Республика Татарстан, г. Казань, ул. Юлиуса Фучика, д. 78, офис 9</li>
                                    <li><a href="tel:+79600464222">+7 (960) 046-42-22</a></li>
                                    <li><a href="mailto:Ds@asmpromo.ru">Ds@asmpromo.ru</a></li>
                                </ul>
                            </address>
                        </Col>
                    </Row>
                }
            </Container>
        </footer>
    );
};

export default Footer