import React from 'react'
import {Link} from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi"

const Plus = (props) => {
    return (
        <div className="box p-4">
            <div>
                <img src={props.imgUrl} alt={props.title} />
                <h3>{props.title}</h3>
                <hr />
                <p className="fs-09">{props.text}</p>
            </div>
            <Link to='/' className='btn-2 fs-12'>
                <span>Портфолио</span>
                <FiChevronRight/>
            </Link>
        </div>
);
};

export default Plus;