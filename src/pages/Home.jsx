import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Globe from "../assets/imgs/icons/globe.svg";
import List from "../assets/imgs/icons/list.svg";
import NewsBlock from "../components/NewsBlock";
import Arrow from "../components/svg/Arrow";
import Bg from "../components/svg/Bg";
import Chart from "../components/svg/Chart";
import FolderSvg2 from "../components/svg/FolderSvg2";
import FolderSvg3 from "../components/svg/FolderSvg3";
import Line from "../components/svg/Line";
import LogotipsSvg from "../components/svg/LogotipsSvg";
import Ticker from "../components/Ticker";
import useObserver from "../hooks/useObserver";
import CallbackForm from "../components/CallbackForm";

const Home = () => {
  const { t } = useTranslation();
  const [objRef, isVisible] = useObserver({
    threshold: 1.0,
  });

  const [objRef2, isVisible2] = useObserver({
    threshold: 0.5,
  });

  const [showCallback, setShowCallback] = useState(false);

  return (
    <main>
      <Container>
        <section className="sec-home-1 mb-45">
          <Bg className="bg" />
          <Row className="position-relative z-10">
            <Col lg={7}>
              <h1 className="mb-4 mb-lg-5">
                <Line />
                <span>
                  {t("Plaix - разработка")}
                  <br />
                  {t("цифровых сервисов")}
                </span>
              </h1>
              <button
                type="button"
                className="btn-1"
                onClick={() => setShowCallback(!showCallback)}
              >
                {t("Оставить заявку")}
              </button>
            </Col>
            <Col
              lg={5}
              className="mt-4 mt-lg-0 d-flex flex-column justify-content-between"
            >
              <h6 className="mb-4 mb-sm-5 mb-lg-0 pe-lg-5">
                {t(
                  "Веб и мобильная разработка. Бэкенд и интеграции любой сложности. Проектирование архитектуры и управление процессами."
                )}
              </h6>
              <div>
                <ul className="projects-icons">
                  <li>
                    <img src="/imgs/logotips/BD.webp" alt="BD" />
                  </li>
                  <li>
                    <img
                      src="/imgs/logotips/on.webp"
                      alt="ON"
                      className="br-white"
                    />
                  </li>
                  <li>
                    <img src="/imgs/logotips/yooapp.webp" alt="yooapp" />
                  </li>
                  <li>
                    <img src="/imgs/logotips/rowe.webp" alt="rowe" />
                  </li>
                </ul>
                <p className="d-block mt-3">
                  {t("100+ реализованных проектов")}
                </p>
              </div>
            </Col>
          </Row>
        </section>
        <section className="sec-home-2-new" id="uslugy">
          <h2 className="text-center">
            {t("Приступим")}
            <span
              ref={objRef}
              className="indicator-switch"
              data-observing={isVisible}
            >
              <span></span>
            </span>
            {t("к вашему проекту уже завтра")}
          </h2>
          <Row className="g-3 g-md-4">
            <Col xs={12} sm={6} lg={4}>
              <div className="service-white">
                <div className="box">
                  <h3 className="mb-2 mb-md-3">{t("Web-разработка")}</h3>
                  <p>
                    {t(
                      "Разрабатываем лендинги, интернет-магазины, web-сервисы. Берём на доработку и развитие."
                    )}
                  </p>
                </div>
                <LogotipsSvg />
              </div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <div className="service-blue">
                <div className="box">
                  <h3 className="mb-3">{t("Мобильные приложения")}</h3>
                  <p>
                    {t(
                      "Создаём приложения для iOS и Android. Разрабатываем серверную часть и API."
                    )}
                  </p>
                </div>
                <div
                  className="imgs-div"
                  ref={objRef2}
                  data-observing={isVisible2}
                >
                  <picture>
                    <source
                      srcSet="/imgs/smartphoneVideoMini2.gif"
                      media="(max-width: 767px)"
                    />
                    <img
                      src="/imgs/smartphoneVideoMax.gif"
                      alt={t("Мобильные приложения")}
                      className="main"
                    />
                  </picture>
                  <img
                    src="/imgs/billetgreen.svg"
                    alt="billetgreen"
                    className="billet-1"
                  />
                  <img
                    src="/imgs/billetwhite.svg"
                    alt="billetwhite"
                    className="billet-2"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <div className="service-green">
                <div className="box">
                  <h3 className="mb-3">{t("B2B-продукты")}</h3>
                  <p>
                    {t(
                      "Делаем сервисы автоматизации и аналитики, CRM и ERP, кабинеты, чат-боты, уникальные решения по техзаданию"
                    )}
                  </p>
                </div>
                <div className="crm">
                  <ul className="crm-1">
                    <li className="pill-1">{t("Автоматизация")}</li>
                    <li className="pill-2">{t("Управление")}</li>
                    <li className="pill-3">{t("Аналитика")}</li>
                  </ul>
                  <div className="crm-2">
                    <div className="bar-1"></div>
                    <div className="bar-2"></div>
                    <div className="bar-3"></div>
                    <div className="bar-4"></div>
                    <div className="bar-5"></div>
                    <div className="bar-6"></div>
                    <div className="bar-7"></div>
                  </div>
                  <div className="crm-3">
                    <div className="num"></div>
                    <div>{t("клиентов")}</div>
                  </div>
                  <div className="crm-4">
                    <img src={Globe} alt="Globe" className="crm-4-globe" />
                    <img src={List} alt="List" className="crm-4-list" />
                  </div>
                </div>
                {}
                {}
              </div>
            </Col>
            <Col xs={12} sm={6} lg={4} xxl={5}>
              <div className="service-white-2">
                <div className="box">
                  <h3 className="mb-2 mb-md-3">{t("IT-субподряд")}</h3>
                  <p>
                    {t(
                      "Решаем задачи на субподряде для digital-агентств и IT-компаний"
                    )}
                  </p>
                </div>
                <img src="/imgs/img1.webp" alt={t("IT-субподряд")} />
              </div>
            </Col>
            <Col xs={12} lg={8} xxl={7}>
              <Row xs={1} sm={2} className="g-3 g-md-4">
                <Col>
                  <div className="service-black">
                    <div className="box">
                      <img
                        src="/imgs/abstractform.webp"
                        alt={t("Дизайн и оформление")}
                        className="img-fluid d-block ms-auto mb-4"
                      />
                      <div>
                        <h3 className="mb-2 mb-md-3">
                          {t("Дизайн и оформление")}
                        </h3>
                        <p>
                          {t(
                            "Проектируем суперудобные интерфейсы, опираясь на принципы UX/UI"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="service-folder">
                    <FolderSvg3 className={"service-folder-bg"} />
                    <div className="box">
                      <div>
                        <h3 className="mb-2 mb-md-3">{t("Продвижение")}</h3>
                        <p>
                          {t(
                            "Выполняем весь комплекс работ по развитию и продвижению вашего проекта"
                          )}
                        </p>
                      </div>
                      <ul>
                        <li>{t("SEO-оптимизация")}</li>
                        <li>{t("контекст")}</li>
                        <li>{t("реклама в социальных сетях")}</li>
                        <li>target & retargeting</li>
                      </ul>
                      <p>
                        {t(
                          "Поможем вам привлечь новых клиентов и продвинем сайт в поисковых системах"
                        )}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
      <section className="sec-home-3 mb-45">
        <Ticker reverse={true} text={t("Развивай свой бизнес")} />
        <Ticker
          reverse={false}
          className={"type-2"}
          text={t("Развивай свой бизнес")}
        />
        <Container>
          <h2 className="fw-6">{t("Проекты, которые говорят сами за себя")}</h2>
          <h4 className="fw-3">
            {t(
              "Отвечаем за результат вместе с вами. Нам важно создавать рабочие"
            )}
            <br />
            {t("решения и помогать компаниям приносить пользу.")}
          </h4>
          <Link
            to="/portfolio"
            className="btn-3 mx-auto mt-4 mt-md-5 mb-4 mb-sm-5"
          >
            <span className="me-2">{t("Посмотреть все проекты")}</span>
            <Arrow />
          </Link>
          {}
        </Container>
        <Swiper
          className="swiperProjects"
          loop={true}
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          spaceBetween={15}
          slidesPerView={"auto"}
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
            <img src="/imgs/projects/myaso.webp" alt={t("Мясо в миску")} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/moonka.webp" alt="Moonka" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/techlight.webp" alt="Techlight" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/yooapp.webp" alt="Yoo.App" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/dent.webp" alt={t("Престиж Дент")} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/otk.webp" alt={t("ОТК Сервис")} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/rowe.webp" alt="roweoil" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/parfe.webp" alt="parfe" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="swiperProjects"
          loop={true}
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          spaceBetween={15}
          slidesPerView={"auto"}
          speed={15000}
          autoplay={{
            delay: 0,
            reverseDirection: true,
          }}
          breakpoints={{
            576: {
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <img src="/imgs/projects/myaso.webp" alt={t("Мясо в миску")} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/moonka.webp" alt="Moonka" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/techlight.webp" alt="Techlight" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/yooapp.webp" alt="Yoo.App" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/dent.webp" alt={t("Престиж Дент")} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/otk.webp" alt={t("ОТК Сервис")} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/rowe.webp" alt="roweoil" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/projects/parfe.webp" alt="parfe" />
          </SwiperSlide>
        </Swiper>
      </section>
      <Container>
        <section className="sec-home-4-new mb-45">
          <div className="grid-4">
            <div className="grid-4-1">
              <h3>{t("Наш многолетний опыт для твоих смелых идей")}</h3>
            </div>
            <div className="grid-4-2">
              <ul className="photos">
                <li>
                  <img src="/imgs/img4.webp" alt="man" />
                </li>
                <li>
                  <img src="/imgs/img3.webp" alt="woman" />
                </li>
              </ul>
              <h6 className="ms-3">
                {t(
                  "Обеспечиваем стабильность разработки за счет вовлечения команды профессионалов"
                )}
              </h6>
            </div>
            <div className="grid-4-3">
              <div className="box">
                <h4 className="text-center text-lg-start">
                  {t(
                    "Используем большой стек технологий для решения клиентских задач"
                  )}
                </h4>
                <Row className="logotips" xs={2}>
                  <Col>
                    <img src="/imgs/logotips/mongo.webp" alt="mongo" />
                  </Col>
                  <Col>
                    <img src="/imgs/logotips/react.webp" alt="react" />
                  </Col>
                  <Col>
                    <img src="/imgs/logotips/ex.webp" alt="ex" />
                  </Col>
                  <Col>
                    <img src="/imgs/logotips/node.webp" alt="node" />
                  </Col>
                </Row>
              </div>
            </div>
            <div className="grid-4-4">
              <div className="box">
                <h4 className="ms-xxl-5">{t("К нам обращаются")}</h4>
                <Chart />
              </div>
            </div>
          </div>
          {}
        </section>
        {/* <section className="sec-home-5 mb-4">
          <h3>{t("Акции и спец. предложения")}</h3>
          <Swiper
            className="offersSwiper"
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={"auto"}
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
                <h4 className="fw-4">Lorem ipsum</h4>
                <h6>
                  {t(
                    "Скидка 50% на SEO и Контекст, а также стратегия за 0 рублей"
                  )}
                </h6>
                <div className="marker">
                  <Arrow />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-2">
                <h4 className="fw-4">Lorem ipsum</h4>
                <h6>
                  {t(
                    "Скидка 50% на SEO и Контекст, а также стратегия за 0 рублей"
                  )}
                </h6>
                <div className="marker">
                  <Arrow />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-3">
                <FolderSvg2 className={"card-3-bg"} />
                <h4 className="fw-4">Lorem ipsum</h4>
                <h6>
                  {t(
                    "Скидка 50% на SEO и Контекст, а также стратегия за 0 рублей"
                  )}
                </h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </section> */}
        <section className="sec-home-7 mb-45">
          <div className="text h-100">
            <h2 className="h1 text-center">
              {t("Plaix - разработка цифровых сервисов")}
            </h2>
            <button
              type="button"
              onClick={() => setShowCallback(!showCallback)}
              className="btn-1 mx-auto"
            >
              {t("Оставить заявку")}
            </button>
          </div>
        </section>
        <NewsBlock />
      </Container>
      <CallbackForm
        showCallback={showCallback}
        setShowCallback={setShowCallback}
      />
    </main>
  );
};

export default Home;
