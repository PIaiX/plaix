import React from 'react'
import {Link} from 'react-router-dom'
import { FiClock, FiEye, FiCalendar } from "react-icons/fi"

const ArticlePreview = () => {
    return (
        <article className='preview'>
            <figure>
                <img src="imgs/offer-bg-5.png" alt="" />
                <figcaption>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    <Link to='/' className='btn-4 my-4'>Посмотреть</Link>
                    <ul className='bottom'>
                        <li>
                            <FiClock/>
                            <span>5 мин</span>
                        </li>
                        <li>
                            <FiEye/>
                            <span>128</span>
                        </li>
                        <li>
                            <FiCalendar/>
                            <span>12.01.2022</span>
                        </li>
                    </ul>
                </figcaption>
            </figure>
        </article>
    );
};

export default ArticlePreview;