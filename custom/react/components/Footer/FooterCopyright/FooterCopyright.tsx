import React from "react";
import styles from "./FooterCopyright.css";

export default function FooterCopyright() {
    return (
        <div className={styles["footer-copyright__wrapper"]}>
            <div className={styles["footer-copyright__container-texts"]}>
                <span className={styles["footer-copyright__rights-text"]}>
                    Copyright © 2022 M3 Academy. Todos os direitos reservados.
                </span>
                <span className={styles["footer-copyright__adress-text"]}>
                    R. Helena Coutinho, 41 - Braunes - Nova Friburgo - RJ
                </span>
                <span className={styles["footer-copyright__identifier-text"]}>
                    CNPJ: 12.345.678.0009-10
                </span>
            </div>
            <div className={styles["footer-copyright__developers-container"]}>
                <span className={styles["footer-copyright__developers-text"]}>
                    Powered by
                    <a href="https://vtex.com/">
                        <img
                            src={require("../assets/vtex-gray-icon.png")}
                            alt="Logo da VTEX"
                        />
                    </a>
                </span>
                <span className={styles["footer-copyright__developers-text"]}>
                    Developed by
                    <a href="https://m3ecommerce.com/">
                        <img
                            src={require("../assets/m3-gray-icon.png")}
                            alt="Logo da M3"
                        />
                    </a>
                </span>
            </div>
        </div>
    );
}
