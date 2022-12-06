import React from 'react'
import {Link} from 'react-router-dom'
import { FiClock, FiEye, FiCalendar } from "react-icons/fi"

const ArticlePreviewMini = () => {
    return (
        <article className='preview-mini'>
            <ul className="tags">
                <li>#Разработка</li>
                <li>#CSS</li>
            </ul>
            <h5><Link to='/blog/article'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link></h5>
            <ul className='info'>
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
        </article>
    );
};

export default ArticlePreviewMini;