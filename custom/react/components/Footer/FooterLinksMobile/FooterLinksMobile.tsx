import React, { useState } from "react";
import styles from "./FooterLinksMobile.css";

export default function FooterLinksMobile() {
    const [openSiteM3, setOpenSiteM3] = useState(false);
    const [openAM3Academy, setOpenAM3Academy] = useState(false);

    const handleClickSiteM3Academy = () => {
        setOpenSiteM3(!openSiteM3);
    };

    const handleClickAM3Academy = () => {
        setOpenAM3Academy(!openAM3Academy);
    };

    return (
        <section>
            <div className={styles["footer-links__container-mobile"]}>
                <div className={styles["footer-links__wrapper-mobile"]}>
                    <div className={styles["footer-links__block-mobile"]}>
                        <h4
                            className={styles["footer-links__title-mobile"]}
                            onClick={handleClickSiteM3Academy}
                        >
                            Site M3 Academy
                            <img
                                className="footer-links__cross-icon-mobile"
                                src={require("../assets/cross-icon.png")}
                                alt="Icone em formato de cruz"
                            />
                        </h4>

                        <ul
                            className={
                                openSiteM3 === false
                                    ? `${styles["close-footer"]}`
                                    : `${styles["footer-links__items-list-mobile"]}`
                            }
                        >
                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Loja Ebit Ouro
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Trocas e devoluções
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Central de atendimento
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Fale Conosco
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Imprensa
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Rastreamento
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <span
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                >
                                    CNPJ 30.901.791.0001-91
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles["footer-links__block-mobile"]}>
                        <h4
                            className={styles["footer-links__title-mobile"]}
                            onClick={handleClickAM3Academy}
                        >
                            A M3 Academy
                            <img
                                className="footer-links__cross-icon-mobile"
                                src={require("../assets/cross-icon.png")}
                                alt="Icone em formato de cruz"
                            />
                        </h4>

                        <ul
                            className={
                                openAM3Academy === false
                                    ? `${styles["close-footer"]}`
                                    : `${styles["footer-links__items-list-mobile"]}`
                            }
                        >
                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Seja um franqueado
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Quem somos
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Nossas lojas
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Responsabilidade Social
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Franquias
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Procon MG
                                </a>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <a
                                    className={
                                        styles["footer-links__link-mobile"]
                                    }
                                    href="/"
                                >
                                    Política de Privacidade
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles["footer-links__block-mobile"]}>
                        <h4 className={styles["footer-links__title-mobile"]}>
                            Novos Negócios
                        </h4>

                        <ul
                            className={
                                styles["footer-links__items-list-mobile"]
                            }
                        >
                            <li className={styles["footer-links__item-mobile"]}>
                                <button
                                    className={
                                        styles["footer-links__buttom-mobile"]
                                    }
                                >
                                    <a href="/">Seja um Franqueado</a>
                                </button>
                            </li>

                            <li className={styles["footer-links__item-mobile"]}>
                                <button
                                    className={
                                        styles["footer-links__buttom-mobile"]
                                    }
                                >
                                    <a href="/">MultiMarcas</a>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className={styles["footer-links__block-mobile"]}>
                        <h4 className={styles["footer-links__title-mobile"]}>
                            Nos siga
                        </h4>

                        <div
                            className={
                                styles[
                                    "footer-links__iconsandpayment-container-mobile"
                                ]
                            }
                        >
                            <ul
                                className={
                                    styles[
                                        "footer-links__items-list--social-networks-mobile"
                                    ]
                                }
                            >
                                <li>
                                    <a
                                        href="https://www.instagram.com/m3.ecommerce/"
                                        target="_blank"
                                        title="Instagram" rel="noreferrer"
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
                                        title="Facebook" rel="noreferrer"
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
                                        title="WhatsApp" rel="noreferrer"
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
                                        title="Pinterest" rel="noreferrer"
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
                                        title="E-mail" rel="noreferrer"
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
                                        title="Youtube" rel="noreferrer"
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
                                        title="Linkedin" rel="noreferrer"
                                    >
                                        <img
                                            src={require("../assets/linkedin-icon.png")}
                                            alt="Ícone do Linkedin"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <h4
                            className={
                                styles["footer-links__title--payments-mobile"]
                            }
                        >
                            Formas de pagamento
                        </h4>
                        <ul
                            className={
                                styles[
                                    "footer-links__items-list--payments-mobile"
                                ]
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
