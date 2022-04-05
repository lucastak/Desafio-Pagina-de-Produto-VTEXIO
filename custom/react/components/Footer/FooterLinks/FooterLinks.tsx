import React from "react";
import styles from "./FooterLinks.css";

export default function FooterLinks() {
    return (
        <section>
            <div className={styles["footer-links__container"]}>
                <div className={styles["footer-links__wrapper"]}>
                    <div className={styles["footer-links__block"]}>
                        <h4 className={styles["footer-links__title"]}>
                            Site M3 Academy
                        </h4>

                        <ul className={styles["footer-links__items-list"]}>
                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Loja Ebit Ouro
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Trocas e devoluções
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Central de atendimento
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Fale Conosco
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Imprensa
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Rastreamento
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <span className={styles["footer-links__link"]}>
                                    CNPJ 30.901.791.0001-91
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles["footer-links__block"]}>
                        <h4 className={styles["footer-links__title"]}>
                            A M3 Academy
                        </h4>

                        <ul className={styles["footer-links__items-list"]}>
                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Seja um franqueado
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Quem somos
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Nossas lojas
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Responsabilidade Social
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Franquias
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Procon MG
                                </a>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <a
                                    className={styles["footer-links__link"]}
                                    href="/"
                                >
                                    Política de Privacidade
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles["footer-links__block"]}>
                        <h4 className={styles["footer-links__title"]}>
                            Novos Negócios
                        </h4>

                        <ul className={styles["footer-links__items-list"]}>
                            <li className={styles["footer-links__item"]}>
                                <button
                                    className={styles["footer-links__buttom"]}
                                >
                                    <a href="/">Seja um Franqueado</a>
                                </button>
                            </li>

                            <li className={styles["footer-links__item"]}>
                                <button
                                    className={styles["footer-links__buttom"]}
                                >
                                    <a href="/">MultiMarcas</a>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className={styles["footer-links__block"]}>
                        <h4 className={styles["footer-links__title"]}>
                            Nos siga
                        </h4>

                        <div
                            className={
                                styles[
                                    "footer-links__iconsandpayment-container"
                                ]
                            }
                        >
                            <ul
                                className={
                                    styles[
                                        "footer-links__items-list--social-networks"
                                    ]
                                }
                            >
                                <li>
                                    <a
                                        href="https://www.instagram.com/m3.ecommerce/"
                                        target="_blank"
                                        title="Instagram"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={require("../assets/instagram-icon.png")}
                                            alt="Ícone do Instagram"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.facebook.com/digitalm3"
                                        target="_blank"
                                        title="Facebook"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={require("../assets/facebook-icon.png")}
                                            alt="Ícone do Facebook"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://whatsa.me/5522999765626/?t=Ol%C3%A1,%20gostaria%20de%20enviar%20uma%20mensagem!"
                                        target="_blank"
                                        title="WhatsApp"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={require("../assets/whatsapp-icon.png")}
                                            alt="Ícone do WhatsApp"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://pinterest.com/"
                                        target="_blank"
                                        title="Pinterest"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={require("../assets/pinterest-icon.png")}
                                            alt="Ícone do Pinterest"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="mailto:sac@m3.com"
                                        target="_blank"
                                        title="E-mail"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={require("../assets/email-icon.png")}
                                            alt="Ícone de e-mail"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" target="_blank" title="Spotify">
                                        <img
                                            src={require("../assets/spotify-icon.png")}
                                            alt="Ícone do Spotify"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" target="_blank" title="Twitter">
                                        <img
                                            src={require("../assets/twitter-icon.png")}
                                            alt="Ícone do Twitter"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.youtube.com/channel/UCW4o86gZG_ceA8CmHltXeXA"
                                        target="_blank"
                                        title="Youtube"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={require("../assets/youtube-icon.png")}
                                            alt="Ícone do Youtube"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/m3ecommerce/"
                                        target="_blank"
                                        title="Linkedin"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={require("../assets/linkedin-icon.png")}
                                            alt="Ícone do Linkedin"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <h4 className={styles["footer-links__title--payments"]}>
                            Formas de pagamento
                        </h4>
                        <ul
                            className={
                                styles["footer-links__items-list--payments"]
                            }
                        >
                            <li>
                                <img
                                    src={require("../assets/bandeira-visa.png")}
                                    alt="Bandeira Visa"
                                />
                            </li>

                            <li>
                                <img
                                    src={require("../assets/bandeira-mastercard.png")}
                                    alt="Bandeira MasterCard"
                                />
                            </li>

                            <li>
                                <img
                                    src={require("../assets/bandeira-amex.png")}
                                    alt="Bandeira Amex"
                                />
                            </li>

                            <li>
                                <img
                                    src={require("../assets/bandeira-boleto.png")}
                                    alt="Bandeira Boleto"
                                />
                            </li>

                            <li>
                                <img
                                    src={require("../assets/bandeira-elo.png")}
                                    alt="Bandeira Elo"
                                />
                            </li>

                            <li>
                                <img
                                    src={require("../assets/bandeira-dinersclub.png")}
                                    alt="Bandeira DinersClub"
                                />
                            </li>

                            <li>
                                <img
                                    src={require("../assets/bandeira-hipercard.png")}
                                    alt="Bandeira Hipercard"
                                />
                            </li>

                            <li>
                                <img
                                    src={require("../assets/bandeira-pix.png")}
                                    alt="Bandeira Pix"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
