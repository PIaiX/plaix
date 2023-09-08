import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ticker from '../components/Ticker';
import useObserver from '../hooks/useObserver';
import { Autoplay, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import NewsBlock from '../components/NewsBlock';
import Line from '../components/svg/Line';
import Diagram from '../components/svg/Diagram';
// import Union from '../components/svg/Union';
// import UnionMobile from '../components/svg/UnionMobile';
import useIsMobile from '../hooks/isMobile';
import Bg from '../components/svg/Bg';
import Arrow from '../components/svg/Arrow';
import FolderSvg2 from '../components/svg/FolderSvg2';
import FolderSvg3 from '../components/svg/FolderSvg3';
import Chart from '../components/svg/Chart';
import CRM from '../components/svg/CRM';
import Globe from '../assets/imgs/icons/globe.svg';
import List from '../assets/imgs/icons/list.svg';
import LogotipsSvg from '../components/svg/LogotipsSvg';

const Home = () => {
  const [objRef, isVisible] = useObserver({threshold: 1.0});
  const [objRef2, isVisible2] = useObserver({threshold: 0.5});
  
  return (
    <main>
      <Container>
        <section className='sec-home-1 mb-45'>
          <Bg className="bg"/>
          <Row className='position-relative z-10'>
            <Col lg={7}>
              <h1 className='mb-4 mb-lg-5'>
                <Line/>
                <span>Plaix - разработка <br/>цифровых сервисов</span>
              </h1>
              <button type='button' className='btn-1'>Оставить заявку</button>
            </Col>
            <Col lg={5} className='mt-4 mt-lg-0 d-flex flex-column justify-content-between'>
              <h6 className='mb-4 mb-sm-5 mb-lg-0 pe-lg-5'>Веб и мобильная разработка. Бэкенд и интеграции любой сложности. Проектирование архитектуры и управление процессами.</h6>
              <div>
                <ul className='projects-icons'>
                  <li><img src="imgs/logotips/BD.webp" alt="BD" /></li>
                  <li><img src="imgs/logotips/on.webp" alt="ON" className='br-white'/></li>
                  <li><img src="imgs/logotips/yooapp.webp" alt="yooapp" /></li>
                  <li><img src="imgs/logotips/rowe.webp" alt="rowe" /></li>
                </ul>
                <p className='d-block mt-3'>100+ реализованных проектов</p>
              </div>
            </Col>
          </Row>
        </section>

        <section className='sec-home-2-new'>
          <h2 className='text-center'>
            Приступим <span ref={objRef} className='indicator-switch' data-observing={isVisible}><span></span></span> к вашему проекту уже завтра
          </h2>
          <Row className='g-3 g-md-4'>
            <Col xs={12} sm={6} lg={4}>
              <div className="service-white">
                <div className="box">
                  <h3 className='mb-2 mb-md-3'>Web-разработка</h3>
                  <p>Разрабатываем лендинги, интернет-магазины, web-сервисы. Берём на доработку и развитие.</p>
                </div>
                <LogotipsSvg/>
                {/* <img src="imgs/logotips.gif" alt="Web-разработка" /> */}
              </div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <div className="service-blue">
                <div className="box">
                  <h3 className='mb-3'>Мобильные приложения</h3>
                  <p>Создаём приложения для iOS и Android. Разрабатываем серверную часть и API.</p>
                </div>
                <div className='imgs-div' ref={objRef2} data-observing={isVisible2}>
                  <picture>
                    <source srcset="imgs/smartphoneVideoMini2.gif" media="(max-width: 767px)" />
                    <img src="imgs/smartphoneVideoMax.gif" alt="Мобильные приложения" className='main' />
                  </picture>
                  {/* <img src="imgs/smartphoneVideoMax.gif" alt="Мобильные приложения" className='main'/> */}
                  <img src="imgs/billetgreen.svg" alt="billetgreen" className='billet-1'/>
                  <img src="imgs/billetwhite.svg" alt="billetwhite" className='billet-2'/>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <div className="service-green">
                <div className="box">
                  <h3 className='mb-3'>B2B-продукты</h3>
                  <p>Делаем сервисы автоматизации и аналитики, CRM и ERP, кабинеты, чат-боты, уникальные решения по техзаданию</p>
                </div>
                <div className='crm'>
                  <ul className='crm-1'>
                    <li className='pill-1'>Автоматизация</li>
                    <li className='pill-2'>Управление</li>
                    <li className='pill-3'>Аналитика</li>
                  </ul>
                  <div className='crm-2'>
                    <div className="bar-1"></div>
                    <div className="bar-2"></div>
                    <div className="bar-3"></div>
                    <div className="bar-4"></div>
                    <div className="bar-5"></div>
                    <div className="bar-6"></div>
                    <div className="bar-7"></div>
                  </div>
                  <div className='crm-3'>
                    <div className='num'></div>
                    <div>клиентов</div>
                  </div>
                  <div className='crm-4'>
                    <img src={Globe} alt="Globe" className='crm-4-globe' />
                    <img src={List} alt="List" className='crm-4-list'/>
                  </div>
                </div>
                {/* <CRM/> */}
                {/* <img src="imgs/crm.gif" alt="B2B-продукты" /> */}
              </div>
            </Col>
            <Col xs={12} sm={6} lg={4} xxl={5}>
              <div className="service-white-2">
                <div className="box">
                  <h3 className='mb-2 mb-md-3'>IT-субподряд</h3>
                  <p>Решаем задачи на субподряде для digital-агентств и IT-компаний</p>
                </div>
                <img src="imgs/img1.webp" alt="IT-субподряд" />
              </div>
            </Col>
            <Col xs={12} lg={8} xxl={7}>
              <Row xs={1} sm={2} className='g-3 g-md-4'>
                <Col>
                  <div className="service-black">
                    <div className="box">
                      <img src="imgs/abstractform.webp" alt="Дизайн и оформление" className='img-fluid d-block ms-auto mb-4'/>
                      <div>
                        <h3 className='mb-2 mb-md-3'>Дизайн и оформление</h3>
                        <p>Проектируем суперудобные интерфейсы, опираясь на принципы UX/UI</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="service-folder">
                    <FolderSvg3 className={'service-folder-bg'}/>
                    <div className="box">
                      <div>
                        <h3 className='mb-2 mb-md-3'>Продвижение</h3>
                        <p>Выполняем весь комплекс работ по развитию и продвижению вашего проекта</p>
                      </div>
                      <ul>
                        <li>SEO-оптимизация</li>
                        <li>контекст</li>
                        <li>реклама в социальных сетях</li>
                        <li>target & retargeting</li>
                      </ul>
                      <p>Поможем вам привлечь новых клиентов и продвинем сайт в поисковых системах</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>

      <section className='sec-home-3 mb-45'>
        <Ticker reverse={true} text={'Развивай свой бизнес'}/> 
        <Ticker reverse={false} className={'type-2'} text={'Развивай свой бизнес'}/>

        <Container>
          <h2 className='fw-6'>Проекты, которые говорят сами за себя</h2>
          <h4 className='fw-3'>Отвечаем за результат вместе с вами. Нам важно создавать рабочие <br/>решения и помогать компаниям приносить пользу.</h4>
          <button type='button' className='btn-3 mx-auto mt-4 mt-md-5 mb-4 mb-sm-5'>
            <span className='me-2'>Посмотреть все проекты</span>
            <Arrow/>
          </button>

          {/* <Row className='align-items-center'>
            <Col xs={12} md={7} xl={8} className='pe-xl-5 mb-4 mb-md-0'>
              <img src="imgs/slides.gif" alt="Проекты, которые говорят сами за себя"/>
            </Col>
            <Col xs={12} md={5} xl={4}>
              <h3 className='d-none d-md-block'>Проекты, которые говорят сами за себя</h3>
              <p className='d-none d-md-block'>Отвечаем за результат вместе с вами. Нам важно создавать рабочие решения и помогать компаниям приносить пользу.</p>
              <button type='button' className='btn-2 mt-md-5 w-sm-100'>Посмотреть все проекты</button>
            </Col>
          </Row> */}
        </Container>

        <Swiper
          className='swiperProjects'
          loop={true}
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          spaceBetween={15}
          slidesPerView={'auto'}
          speed={15000}
          autoplay={{
            delay: 0,
          }}
          breakpoints={{
            576: {
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <img src="imgs/projects/parfe.webp" alt="parfe" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/projects/rowe.webp" alt="rowe" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/projects/parfe.webp" alt="parfe" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/projects/rowe.webp" alt="rowe" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          className='swiperProjects'
          loop={true}
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          spaceBetween={15}
          slidesPerView={'auto'}
          speed={15000}
          autoplay={{
            delay: 0,
            reverseDirection: true
          }}
          breakpoints={{
            576: {
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <img src="imgs/projects/parfe.webp" alt="parfe" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/projects/rowe.webp" alt="rowe" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/projects/parfe.webp" alt="parfe" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/projects/rowe.webp" alt="rowe" />
          </SwiperSlide>
        </Swiper>
      </section>

      <Container>
        <section className='sec-home-4-new mb-45'>
          <div className="grid-4">
            <div className='grid-4-1'>
              <h3>Наш многолетний опыт для твоих смелых идей</h3>
            </div>
            <div className='grid-4-2'>
              <ul className='photos'>
                <li><img src="imgs/img4.webp" alt="man"/></li>
                <li><img src="imgs/img3.webp" alt="woman"/></li>
              </ul>
              <h6 className='ms-3'>Обеспечиваем стабильность разработки за счет вовлечения команды профессионалов</h6>
            </div>
            <div className='grid-4-3'>
              <div className="box">
                <h4 className='text-center text-lg-start'>Используем большой стек технологий для решения клиентских задач</h4>
                <Row className='logotips' xs={2}>
                  <Col>
                    <img src="imgs/logotips/mongo.webp" alt="mongo" />
                  </Col>
                  <Col>
                    <img src="imgs/logotips/react.webp" alt="react" />
                  </Col>
                  <Col>
                    <img src="imgs/logotips/ex.webp" alt="ex" />
                  </Col>
                  <Col>
                    <img src="imgs/logotips/node.webp" alt="node" />
                  </Col>
                </Row>
              </div>
            </div>
            <div className='grid-4-4'>
              <div className="box">
                <h4 className='ms-xxl-5'>К нам обращаются</h4>
                <Chart/>
              </div>
            </div>
          </div>

          {/* <Row className='gx-4'>
            <Col xs={12} lg={9} className="order-1">
              <div className='union'>
                <Union className="d-none d-md-block"/>
                <UnionMobile className="d-md-none"/>
                <h3>Наш многолетний опыт для твоих смелых идей</h3>
              </div>
            </Col>
            <Col xs={12} lg={3} className='order-4 order-lg-2 d-flex flex-column justify-content-end align-items-center align-items-lg-start pb-4 pb-xl-5 ps-xxl-5 mt-5 mt-lg-0'>
              <ul className='photos'>
                <li><img src="imgs/img3.webp" alt="img3"/></li>
                <li><img src="imgs/img4.webp" alt="img4"/></li>
                <li><img src="imgs/img5.webp" alt="img5"/></li>
              </ul>
              <h6 className='text-center text-lg-start'>Обеспечиваем стабильность разработки за счет вовлечения команды профессионалов</h6>
            </Col>
            <Col xs={12} lg={6} className="order-3">
              <h5 className='text-center text-lg-start'>Используем большой стек технологий для решения клиентских задач</h5>
              <Row className='logotips' xs={2}>
                <Col>
                  <img src="imgs/logotips/mongo.webp" alt="mongo" />
                </Col>
                <Col>
                  <img src="imgs/logotips/react.webp" alt="react" />
                </Col>
                <Col>
                  <img src="imgs/logotips/ex.webp" alt="ex" />
                </Col>
                <Col>
                  <img src="imgs/logotips/node.webp" alt="node" />
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={6} className="order-2 order-lg-4 mb-5 mb-lg-0">
              <div className="box">
                <h4>К нам обращаются</h4>
                <div className="diagram">
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
          </Row> */}
        </section>

        <section className='sec-home-5 mb-4'>
          <h3>Акции и спец. предложения</h3>
          <Swiper
            className='offersSwiper'
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={'auto'}
            autoplay={{
              delay: 5000,
            }}
            breakpoints={{
              992: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            >
            <SwiperSlide>
              <div className="card-1">
                <h4 className='fw-4'>Lorem ipsum</h4>
                <h6>Скидка 50% на SEO и Контекст, а также стратегия за 0 рублей</h6>
                <div className='marker'>
                  <Arrow/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-2">
                <h4 className='fw-4'>Lorem ipsum</h4>
                <h6>Скидка 50% на SEO и Контекст, а также стратегия за 0 рублей</h6>
                <div className='marker'>
                  <Arrow/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-3">
                <FolderSvg2 className={'card-3-bg'}/>
                <h4 className='fw-4'>Lorem ipsum</h4>
                <h6>Скидка 50% на SEO и Контекст, а также стратегия за 0 рублей</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className='sec-home-7 mb-45'>
          <div className="text h-100">
            <h2 className='h1 text-center'>Plaix - разработка цифровых сервисов</h2>
            <button type='button' className='btn-1 mx-auto'>Оставить заявку</button>
          </div>
        </section>

        <NewsBlock/>
      </Container>
    </main>
  );
};

export default Home;