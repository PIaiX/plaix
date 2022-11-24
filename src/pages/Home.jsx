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
                            <svg width="423" height="520" viewBox="0 0 423 520" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M225.339 0.534736C295.998 6.28507 338.28 74.6493 376.865 133.51C408.896 182.372 428.448 237.19 417.721 294.009C406.534 353.269 371.401 403.57 319.81 435.733C258.577 473.907 180.012 518.833 117.825 480.97C57.2067 444.062 88.0031 354.698 74.0104 286.076C61.1979 223.242 11.4716 162.697 41.4078 106.21C75.9625 41.0089 150.53 -5.55326 225.339 0.534736Z" fill="#E0C8FC"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M192.196 17.542C261.909 23.3701 303.642 92.6596 341.725 152.317C373.339 201.84 392.643 257.4 382.076 314.989C371.055 375.05 336.407 426.032 285.517 458.63C225.115 497.321 147.616 542.855 86.2539 504.48C26.4387 467.072 56.798 376.498 42.9747 306.948C30.3173 243.263 -18.758 181.898 10.7614 124.647C44.835 58.5639 118.39 11.3716 192.196 17.542Z" stroke="#9A4AF6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M207.196 3.54197C276.909 9.37013 318.642 78.6596 356.725 138.317C388.339 187.84 407.643 243.4 397.076 300.989C386.055 361.05 351.407 412.032 300.517 444.63C240.115 483.321 162.616 528.855 101.254 490.48C41.4387 453.072 71.798 362.498 57.9747 292.948C45.3173 229.263 -3.75801 167.898 25.7614 110.647C59.835 44.5639 133.39 -2.62842 207.196 3.54197Z" stroke="#9A4AF6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M207.203 3.52758C276.917 9.20095 318.633 76.6503 356.701 134.723C388.304 182.931 407.594 237.016 397.011 293.075C385.973 351.541 351.311 401.169 300.41 432.901C239.996 470.565 162.483 514.889 101.128 477.533C41.3209 441.119 71.7051 352.951 57.8997 285.247C45.2586 223.254 -3.80218 163.519 25.7334 107.789C59.8256 43.4601 133.396 -2.47894 207.203 3.52758Z" fill="#C4C4C4"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M207.203 3.52758C276.917 9.20095 318.633 76.6503 356.701 134.723C388.304 182.931 407.594 237.016 397.011 293.075C385.973 351.541 351.311 401.169 300.41 432.901C239.996 470.565 162.483 514.889 101.128 477.533C41.3209 441.119 71.7051 352.951 57.8997 285.247C45.2586 223.254 -3.80218 163.519 25.7334 107.789C59.8256 43.4601 133.396 -2.47894 207.203 3.52758Z" fill="url(#pattern0)"/>
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#photo" transform="translate(-0.215284 -0.0640599) scale(0.0014326 0.00116573)"/>
                                    </pattern>
                                    <image xlinkHref="imgs/photo.jfif" id="photo" x="0" y="0" width="977" height="976"/>
                                </defs>
                            </svg>

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
                            <button type='button' className='btn-3 fs-11 mx-auto'>Заполнить бриф</button>
                        </Col>
                        <Col>
                            <form action="">
                                <div className="fw-5">Телефон</div>
                                <input type="tel" placeholder='Телефон'/>
                                <div className="fw-5">Комментарий</div>
                                <textarea rows="5" placeholder='Ваш комментарий'></textarea>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='sec-home-7 mb-8'>
                <Container className='custom-container mb-5'>
                    <h2>Блог</h2>
                    <h4>Lorem ipsum dolor sit amet</h4>
                </Container>
            </section>
        </main>
    );
};

export default Home;