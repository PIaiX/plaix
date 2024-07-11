import { useTranslation } from "react-i18next";
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
const {t} = useTranslation();
    return (
        <main>
            <Container>
                <section className='page-portfolio mb-5'>
                    <h1>{t('Plaix - разработка цифровых сервисов')}</h1>
                    <Row className='g-4 g-xxl-5' xs={1} lg={2}>
                        <Col>
                            <PortfolioItem
                                title={t('Разработка сайта для клиники стоматологии Престиж Дент')}
                                imgLink="/imgs/projects/dent.webp"
                                tagsArr={[t('Интернет - магазины')]}
                                itemStyle="black"
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title={t('Разработка интернет-магазина для магазина Moonka')}
                                imgLink="/imgs/projects/moonka.webp"
                                tagsArr={[t('Интернет - магазины')]}
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title={t('Разработка интернет-магазина и приложения для магазина Мясо в миску')}
                                imgLink="/imgs/projects/myaso.webp"
                                tagsArr={[t('Интернет - магазины'), t('Мобильные приложения')]}
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title={t('Разработка интернет-магазина для ОТК Сервис')}
                                imgLink="/imgs/projects/otk.webp"
                                tagsArr={[t('Интернет - магазины')]}
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title={t('Разработка интернет-магазина для Parfe')}
                                imgLink="/imgs/projects/parfe.webp"
                                tagsArr={[t('Интернет - магазины')]}
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title={t('Разработка интернет-магазина для RoweOil')}
                                imgLink="/imgs/projects/rowe.webp"
                                tagsArr={[t('Интернет - магазины')]}
                                itemStyle="black"
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title={t('Разработка интернет-магазина для Techlight')}
                                imgLink="/imgs/projects/techlight.webp"
                                tagsArr={[t('Интернет - магазины')]}
                                itemStyle="black"
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title={t('Собственная разработка для кафе, пиццерий и суши-баров')}
                                imgLink="/imgs/projects/yooapp.webp"
                                tagsArr={[t('Интернет - магазины'), t('Мобильные приложения')]}
                            />
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Portfolio