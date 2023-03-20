import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Arrow from './svg/Arrow';
import { CiRead, CiClock2, CiCalendar } from "react-icons/ci";
import useIsMobile from '../hooks/isMobile';

const NewsBlock = () => {
  const {mobile} = useIsMobile('991px');
  const [activeNews, setActiveNews] = useState(0);

  return (
    <section className='sec-home-6 px-xxl-5 mb-45'>
      <Row className='gx-xxl-5 mb-5'>
        <Col xs={12} lg={6} xxl={7}>
          <h2>Новости</h2>
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
          <Link to='/' className='btn-3'>Перейти в блог</Link>
        </Col>
        {
          (!mobile) &&
          <Col lg={6} xxl={5}>
            {
              (activeNews === 2)
              ? <article className='preview'>
                <img src="imgs/img1.png" alt="5 неочевидных возможностей FastAPI" />
                <div className='d-gray d-flex align-items-center mt-2'>
                  <div className='d-flex align-items-center'>
                    <CiClock2/>
                    <span>2 мин</span>
                  </div>
                  <div className='d-flex align-items-center ms-4'>
                    <CiRead/>
                    <span>128</span>
                  </div>
                  <div className='d-flex align-items-center ms-4'>
                    <CiCalendar/>
                    <span>24.01.2023</span>
                  </div>
                </div>
                <p className='text'>5 неочевидных возможностей FastAPI. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul className="markers">
                  <li>#Разработка</li>
                  <li>#CSS</li>
                </ul>
                <div className="pillow">
                  <div className="top"></div>
                  <div className="bottom"></div>
                </div>
              </article>
              : (activeNews === 1) 
              ? <article className='preview'>
                <img src="imgs/img1.png" alt="Процесс развития сотрудников – системный путь к совершенству." />
                <div className='d-gray d-flex align-items-center mt-2'>
                  <div className='d-flex align-items-center'>
                    <CiClock2/>
                    <span>2 мин</span>
                  </div>
                  <div className='d-flex align-items-center ms-4'>
                    <CiRead/>
                    <span>128</span>
                  </div>
                  <div className='d-flex align-items-center ms-4'>
                    <CiCalendar/>
                    <span>24.01.2023</span>
                  </div>
                </div>
                <p className='text'>Процесс развития сотрудников – системный путь к совершенству. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul className="markers">
                  <li>#Разработка</li>
                  <li>#CSS</li>
                </ul>
                <div className="pillow">
                  <div className="top"></div>
                  <div className="bottom"></div>
                </div>
              </article>
              : <article className='preview'>
                <img src="imgs/img2.jpg" alt="GitHub сокращает 10% штата" />
                <ul className='info mt-2'>
                  <li>
                    <CiClock2/>
                    <span>2 мин</span>
                  </li>
                  <li>
                    <CiRead/>
                    <span>128</span>
                  </li>
                  <li>
                    <CiCalendar/>
                    <span>12.01.2023</span>
                  </li>
                </ul>
                <p className='text'>Гендиректор GitHub Томас Домке сообщил сотрудникам, что компания сокращает 10% штата, закрывает все офисы, переходит полностью на удалёнку и предпримет значительные меры...</p>
                <ul className="markers">
                  <li>#Разработка</li>
                  <li>#CSS</li>
                </ul>
                <div className="pillow">
                  <div className="top"></div>
                  <div className="bottom"></div>
                </div>
              </article>
            }
          </Col>
        }
      </Row>
    </section>
  );
};

export default NewsBlock;