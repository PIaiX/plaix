import { useTranslation } from "react-i18next";
import React, { useCallback, useState } from "react";
import Container from "react-bootstrap/Container";
import ContactsPhone from "../components/svg/ContactsPhone";
import ContactsTelegram from "../components/svg/ContactsTelegram";
import ContactsVK from "../components/svg/ContactsVK";
import Arrow from "../components/svg/Arrow";
import { useForm, useWatch } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { IoCloseOutline } from "react-icons/io5";
import Input from "../components/utils/Input";
import { NotificationManager } from "react-notifications";

const Contacts = () => {
const {t} = useTranslation();
    const [showCallback, setShowCallback] = useState(false);
    const handleCloseCallback = () => setShowCallback(false);
    const handleShowCallback = () => setShowCallback(true);

    const {
        control,
        setValue,
        register,

        formState: {
            errors,
            isValid
        },

        handleSubmit
    } = useForm({
        mode: "onChange",
        reValidateMode: "onSubmit"
    });

    const data = useWatch({
        control
    });

    const onCallback = useCallback(data => {
        if (!data.name) {
            return NotificationManager.error(t('Заполните имя'));
        }

        if (!data.phone) {
            return NotificationManager.error(t('Заполните номер телефона'));
        }

        NotificationManager.success(t('Данные успешно отправлены'));
        setShowCallback(false);
    }, []);

    return (
        (<main>
            <section className="sec-contacts pt-4 mb-5">
                <Container>
                    <div className="contacts-grid">
                        <div className="img">
                            <img src="/imgs/img10.webp" alt="plaix" className="imgLarge" />
                            <button type="button" className="btn-3" onClick={handleShowCallback}>{t('Заказать звонок')}</button>
                        </div>
                        <a href="tel:+79172555060" className="info1">
                            <ContactsPhone className="icon" />
                            <div className="d-none d-sm-block">+7 (917) 255-50-60</div>
                            <div className="d-sm-none flex-1 text-center">{t('Позвонить')}</div>
                        </a>
                        <a href="" className="info2">
                            <ContactsTelegram className="icon" />
                            <div className="d-none d-sm-block">@ app_plaix</div>
                            <div className="d-sm-none">{t('Написать в Telegram')}</div>
                        </a>
                        <a href="vk.com/plaix" className="info3">
                            <ContactsVK className="icon" />
                            <div className="w-100 d-flex justify-content-between align-items-center">
                                <span className="d-none d-sm-inline">vk.com/plaix</span>
                                <span className="text-center flex-1 d-sm-none">{t('Перейти в VK')}</span>
                                <Arrow className="arrow" />
                            </div>
                        </a>
                    </div>
                </Container>
            </section>
            <Modal
                size="lg"
                show={showCallback}
                onHide={handleCloseCallback}
                centered
                scrollable>
                <button type="button" className="modal-close" onClick={handleCloseCallback}>
                    <IoCloseOutline />
                </button>
                <Modal.Body>
                    <h4>{t('Оставьте заявку и мы перезвоним через 15 минут или раньше.')}</h4>
                    <form action="" className="callback">
                        <Input
                            type="text"
                            placeholder={t('Имя')}
                            value={data?.name}
                            onChange={e => setValue("name", e)} />
                        <Input
                            type="tel"
                            defaultValue={data?.phone}
                            placeholder="+7-___-___-__-__"
                            mask={"+ 7(999) 999-99-99"}
                            onChange={e => setValue("phone", e)} />
                        <button type="submit" className="btn-2" onClick={handleSubmit(onCallback)}>{t('Отправить')}</button>
                    </form>
                    <p className="fs-08">{t('Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных данных и соглашаетесь с Политикой конфиденциальности')}</p>
                </Modal.Body>
            </Modal>
        </main>)
    );
};

export default Contacts;