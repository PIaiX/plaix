import React, { useState, useRef } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useTranslation } from "react-i18next";

const langsArr = [{
    title: "Ru",
    state: true
}, {
    title: "En",
    state: false
}];

const LanguageSwitcher = () => {
    const [lang, setLang] = useState(langsArr);
    const [showSwitcher, setShowSwitcher] = useState(false);
    const ref = useRef();

    const {
        i18n
    } = useTranslation();

    const handleClick = elTitle => {
        i18n.changeLanguage(elTitle);

        setLang(lang.map(item => {
            if (item.title === elTitle) {
                return {
                    ...item,
                    state: true
                };
            } else {
                return {
                    ...item,
                    state: false
                };
            }
        }));

        setShowSwitcher(false);
    };

    useOnClickOutside(ref, () => setShowSwitcher(false));

    return (
        (<div
            ref={ref}
            className={showSwitcher ? "lang-switcher opened" : "lang-switcher"}>
            <button type="button" onClick={() => setShowSwitcher(!showSwitcher)}>
                <span>{lang.reduce((res, obj) => obj.state === true ? obj.title : res, "")}</span>
                {showSwitcher ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </button>
            {showSwitcher && <ul>
                {lang.filter(obj => obj.state === false).map(el => {
                    return (
                        (<li key={el.title}>
                            <button type="button" onClick={() => handleClick(el.title)}>
                                <span>{el.title}</span>
                            </button>
                        </li>)
                    );
                })}
            </ul>}
        </div>)
    );
};

export default LanguageSwitcher;