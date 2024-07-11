import { useTranslation } from "react-i18next";
import React, {useState} from 'react';

const Logotips = () => {
  const {t} = useTranslation();
return (
    <div>
        <img src="/imgs/logotips.gif" alt={t('Web-разработка')} />
        <img src="/imgs/logotips.gif" alt={t('Web-разработка')} />
        <img src="/imgs/logotips.gif" alt={t('Web-разработка')} />
    </div>
  )
}

export default Logotips