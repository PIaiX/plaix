import { useTranslation } from "react-i18next";
import React, { memo, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import Input from "../components/utils/Input";
import { useForm, useWatch } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";
import { NotificationManager } from "react-notifications";
import { createCallback } from "../services/callback";

const CallbackForm = memo(({ showCallback, setShowCallback }) => {
  const { t } = useTranslation();
  const {
    control,
    setValue,
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onSubmit",
  });

  const data = useWatch({
    control,
  });
  const onCallback = useCallback((data) => {
    if (!data.name) {
      return NotificationManager.error(t("Заполните город"));
    }

    if (!data.phone) {
      return NotificationManager.error(t("Заполните номер телефона"));
    }

    NotificationManager.success(t("Данные успешно отправлены"));
    setShowCallback(false);
    createCallback(data).then(() => reset());
  }, []);

  return (
    <Modal
      size="lg"
      show={showCallback}
      onHide={() => setShowCallback(!showCallback)}
      centered
      scrollable
    >
      <button
        type="button"
        className="modal-close"
        onClick={() => setShowCallback(!showCallback)}
      >
        <IoCloseOutline />
      </button>
      <Modal.Body>
        <h4>
          {t("Оставьте заявку и мы перезвоним через 15 минут или раньше.")}
        </h4>
        <form action="" className="callback">
          <Input
            type="text"
            placeholder={t("Имя")}
            value={data?.name}
            onChange={(e) => setValue("name", e)}
          />
          <Input
            type="tel"
            defaultValue={data?.phone}
            placeholder="+7(999)999-99-99"
            mask={"+7(999)999-99-99"}
            onChange={(e) => setValue("phone", e)}
          />
          <button
            type="submit"
            className="btn-2"
            onClick={handleSubmit(onCallback)}
          >
            {t("Отправить")}
          </button>
        </form>
        <p className="fs-08">
          {t(
            "Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных данных и соглашаетесь с Политикой конфиденциальности"
          )}
        </p>
      </Modal.Body>
    </Modal>
  );
});

export default CallbackForm;
