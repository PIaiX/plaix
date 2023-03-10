import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Container className='custom-container'>
            <footer>
                <span>Plaix {currentYear}</span>
                <Link to='/'>Пользовательское соглашние</Link>
                <Link to='/'>Политика конфиденциальности</Link>
            </footer>
        </Container>
    );
};

export default Footer;