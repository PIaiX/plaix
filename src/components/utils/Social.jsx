import React from 'react'
import instagram from '../../assets/imgs/instagram.png'
import vk from '../../assets/imgs/vk.png'
import tg from '../../assets/imgs/tg.png'
import wapp from '../../assets/imgs/wapp.png'
import fb from '../../assets/imgs/fb.png'
import online from '../../assets/imgs/Online.svg'

const Social = () => {
    return (
        <ul className='social'>
            <li>
                <a href="/">
                    <img src={instagram} alt="instagram" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={vk} alt="vk" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={tg} alt="tg" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={wapp} alt="wapp" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={fb} alt="fb" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={online} alt="online" />
                </a>
            </li>
        </ul>
    );
};

export default Social;