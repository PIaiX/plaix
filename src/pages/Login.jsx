import { useTranslation } from "react-i18next";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GoVerified, GoStop } from "react-icons/go";
import { NotificationManager } from "react-notifications";
import { useTranslation } from "react-i18next";

const Login = () => {
    const {
        t
    } = useTranslation();

    const login = () => {
        NotificationManager.error(t('Неправильный пароль или логин'));
    };

    const {t} = useTranslation();
return (
        (<main>
            <Container>
                <section className="login-page mb-5">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={9} md={7} lg={6} xl={5} xxl={4}>
                            <form action="">
                                <img src="/imgs/login.webp" alt="login" />
                                <h1 className="h2 text-center fw-6">{t('Вход в личный кабинет')}</h1>
                                <p className="faded mb-4">{t('Авторизация доступна только для действующих клиентов Plaix')}</p>
                                <div className="labeled-input mb-3">
                                    <label>
                                        <span>Email</span>
                                    </label>
                                    <input type="text" placeholder="user@mail.com" />
                                </div>
                                <div className="labeled-input mb-3">
                                    <label>
                                        <span>{t('Пароль')}</span>
                                    </label>
                                    <input type="password" placeholder={t('Введите пароль')} />
                                </div>
                                <button
                                    type="button"
                                    className="btn-2"
                                    onClick={e => {
                                        login();
                                    }}>{t('Войти')}</button>
                            </form>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>)
    );
};

export default Login;