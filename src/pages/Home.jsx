import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

            <section className='sec-home-2 mb-5'>
                <Container>
                    <Row lg={3} className='gx-5'>
                        <Col>
                            <div className="box p-4">
                                <h3>Огромное портфолио</h3>
                                <hr />
                                <p className="fs-09">Более сотни реализованных проектов из совершенно разных сфер</p>
                                <button type='button' className='btn-2 fs-12'>Портфолио</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="box p-4">
                                <h3>Огромное портфолио</h3>
                                <hr />
                                <p className="fs-09">Более сотни реализованных проектов из совершенно разных сфер</p>
                                <button type='button' className='btn-2 fs-12'>Портфолио</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="box p-4">
                                <h3>Огромное портфолио</h3>
                                <hr />
                                <p className="fs-09">Более сотни реализованных проектов из совершенно разных сфер</p>
                                <button type='button' className='btn-2 fs-12'>Портфолио</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default Home;