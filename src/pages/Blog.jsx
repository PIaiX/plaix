import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jsonData from "../data/articles";
import ArticleMidi from "../components/ArticleMidi";

const Blog = () => {
  return (
    <main>
        <Container>
            <section className='page-articles mb-5'>
                <h1>Новости и статьи</h1>
                <Row className='gx-5'>
                    <Col lg={8}>
                        <ul className='page-articles-list'>
                            {
                                jsonData.map( obj => {
                                return <li key={obj.id}>
                                    <ArticleMidi data={obj} />
                                </li>
                                })
                            }
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <h5 className='mb-4'>Новости по категориям</h5>
                        <ul className="markers">
                            <li className='dev'>#Разработка</li>
                            <li className='css'>#CSS</li>
                        </ul>

                        <img src="imgs/img2.webp" alt="git" className='mt-5 img-fluid'/>
                    </Col>
                </Row>
            </section>
        </Container>
    </main>
  );
};

export default Blog;