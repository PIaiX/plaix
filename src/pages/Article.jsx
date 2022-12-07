import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ArticlePreviewMini from '../components/ArticlePreviewMini'
import Breadcrumbs from '../components/Breadcrumbs'

const Article = () => {
    return (
        <main>
            <section className='sec-home-9 pt-4 pt-sm-5 mb-8'>
                <Container className='custom-container'>
                    <Breadcrumbs />
                    <Row className='flex-lg-row-reverse gx-4 gx-xl-5'>
                        <Col lg={4} className="d-none d-lg-block">
                            <div>
                                <h3 className='text-start mb-4'>Популярное</h3>
                                <ArticlePreviewMini/>
                                <ArticlePreviewMini/>
                                <ArticlePreviewMini/>
                                <ArticlePreviewMini/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <h1 className='inner'>Lorem ispum Dolor sSit amet, consectetur</h1>
                            <img src="imgs/img.jpg" alt="Lorem ispum Dolor" className='img'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, ac laoreet turpis ligula. Phasellus faucibus vulputate ultrices feugiat pellentesque fringilla urna. Faucibus amet viverra mattis amet, odio tellus arcu, id ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, ac laoreet turpis ligula. Phasellus faucibus vulputate ultrices feugiat pellentesque fringilla urna.</p>
                            <p>Faucibus amet viverra mattis amet, odio tellus arcu, id ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, ac laoreet turpis ligula. Phasellus faucibus vulputate ultrices feugiat pellentesque fringilla urna. Faucibus amet viverra mattis amet, odio tellus arcu, id ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, ac laoreet turpis ligula. Phasellus faucibus vulputate ultrices feugiat pellentesque fringilla urna. Faucibus amet viverra mattis amet, odio tellus arcu, id ultrices.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, ac laoreet turpis ligula. Phasellus faucibus vulputate ultrices feugiat pellentesque fringilla urna. Faucibus amet viverra mattis amet, odio tellus arcu, id ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, ac laoreet turpis ligula. Phasellus faucibus vulputate ultrices feugiat pellentesque fringilla urna.</p>
                            <p>Faucibus amet viverra mattis amet, odio tellus arcu, id ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, ac laoreet turpis ligula. Phasellus faucibus vulputate ultrices feugiat pellentesque fringilla urna. Faucibus amet viverra mattis amet, odio tellus arcu, id ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, ac laoreet turpis ligula. Phasellus faucibus vulputate ultrices feugiat pellentesque fringilla urna. Faucibus amet viverra mattis amet, odio tellus arcu, id ultrices.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default Article;