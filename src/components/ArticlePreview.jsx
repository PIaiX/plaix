import React from 'react';
import { HiOutlineEye, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi2";
import FolderSvg from './svg/FolderSvg';

const ArticlePreview = () => {
  return (
    <article className='preview'>
        <FolderSvg className={'preview-bg'}/>
        <img src="imgs/img1.webp" alt="5 неочевидных возможностей FastAPI" />
        <div className='d-flex align-items-center mt-1'>
            <div className='d-flex align-items-center'>
            <HiOutlineClock className='fs-15 me-2'/>
            <span>2 мин</span>
            </div>
            <div className='d-flex align-items-center ms-4'>
            <HiOutlineEye className='fs-15 me-2'/>
            <span>128</span>
            </div>
            <div className='d-flex align-items-center ms-4'>
            <HiOutlineCalendar className='fs-15 me-2'/>
            <span>24.01.2023</span>
            </div>
        </div>
        <p className='text'>5 неочевидных возможностей FastAPI. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul className="markers">
            <li className='dev'>#Разработка</li>
            <li className='css'>#CSS</li>
        </ul>
    </article>
  )
}

export default ArticlePreview