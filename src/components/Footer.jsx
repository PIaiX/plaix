import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Link} from 'react-router-dom'

import instagram from '../assets/imgs/instagram.png'
import vk from '../assets/imgs/vk.png'
import tg from '../assets/imgs/tg.png'
import wapp from '../assets/imgs/wapp.png'
import fb from '../assets/imgs/fb.png'
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'

const Footer = () => {
    return (
        <footer>
            <Container className='custom-container h-100'>
                <Row className='h-100 justify-content-between align-items-center'>
                    <Col lg={3}>
                        <Logo/>
                        <div className='mt-3'>@Asmpromo, 2016-2022 г</div>
                        <div className='mt-3'><Link to="/">Пользовательское соглашние</Link></div>
                        <div className='mt-3'><Link to="/">Политика конфиденциальности</Link></div>
                    </Col>
                    <Col lg={3}>
                        <p className='text-center mb-4'>Мы в соц. сетях</p>
                        <ul className='social'>
                            <li>
                                <a href="/">
                                    <img src={instagram} alt="instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={vk} alt="vk" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={tg} alt="tg" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={wapp} alt="wapp" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={fb} alt="fb" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <address className='text-end'>
                            <ul className="list-unstyled">
                                <li>420141, Республика Татарстан, г. Казань, ул. Юлиуса Фучика, д. 78, офис 9</li>
                                <li><a href="tel:+79600464222">+7 (960) 046-42-22</a></li>
                                <li><a href="mailto:Ds@asmpromo.ru">Ds@asmpromo.ru</a></li>
                            </ul>
                        </address>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer