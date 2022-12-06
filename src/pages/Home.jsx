import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

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
import pencil from '../assets/imgs/pencil.png'
import cup from '../assets/imgs/bg/bg-2.png'
import { FiChevronRight } from "react-icons/fi"
import {ReactComponent as Logo} from '../assets/imgs/logo.svg'
import ArticlePreview from '../components/ArticlePreview'
import FormCallback from '../components/FormCallback'
import SvgMask from '../components/SvgMask'
import ServiceCard from '../components/ServiceCard'
import Offer from '../components/Offer'
import Plus from '../components/Plus'

const Home = () => {
    return (
        <main>
            <section className='sec-home-1'>
                <Container className='custom-container'>
                    <Row className='align-items-center'>
                        <Col md={6} xl={5}>
                            <p className='h1 mb-4 mb-xxl-5'><span className='color-2'>Мы знаем</span>, как реализовать ваш проект. </p>

                            <h1 className='mb-4 mb-xxl-5'>Разработка сайтов, мобильных приложений и веб-сервисов</h1>

                            <button type='button' className='btn-1 fs-13'>обсудить проект</button>
                        </Col>
                        <Col md={6} xl={7}>
                            <img src="imgs/main-img.png" alt="Разработка сайтов, мобильных приложений и веб-сервисов" className='img-fluid ms-auto d-block'/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='sec-home-2 mb-8'>
                <Container>
                    <Row lg={3} className='gx-4 gx-xl-5'>
                        <Col>
                            <Plus title={"Огромное портфолио"} text={"Более сотни реализованных проектов из совершенно разных сфер"} imgUrl={portfolio} />
                        </Col>
                        <Col>
                            <Plus title={"Нас рекомендуют"} text={"Отзывы - наше всё. Каждый второй клиент по рекомендации"} imgUrl={star} />
                        </Col>
                        <Col>
                            <Plus title={"Стек технологий"} text={"Современные технологии и собственные разработки"} imgUrl={stack} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='sec-home-3 mb-8'>
                <Container className='custom-container mb-4 mb-sm-5'>
                    <h2>Наши услуги</h2>
                    <h4>Приступим к вашему проекту уже завтра</h4>
                </Container>
                <Container>
                    <Row xs={2} lg={3} className='g-2 g-sm-4 g-xl-5'>
                        <Col>
                            <ServiceCard title={"Web разработка"} text={"Разрабатываем лендинги, интернет-магазины, web-сервисы. Берем на доработку и развитие."} imgUrl={"imgs/img1.jpg"}/>
                        </Col>
                        <Col>
                            <ServiceCard title={"Мобильные приложения"} text={"Создаём приложения для iOS и Android. Разрабатываем серверную часть и API."} imgUrl={"imgs/img2.jfif"}/>
                        </Col>
                        <Col>
                            <ServiceCard title={"Дизайн"} text={"Проектируем суперудобные интерфейсы, опираясь на принципы UX/UI."} imgUrl={"imgs/img3.jfif"}/>
                        </Col>
                        <Col>
                            <ServiceCard title={"Продвижение"} text={"Поможем вам привлечь новых клиентов и продвинем сайт в Yandex и Google"} imgUrl={"imgs/img4.jfif"}/>
                        </Col>
                        <Col>
                            <ServiceCard title={"IT СУбподряд"} text={"Решаем задачи на субподряде для digital-агентств и IT-компаний."} imgUrl={"imgs/img5.jfif"}/>
                        </Col>
                        <Col>
                            <ServiceCard title={"b2b-продукты"} text={"Делаем сервисы автоматизации и аналитики, CRM и ERP, кабинеты, чат-боты, уникальные решения по техзаданию."} imgUrl={"imgs/img6.png"}/>
                        </Col>
                    </Row>
                </Container>

                <Container className='mt-5'>
                    <button type='button' className='brief'>
                        <p className='fs-17 fw-3 mb-2 mb-sm-3'>У Вас есть проект для нас?</p>
                        <h2>Заполнить Бриф</h2>
                    </button>
                </Container>
            </section>

            <section className='sec-home-4 mb-8'>
                <Container className='custom-container position-relative'>
                    <img src="imgs/bg-2.png" alt="cup" className='bg'/>
                    <Row>
                        <Col xl={6}>
                            <h2>О Нас</h2>
                            <h4>команда, которая работает над вашими проектами</h4>
                            <Row className='mt-3 mt-sm-4 mt-xxl-5'>
                                <Col xl={10}>
                                    <ul className="list-unstyled">
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
                        <Col xl={6} className='position-relative'>
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
                                        <SvgMask imgLink0={'imgs/img1.jpg'} imgLink1={'imgs/team2.jfif'} imgLink2={'imgs/team.jfif'}/>
                                        <h3>кто-то</h3>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
                <img src={pencil} alt="pencil" className='d-block d-lg-none mx-auto'/>
            </section>

            <section className='sec-home-5 mb-8'>
                <Container className='custom-container'>
                    <h2 className='d-none d-lg-block'>Спецпредожения</h2>
                    <h4 className='d-none d-lg-block'>отличная возможность начать</h4>

                    <div className="position-relative mt-lg-5">
                        <Swiper
                            modules={[Navigation, FreeMode]}
                            spaceBetween={5}
                            slidesPerView={2}
                            freeMode={true}
                            navigation
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4
                                },
                            }}
                            >
                            <SwiperSlide>
                                <Offer imgUrl={"imgs/offer-bg-1.jfif"} title={'Lorem ipsum dolor'} titleColor={0} text={'Lorem ipsum dolor sit amet, consectetur'} textColor={1}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Offer imgUrl={"imgs/offer-bg-2.jfif"} title={'Lorem ipsum dolor'} titleColor={0} text={'Lorem ipsum dolor sit amet, consectetur'} textColor={0}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Offer imgUrl={"imgs/offer-bg-3.jfif"} title={'Lorem ipsum dolor'} titleColor={2} text={'Lorem ipsum dolor sit amet, consectetur'} textColor={1}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Offer imgUrl={"imgs/offer-bg-4.jfif"} title={'Lorem ipsum dolor'} titleColor={0} text={'Lorem ipsum dolor sit amet, consectetur'} textColor={0}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Offer imgUrl={"imgs/offer-bg-5.png"} title={'Lorem ipsum dolor'} titleColor={0} text={'Lorem ipsum dolor sit amet, consectetur'} textColor={0}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Offer imgUrl={"imgs/offer-bg-6.png"} title={'Lorem ipsum dolor'} titleColor={0} text={'Lorem ipsum dolor sit amet, consectetur'} textColor={0}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </section>

            <section className='sec-home-6 mb-5'>
                <Container className='custom-container'>
                    <h2>Поработаем?</h2>
                    <h4>Заполните форму и наш менеджер свяжется с вами в ближайшее время</h4>

                    <Row xs={1} lg={2} className='mt-4 mt-sm-5 gx-4 gx-xl-5'>
                        <Col className='d-none d-lg-block'>
                            <div className="imgs">
                                <img src="imgs/monitor.png" alt="monitor" className='bg'/>
                                <Logo className='logo'/>
                            </div>
                            <button type='button' className='btn-3 fs-11 mx-auto mt-4 mt-sm-5'>Заполнить бриф</button>
                        </Col>
                        <Col>
                            <FormCallback />
                        </Col>
                    </Row>
                </Container>
                <img src={plant} alt="plant" className='bg-sec'/>
                <img src={cup} alt="cup" className='img-fluid d-block d-lg-none w-25 mx-auto mt-3'/>
            </section>

            <section className='sec-home-7 mb-8'>
                <Container className='custom-container mb-lg-5'>
                    <h2>Блог</h2>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <Swiper
                        className='mt-4 mt-sm-5'
                        spaceBetween={12}
                        slidesPerView={1}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
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
                    <Link to='/blog' className='btn-3 fs-13 mt-4 mt-sm-5 mx-auto'>
                        <span>Перейти в блог</span>
                        <FiChevronRight/>
                    </Link>
                </Container>
            </section>
        </main>
    );
};

export default Home;