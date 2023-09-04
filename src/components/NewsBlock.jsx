import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Arrow from './svg/Arrow';
import useIsMobile from '../hooks/isMobile';
import ArticlePreview from './ArticlePreview';

const NewsBlock = () => {
  const {mobile} = useIsMobile('991px');
  const [activeNews, setActiveNews] = useState(0);

  return (
    <section className='sec-home-6 mb-45'>
      <Row className='justify-content-between mb-5'>
        <Col xs={12} lg={6}>
          <h3>Новости</h3>
          <ul>
            <li>
              <Link to='/' className={(activeNews === 0)?'active':''} onMouseEnter={()=>setActiveNews(0)}>
                <h4>GitHub сокращает 10% штата</h4>
                <Arrow className='icon'/>
              </Link>
            </li>
            <li>
              <Link to='/' className={(activeNews === 1)?'active':''} onMouseEnter={()=>setActiveNews(1)}>
                <h4>Процесс развития сотрудников – системный путь к совершенству</h4>
                <Arrow className='icon'/>
              </Link>
            </li>
            <li>
              <Link to='/' className={(activeNews === 2)?'active':''} onMouseEnter={()=>setActiveNews(2)}>
                <h4>5 неочевидных возможностей FastAPI</h4>
                <Arrow className='icon'/>
              </Link>
            </li>
          </ul>
          <Link to='/' className='btn-3 mt-5'>Перейти в блог</Link>
        </Col>
        {
          (!mobile) &&
          <Col lg={6} xl={5}>
            {
              (activeNews === 2)
              ? <ArticlePreview />
              : (activeNews === 1) 
              ? <ArticlePreview />
              : <ArticlePreview />
            }
          </Col>
        }
      </Row>
    </section>
  );
};

export default NewsBlock;