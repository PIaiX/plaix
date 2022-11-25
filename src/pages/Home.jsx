import React from 'react'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode  } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

import portfolio from '../assets/imgs/portfolio.svg'
import star from '../assets/imgs/star.svg'
import stack from '../assets/imgs/stack.svg'
import { FiChevronRight } from "react-icons/fi"
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'
import ArticlePreview from '../components/ArticlePreview'

const Home = () => {
    return (
        <main>
            <section className='sec-home-1'>
                <Container className='custom-container'>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <p className='h1 mb-5'><span className='color-2'>Мы знаем</span>, как реализовать ваш проект. </p>

                            <h1 className='mb-5'>Разработка сайтов, мобильных приложений и веб-сервисов</h1>

                            <button type='button' className='btn-1 fs-13'>обсудить проект</button>
                        </Col>
                        <Col lg={6}>
                            <img src="imgs/main-img.png" alt="Разработка сайтов, мобильных приложений и веб-сервисов" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='sec-home-2 mb-8'>
                <Container>
                    <Row lg={3} className='gx-5'>
                        <Col>
                            <div className="box p-4">
                                <img src={portfolio} alt="Огромное портфолио" />
                                <h3>Огромное портфолио</h3>
                                <hr />
                                <p className="fs-09">Более сотни реализованных проектов из совершенно разных сфер</p>
                                <button type='button' className='btn-2 fs-12'>
                                    <span>Портфолио</span>
                                    <FiChevronRight/>
                                </button>
                            </div>
                        </Col>
                        <Col>
                            <div className="box p-4">
                                <img src={star} alt="Нас рекомендуют" />
                                <h3>Нас рекомендуют</h3>
                                <hr />
                                <p className="fs-09">Отзывы - наше всё. Каждый второй клиент по рекомендации</p>
                                <button type='button' className='btn-2 fs-12'>
                                    <span>Отзывы</span>
                                    <FiChevronRight/>
                                </button>
                            </div>
                        </Col>
                        <Col>
                            <div className="box p-4">
                                <img src={stack} alt="Стек технологий" />
                                <h3>Стек технологий</h3>
                                <hr />
                                <p className="fs-09">Современные технологии и собственные разработки</p>
                                <button type='button' className='btn-2 fs-12'>
                                    <span>Перейти</span>
                                    <FiChevronRight/>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='sec-home-3 mb-8'>
                <Container className='custom-container mb-5'>
                    <h2>Наши услуги</h2>
                    <h4>Приступим к вашему проекту уже завтра</h4>
                </Container>
                <Container>
                    <Row lg={3} className='g-5'>
                        <Col>
                            <figure className='service-card'>
                                <img src="imgs/img1.jpg" alt="" />
                                <figcaption>
                                    <h3>Web разработка</h3>
                                    <hr />
                                    <p>Разрабатываем лендинги, интернет-магазины, web-сервисы. Берем на доработку и развитие.</p>
                                    <Link to='/' className='link'>Перейти</Link>
                                </figcaption>
                            </figure>
                        </Col>
                        <Col>
                            <figure className='service-card'>
                                <img src="imgs/img1.jpg" alt="" />
                                <figcaption>
                                    <h3>Web разработка</h3>
                                    <hr />
                                    <p>Разрабатываем лендинги, интернет-магазины, web-сервисы. Берем на доработку и развитие.</p>
                                    <Link to='/' className='link'>Перейти</Link>
                                </figcaption>
                            </figure>
                        </Col>
                        <Col>
                            <figure className='service-card'>
                                <img src="imgs/img1.jpg" alt="" />
                                <figcaption>
                                    <h3>Web разработка</h3>
                                    <hr />
                                    <p>Разрабатываем лендинги, интернет-магазины, web-сервисы. Берем на доработку и развитие.</p>
                                    <Link to='/' className='link'>Перейти</Link>
                                </figcaption>
                            </figure>
                        </Col>
                        <Col>
                            <figure className='service-card'>
                                <img src="imgs/img1.jpg" alt="" />
                                <figcaption>
                                    <h3>Web разработка</h3>
                                    <hr />
                                    <p>Разрабатываем лендинги, интернет-магазины, web-сервисы. Берем на доработку и развитие.</p>
                                    <Link to='/' className='link'>Перейти</Link>
                                </figcaption>
                            </figure>
                        </Col>
                        <Col>
                            <figure className='service-card'>
                                <img src="imgs/img1.jpg" alt="" />
                                <figcaption>
                                    <h3>Web разработка</h3>
                                    <hr />
                                    <p>Разрабатываем лендинги, интернет-магазины, web-сервисы. Берем на доработку и развитие.</p>
                                    <Link to='/' className='link'>Перейти</Link>
                                </figcaption>
                            </figure>
                        </Col>
                        <Col>
                            <figure className='service-card'>
                                <img src="imgs/img1.jpg" alt="" />
                                <figcaption>
                                    <h3>Web разработка</h3>
                                    <hr />
                                    <p>Разрабатываем лендинги, интернет-магазины, web-сервисы. Берем на доработку и развитие.</p>
                                    <Link to='/' className='link'>Перейти</Link>
                                </figcaption>
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='sec-home-4 mb-8'>
                <Container className='custom-container'>
                    <Row lg={2}>
                        <Col>
                            <Row>
                                <Col lg={10}>
                                    <h2>О Нас</h2>
                                    <h4>команда, которая работает над вашими проектами</h4>
                                    <ul className="mt-5 list-unstyled">
                                        <li>
                                            <h3>Опыт</h3>
                                            <p className='fs-12'>Обладаем высокой экспертизой в области мобильной и веб-разработки, поэтому делаем качественные продукты точно в срок.</p>
                                        </li>
                                        <li>
                                            <h3>Качество</h3>
                                            <p className='fs-12'>Отвечаем за результат вместе с вами. Нам важно создавать рабочие решения и помогать компаниям приносить пользу.</p>
                                        </li>
                                        <li>
                                            <h3>Поддержка</h3>
                                            <p className='fs-12'>Создаем приложения и сайты, с которыми удобно работать: наш код легко поддерживать и просто передать.</p>
                                        </li>
                                    </ul>
                                    <button type='button' className='btn-1 fs-13 mt-4 mx-auto'>
                                        <span>Узнать больше</span>
                                        <FiChevronRight/>
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                        <img src="imgs/subtract2.png" alt="subtract" />
                            <img src="imgs/subtract.png" alt="subtract" />

                            <div className="script fs-30">Дизайнер</div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='sec-home-5 mb-8'>
                <Container className='custom-container'>
                    <h2>Спецпредожения</h2>
                    <h4>отличная возможность начать</h4>

                    <div className="position-relative">
                        <Swiper
                            className='mt-5'
                            modules={[Navigation, FreeMode]}
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation
                            freeMode={true}
                            // breakpoints={{
                            //     576: {
                            //         spaceBetween: 15,
                            //         slidesPerView: 'auto'
                            //     },
                            //     768: {
                            //         spaceBetween: 30,
                            //         slidesPerView: 'auto'
                            //     },
                            //     1400: {
                            //         spaceBetween: 50,
                            //         slidesPerView: 'auto'
                            //     },
                            // }}
                            >
                            <SwiperSlide>
                                <figure className='offer'>
                                    <img src="imgs/offer-bg-1.jfif" alt="Lorem ipsum dolor" />
                                    <figcaption>
                                        <h2>Lorem ipsum dolor</h2>
                                        <h4 className='accent-1'>Lorem ipsum dolor sit amet, consectetur </h4>
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure className='offer'>
                                    <img src="imgs/offer-bg-2.jfif" alt="Lorem ipsum dolor" />
                                    <figcaption>
                                        <h2>Lorem ipsum dolor</h2>
                                        <h4>Lorem ipsum dolor sit amet, consectetur </h4>
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure className='offer'>
                                    <img src="imgs/offer-bg-3.jfif" alt="Lorem ipsum dolor" />
                                    <figcaption>
                                        <h2 className='accent-2'>Lorem ipsum dolor</h2>
                                        <h4 className='accent-1'>Lorem ipsum dolor sit amet, consectetur </h4>
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure className='offer'>
                                    <img src="imgs/offer-bg-4.jfif" alt="Lorem ipsum dolor" />
                                    <figcaption>
                                        <h2>Lorem ipsum dolor</h2>
                                        <h4>Lorem ipsum dolor sit amet, consectetur </h4>
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure className='offer'>
                                    <img src="imgs/offer-bg-5.png" alt="Lorem ipsum dolor" />
                                    <figcaption>
                                        <h2>Lorem ipsum dolor</h2>
                                        <h4>Lorem ipsum dolor sit amet, consectetur </h4>
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure className='offer'>
                                    <img src="imgs/offer-bg-6.png" alt="Lorem ipsum dolor" />
                                    <figcaption>
                                        <h2>Lorem ipsum dolor</h2>
                                        <h4>Lorem ipsum dolor sit amet, consectetur </h4>
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </section>

            <section className='sec-home-6 mb-8'>
                <Container className='custom-container'>
                    <h2>Поработаем?</h2>
                    <h4>Заполните форму и наш менеджер свяжется с вами в ближайшее время</h4>

                    <Row lg={2} className='mt-5'>
                        <Col>
                            <div className="imgs">
                                <img src="imgs/monitor.png" alt="monitor" className='bg'/>
                                <Logo className='logo'/>
                            </div>
                            <button type='button' className='btn-3 fs-11 mx-auto mt-5'>Заполнить бриф</button>
                        </Col>
                        <Col>
                        <div className="form">
                            <div className="top">
                                <button type='button'>Мне нужна консультация</button>
                                <button type='button'>У меня есть проект</button>
                            </div>
                            <form action="">
                                <div className="fw-5 mb-2">Телефон</div>
                                <input type="tel" placeholder='Телефон' className='mb-3'/>
                                <div className="fw-5 mb-2">Комментарий</div>
                                <textarea rows="5" placeholder='Ваш комментарий'></textarea>
                                <label className='mt-4'>
                                    <input type="checkbox"/>
                                    <span>Я согласен на обработку персональных данных</span>
                                </label>
                                <button type='button' className='btn-1 fs-11 mx-auto mt-4'>Оставить заявку</button>
                            </form>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='sec-home-7 mb-8'>
                <Container className='custom-container mb-5'>
                    <h2>Блог</h2>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <Swiper
                            className='mt-5'
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation
                            >
                            <SwiperSlide>
                                <ArticlePreview/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className='preview'>
                                    <figure>
                                        <img src="imgs/offer-bg-5.png" alt="" />
                                        <figcaption>
                                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                            <div className='bottom'>
                                                <span>5 мин</span>
                                                <span>128</span>
                                                <span>12.01.2022</span>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </article>
                            </SwiperSlide>

                        </Swiper>
                </Container>
            </section>
        </main>
    );
};

export default Home;