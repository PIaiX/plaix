import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
    const {t} = useTranslation();
return (
        (<ul className="breadcrumbs">
            <li>
                <Link to="/">{t('Главная')}</Link>
            </li>
            <li>
                <Link to="/">{t('Внутренняя')}</Link>
            </li>
            <li>
                <Link to="/">{t('Третий уровень')}</Link>
            </li>
        </ul>)
    );
};

export default Breadcrumbs;