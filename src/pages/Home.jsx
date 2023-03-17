import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Ticker from '../components/Ticker';
import useObserver from '../hooks/useObserver';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import NewsBlock from '../components/NewsBlock';
import Line from '../components/svg/Line';
import Diagram from '../components/svg/Diagram';
import Union from '../components/svg/Union';

const Home = () => {
  const [objRef, isVisible] = useObserver({threshold: 1.0});
  const [objRef2, isVisible2] = useObserver({threshold: 0.5});
  
  return (
    <main>
      <Container className='custom-container'>
        <section className='sec-home-1 mb-45'>
          <Row>
            <Col lg={7}>
              <h1 className='mb-4 mb-lg-5'>
                <Line/>
                <span>Красивые сайты, которые работают</span>
              </h1>
              <button type='button' className='btn-1'>Оставить заявку</button>
            </Col>
            <Col lg={5} className='mt-4 mt-lg-0 d-flex flex-column justify-content-between pt-3 pt-xl-4 pt-xxl-5 pb-xl-4'>
              <p className='mb-5 mb-lg-0 pe-lg-5'>На создание и запуск проекта и ещё какой то текст для описания данного блока создание и запуск проекта и ещё какой то текст для описания данного блока</p>
              <div>
                <ul className='projects-icons'>
                  <li><img src="imgs/Ellipse1.svg" alt="Ellipse1" /></li>
                  <li><img src="imgs/Ellipse2.svg" alt="Ellipse2" /></li>
                  <li><img src="imgs/Ellipse3.svg" alt="Ellipse3" /></li>
                  <li><img src="imgs/Ellipse4.svg" alt="Ellipse4" /></li>
                </ul>
                <Link to='/' className='d-block mt-3'>Посмотреть все проекты</Link>
              </div>
            </Col>
          </Row>
        </section>

        <section className='sec-home-2 px-xxl-5 pb-5 mb-45'>
          <h2 className='text-center'>
            Приступим <span ref={objRef} className='indicator-switch' data-observing={isVisible}><span></span></span> к вашему 
            <br/>проекту уже завтра
          </h2>
          <Row className='g-4'>
            <Col xs={12} sm={6} lg={4}>
              <div className="service-white">
                <div className="box">
                  <h3 className='mb-3'>Web-разработка</h3>
                  <p>Разрабатываем лендинги, интернет-магазины, web-сервисы. Берём на доработку и развитие.</p>
                </div>
                <img src="imgs/logotips.gif" alt="Web-разработка" />
              </div>
            </Col>
            <Col xs={12} sm={6} lg={8}>
              <Swiper
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="service-blue">
                    <div className="box">
                      <h3 className='mb-3'>Мобильные приложения</h3>
                      <p>Создаём приложения для iOS и Android. Разрабатываем серверную часть и API.</p>
                    </div>
                    <div className='imgs-div' ref={objRef2} data-observing={isVisible2}>
                      <img src="imgs/video without plates.gif" alt="Мобильные приложения" className='main'/>
                      <img src="imgs/billetgreen.svg" alt="billetgreen" className='billet-1'/>
                      <img src="imgs/billetwhite.svg" alt="billetwhite" className='billet-2'/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-green">
                    <div className="box">
                      <h3 className='mb-3'>B2B-продукты</h3>
                      <p>Делаем сервисы автоматизации и аналитики, CRM и ERP, кабинеты, чат-боты, уникальные решения по техзаданию</p>
                    </div>
                    <img src="imgs/crm.gif" alt="B2B-продукты" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col xs={12} sm={6} lg={5}>
              <div className="service-white-2">
                <div className="box">
                  <h3 className='mb-3'>IT-субподряд</h3>
                  <p>Решаем задачи на субподряде для digital-агентств и IT-компаний</p>
                </div>
                <img src="imgs/img1.png" alt="IT-субподряд" />
              </div>
            </Col>
            <Col xs={12} sm={6} lg={7}>
              <div className="service-lightblue">
                <div className="box">
                  <h3 className='mb-4'>Дизайн</h3>
                  <p>Проектируем суперудобные интерфейсы, опираясь на принципы UX/UI</p>
                </div>
              </div>

              <div className="service-folder mt-4">
                <div className="top">
                  <div className='top-left'><h3 className='mb-0'>Продвижение</h3></div>
                  <div className='top-right'></div>
                </div>
                <div className='bottom'>
                  <p>Поможем вам привлечь новых клиентов и продвинем сайт в поисковых системах</p>
                  <div className='d-flex align-items-center mt-4'>
                    <img src="imgs/dazzle-stack-of-gold-coins.gif" className='icon' alt="coins" />
                    <p>Какой то короткий текст</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>

      <section className='mb-45 py-lg-5'>
        <Ticker reverse={true} text={'Развивай свой бизнес'}/> 
        <Ticker reverse={false} className={'type-2'} text={'Развивай свой бизнес'}/>
      </section>

      <Container className='custom-container'>
        <section className='sec-home-3 ps-xxl-5 mb-45'>
          <Row className='align-items-center'>
            <Col md={7} xl={8} className='pe-xl-5'>
              <img src="imgs/slides.gif" alt="Проекты, которые говорят сами за себя"/>
            </Col>
            <Col md={5} xl={4}>
              <h3>Проекты, которые говорят сами за себя</h3>
              <p>Отвечаем за результат вместе с вами. Нам важно создавать рабочие решения и помогать компаниям приносить пользу.</p>
              <button type='button' className='btn-2 mt-5'>Посмотреть все проекты</button>
            </Col>
          </Row>
        </section>

        <section className='sec-home-4 px-xxl-5 mb-45'>
          <Row className='gx-4'>
            <Col md={9}>
              <div className='union'>
                <Union />
                <h3>Наш многолетний опыт для твоих смелых идей</h3>
              </div>
            </Col>
            <Col md={3} className='d-flex flex-column justify-content-end align-items-start pb-4 pb-xl-5 p-xxl-5'>
              <ul className='photos'>
                <li><img src="imgs/img3.png" alt="img3"/></li>
                <li><img src="imgs/img4.png" alt="img4"/></li>
                <li><img src="imgs/img5.png" alt="img5"/></li>
              </ul>
              <h6>Обеспечиваем стабильность разработки за счет вовлечения команды профессионалов</h6>
            </Col>
            <Col md={6}>
              <h5>Используем большой стек технологий для решения клиентских задач</h5>
              <Row className='logotips' md={2}>
                <Col>
                  <img src="imgs/logotips/mongo.png" alt="mongo" />
                </Col>
                <Col>
                  <img src="imgs/logotips/react.png" alt="react" />
                </Col>
                <Col>
                  <img src="imgs/logotips/ex.png" alt="ex" />
                </Col>
                <Col>
                  <img src="imgs/logotips/node.png" alt="node" />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <div className="box">
                <h4>К нам обращаются</h4>
                <div className="diagram">
                  {/* <img src="imgs/diagram.svg" alt="diagram" /> */}
                  <Diagram/>
                  <div className="title">
                    <h3 className='text-center mb-0'>100+</h3>
                    <span>реализованных проектов</span>
                  </div>
                  <div className="text-1">Повторно</div>
                  <div className="text-2">По рекомендации</div>
                  <div className="text-3">За реализацией оригинальной идеи</div>
                  <div className="text-4">За сложной технической разработкой</div>
                </div>
              </div>
            </Col>
          </Row>
        </section>        

        <section className='sec-home-5 px-xxl-5 mb-45'>
          <h3>Акции и спец. предложения</h3>
          <Row className='mb-4 mb-xl-5'>
            <Col md={8}>
              <h4>Отвечаем за результат вместе с вами. Нам важно создавать рабочие решения и помогать компаниям приносить пользу. </h4>
            </Col>
            <Col md={4}>
              <button type='button' className='btn-3'>Оставить заявку</button>
            </Col>
          </Row>

          <Swiper
              spaceBetween={24}
              slidesPerView={3}
            >
            <SwiperSlide>
              <div className="folder">
                <div className="top">
                  <div className='top-left'><h4 className='fw-6 mb-0'>Lorem ipsum</h4></div>
                  <div className='top-right'></div>
                </div>
                <div className='bottom'>
                  <h4 className='mb-0'>Скидка 50% на SEO и Контекст, а также стратегия за 0 рублей</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h4 className='fw-6'>Lorem ipsum</h4>
                <h4 className='mb-0'>Скидка 50% на SEO и Контекст, а также стратегия за 0 рублей</h4>
                <div className='marker'></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-2">
                <h4 className='fw-6'>Lorem ipsum</h4>
                <h4 className='mb-0'>Скидка 50% на SEO и Контекст, а также стратегия за 0 рублей</h4>
                <div className='marker'></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <NewsBlock/>

        <section className='sec-home-7'>
          <h2 className='text-center'>Пройдите опрос за 2 минуты и узнайте стоимость вашего проекта</h2>
          <button type='button' className='btn-1 mx-auto'>Пройти</button>
        </section>
      </Container>
    </main>
  );
};

export default Home;