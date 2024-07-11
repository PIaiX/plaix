import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
    return (
        <main>
            <Container>
                <section className='page-portfolio mb-5'>
                    <h1>Plaix - разработка цифровых сервисов</h1>
                    <Row className='g-4 g-xxl-5' xs={1} lg={2}>
                        <Col>
                            <PortfolioItem
                                title="Разработка сайта для клиники стоматологии Престиж Дент"
                                imgLink="/imgs/projects/dent.webp"
                                tagsArr={["Интернет - магазины"]}
                                itemStyle="black"
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title="Разработка интернет-магазина для магазина Moonka"
                                imgLink="/imgs/projects/moonka.webp"
                                tagsArr={["Интернет - магазины"]}
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title="Разработка интернет-магазина и приложения для магазина Мясо в миску"
                                imgLink="/imgs/projects/myaso.webp"
                                tagsArr={["Интернет - магазины", "Мобильные приложения"]}
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title="Разработка интернет-магазина для ОТК Сервис"
                                imgLink="/imgs/projects/otk.webp"
                                tagsArr={["Интернет - магазины"]}
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title="Разработка интернет-магазина для Parfe"
                                imgLink="/imgs/projects/parfe.webp"
                                tagsArr={["Интернет - магазины"]}
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title="Разработка интернет-магазина для RoweOil"
                                imgLink="/imgs/projects/rowe.webp"
                                tagsArr={["Интернет - магазины"]}
                                itemStyle="black"
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title="Разработка интернет-магазина для Techlight"
                                imgLink="/imgs/projects/techlight.webp"
                                tagsArr={["Интернет - магазины"]}
                                itemStyle="black"
                            />
                        </Col>
                        <Col>
                            <PortfolioItem
                                title="Собственная разработка для кафе, пиццерий и суши-баров"
                                imgLink="/imgs/projects/yooapp.webp"
                                tagsArr={["Интернет - магазины", "Мобильные приложения"]}
                            />
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Portfolio