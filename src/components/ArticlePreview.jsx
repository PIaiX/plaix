import React from 'react'
import {Link} from 'react-router-dom'
import { FiClock, FiEye, FiCalendar } from "react-icons/fi"

const ArticlePreview = () => {
    return (
        <article className='preview'>
            <figure>
                <img src="imgs/img.jfif" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <figcaption>
                    <div>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    </div>
                    <div className="bottom">
                        <Link to='/' className='btn-4'>Читать далее</Link>
                        <ul>
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
                    </div>
                </figcaption>
            </figure>
            <ul className="tags">
                <li>#Разработка</li>
                <li>#CSS</li>
            </ul>
        </article>
    );
};

export default ArticlePreview;