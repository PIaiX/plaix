import React from 'react'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/free-mode'

import portfolio from '../assets/imgs/portfolio.svg'
import star from '../assets/imgs/star.svg'
import stack from '../assets/imgs/stack.svg'
import plant from '../assets/imgs/plant.png'
import { FiChevronRight } from "react-icons/fi"
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'
import ArticlePreview from '../components/ArticlePreview'
import FormCallback from '../components/FormCallback'
import SvgMask from '../components/SvgMask'

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
                    <Row>
                        <Col lg={6}>
                            <h2>О Нас</h2>
                            <h4>команда, которая работает над вашими проектами</h4>
                            <Row>
                                <Col lg={10}>
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
                        <Col lg={6} className='position-relative'>
                            <Swiper
                                className='about-slider'
                                modules={[Navigation, EffectFade]}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                >
                                <SwiperSlide>
                                    <div className='team-imgs'>
                                        <SvgMask imgLink0={'imgs/photo.jfif'} imgLink1={'imgs/team.jfif'} imgLink2={'imgs/team2.jfif'}/>
                                        <h3>Дизайнер</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='team-imgs'>
                                        <SvgMask imgLink0={'imgs/photo.jfif'} imgLink1={'imgs/team2.jfif'} imgLink2={'imgs/team.jfif'}/>
                                        <h3>ктото</h3>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
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

            <section className='sec-home-6 mb-5'>
                <Container className='custom-container'>
                    <h2>Поработаем?</h2>
                    <h4>Заполните форму и наш менеджер свяжется с вами в ближайшее время</h4>

                    <Row lg={2} className='mt-5 gx-5'>
                        <Col>
                            <div className="imgs">
                                <img src="imgs/monitor.png" alt="monitor" className='bg'/>
                                <Logo className='logo'/>
                            </div>
                            <button type='button' className='btn-3 fs-11 mx-auto mt-5'>Заполнить бриф</button>
                        </Col>
                        <Col>
                            <FormCallback />
                        </Col>
                    </Row>
                </Container>
                <img src={plant} alt="plant" className='bg-sec'/>
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
                            <ArticlePreview/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ArticlePreview/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ArticlePreview/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ArticlePreview/>
                        </SwiperSlide>
                    </Swiper>
                    <button type='button' className='btn-3 fs-13 mt-5 mx-auto'>
                        <span>Перейти в блог</span>
                        <FiChevronRight/>
                    </button>
                </Container>
            </section>
        </main>
    );
};

export default Home;