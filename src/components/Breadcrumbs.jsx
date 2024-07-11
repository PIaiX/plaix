import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
    return (
        (<ul className="breadcrumbs">
            <li>
                <Link to="/">Главная</Link>
            </li>
            <li>
                <Link to="/">Внутренняя</Link>
            </li>
            <li>
                <Link to="/">Третий уровень</Link>
            </li>
        </ul>)
    );
};

export default Breadcrumbs;