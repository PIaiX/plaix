import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import Ticker from '../components/Ticker'

const Home = () => {
  return (
    <main>
      <Container className='custom-container'>
        <section className='sec-home-1 mb-45'>
          <Row>
            <Col md={6}>
              <h1 className='mb-4'>Красивые сайты, которые работают</h1>
              <button type='button' className='btn-1'>Оставить заявку</button>
            </Col>
            <Col md={{span:5, offset:1}}>
              <p>На создание и запуск проекта и ещё какой то текст для описания данного блока создание и запуск проекта и ещё какой то текст для описания данного блока</p>
            </Col>
          </Row>
        </section>

        <section className='mb-45'>
          <h2 className='text-center'>Приступим к вашему <br/>проекту уже завтра</h2>
        </section>
      </Container>

      <section className='mb-45'>
        <Ticker reverse={true} text={'Развивай свой бизнес'}/> 
        <Ticker reverse={false} className={'type-2'} text={'Развивай свой бизнес'}/>
      </section>
    </main>
  );
};

export default Home;