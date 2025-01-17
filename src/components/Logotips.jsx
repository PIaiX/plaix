import React from "react";
import { useTranslation } from "react-i18next";

const Logotips = () => {
  const { t } = useTranslation();
  return (
    <div>
      <img src="/imgs/logotips.gif" alt={t("Web-разработка")} />
      <img src="/imgs/logotips.gif" alt={t("Web-разработка")} />
      <img src="/imgs/logotips.gif" alt={t("Web-разработка")} />
    </div>
  );
};

export default Logotips;
