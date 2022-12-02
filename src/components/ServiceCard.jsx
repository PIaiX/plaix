import React from 'react'
import {Link} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'

const ServiceCard = (props) => {
    const {mobile} = useIsMobile('767px')

    return (
        <figure className='service-card'>
            <img src={props.imgUrl} alt={props.title} />
            <figcaption>
                <div>
                    <h3><Link to='/'>{props.title}</Link></h3>
                    <hr />
                    {
                        (!mobile) &&
                        <p>{props.text}</p>
                    }
                </div>
                {
                    (!mobile) &&
                    <Link to='/' className='link'>Перейти</Link>
                }
            </figcaption>
        </figure>
    );
};

export default ServiceCard;