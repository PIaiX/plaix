import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import CallbackForm from "../components/CallbackForm";
import Arrow from "../components/svg/Arrow";
import ContactsPhone from "../components/svg/ContactsPhone";
import ContactsTelegram from "../components/svg/ContactsTelegram";
import ContactsVK from "../components/svg/ContactsVK";

const Contacts = () => {
  const { t } = useTranslation();
  const [showCallback, setShowCallback] = useState(false);

  return (
    <main>
      <section className="sec-contacts pt-4 mb-5">
        <Container>
          <div className="contacts-grid">
            <div className="img">
              <img src="/imgs/img10.webp" alt="plaix" className="imgLarge" />
              <button
                type="button"
                className="btn-3"
                onClick={() => setShowCallback(!showCallback)}
              >
                {t("Заказать звонок")}
              </button>
            </div>
            <a href="tel:+79172555060" className="info1">
              <ContactsPhone className="icon" />
              <div className="d-none d-sm-block">+7(917)255-50-60</div>
              <div className="d-sm-none flex-1 text-center">
                {t("Позвонить")}
              </div>
            </a>
            <a href="https://t.me/app_plaix" className="info2" target="_blank">
              <ContactsTelegram className="icon" />
              <div className="d-none d-sm-block">@app_plaix</div>
              <div className="d-sm-none">{t("Написать в Telegram")}</div>
            </a>
            <a href="https://vk.com/plaix" className="info3" target="_blank">
              <ContactsVK className="icon" />
              <div className="w-100 d-flex justify-content-between align-items-center">
                <span className="d-none d-sm-inline">vk.com/plaix</span>
                <span className="text-center flex-1 d-sm-none">
                  {t("Перейти в VK")}
                </span>
                <Arrow className="arrow" />
              </div>
            </a>
          </div>
        </Container>
      </section>
      <CallbackForm
        showCallback={showCallback}
        setShowCallback={setShowCallback}
      />
    </main>
  );
};

export default Contacts;
