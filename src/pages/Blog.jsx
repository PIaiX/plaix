import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArticlePreview from '../components/ArticlePreview'
import ArticlePreviewMini from '../components/ArticlePreviewMini'

const Blog = () => {
    return (
        <main>
            <section className='pt-4 pt-sm-5 sec-home-8 mb-8'>
                <Container className='custom-container'>
                    <h1 className='inner'>Блог</h1>
                    <Row className='flex-lg-row-reverse gx-4 gx-xl-5'>
                        <Col lg={4}>
                            <div className="box">
                                <h3>Теги</h3>
                                <ul className="tags">
                                    <li><button type='button'>#Разработка</button></li>
                                    <li><button type='button'>#CSS</button></li>
                                    <li><button type='button'>#React</button></li>
                                    <li><button type='button'>#Javascript</button></li>
                                    <li><button type='button'>#CMS</button></li>
                                    <li><button type='button'>#Разработка</button></li>
                                    <li><button type='button'>#CSS</button></li>
                                    <li><button type='button'>#React</button></li>
                                    <li><button type='button'>#Javascript</button></li>
                                    <li><button type='button'>#CMS</button></li>
                                    <li><button type='button'>#Разработка</button></li>
                                    <li><button type='button'>#CSS</button></li>
                                    <li><button type='button'>#React</button></li>
                                    <li><button type='button'>#Javascript</button></li>
                                    <li><button type='button'>#CMS</button></li>
                                </ul>
                            </div>
                            <div className="d-none d-lg-block mt-5">
                                <h3 className='text-start mb-4'>Популярное</h3>
                                <ArticlePreviewMini/>
                                <ArticlePreviewMini/>
                                <ArticlePreviewMini/>
                                <ArticlePreviewMini/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <h2 className='d-none d-lg-block'>Последние новости</h2>
                            <Row xs={1} sm={2} className='g-3 g-md-4 mt-4 mt-lg-5'>
                                <Col>
                                    <ArticlePreview/>
                                </Col>
                                <Col>
                                    <ArticlePreview/>
                                </Col>
                                <Col>
                                    <ArticlePreview/>
                                </Col>
                                <Col>
                                    <ArticlePreview/>
                                </Col>
                                <Col>
                                    <ArticlePreview/>
                                </Col>
                                <Col>
                                    <ArticlePreview/>
                                </Col>
                                <Col>
                                    <ArticlePreview/>
                                </Col>
                                <Col>
                                    <ArticlePreview/>
                                </Col>
                            </Row>
                            <button type='button' className='btn-1 mx-auto mt-4 mt-sm-5'>Показать ещё</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default Blog;