import React from 'react';
import Container from 'react-bootstrap/Container';
import ContactsPhone from '../components/svg/ContactsPhone';
import ContactsTelegram from '../components/svg/ContactsTelegram';
import ContactsVK from '../components/svg/ContactsVK';
import Arrow from '../components/svg/Arrow';

const Contacts = () => {
  return (
    <main>
        <section className="sec-contacts pt-4 mb-5">
            <Container>
                <div className="contacts-grid">
                    <div className='img'>
                        <img src="imgs/img10.webp" alt="plaix" className='imgLarge' />
                        <button type='button' className='btn-3'>Заказать звонок</button>
                    </div>
                    <a href="tel:+79172555060" className='info1'>
                        <ContactsPhone className="icon"/>
                        <div className='d-none d-sm-block'>+7 (917) 255-50-60</div>
                        <div className='d-sm-none flex-1 text-center'>Позвонить</div>
                    </a>
                    <a href="" className='info2'>
                        <ContactsTelegram className="icon"/>
                        <div className='d-none d-sm-block'>@ app_plaix</div>
                        <div className='d-sm-none'>Написать в Telegram</div>
                    </a>
                    <a href="vk.com/plaix" className='info3'>
                        <ContactsVK className="icon"/>
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <span className='d-none d-sm-inline'>vk.com/plaix</span>
                            <span className='text-center flex-1 d-sm-none'>Перейти в VK</span>
                            <Arrow className="arrow"/>
                        </div>
                    </a>
                </div>
            </Container>
        </section>
    </main>
  );
};

export default Contacts;