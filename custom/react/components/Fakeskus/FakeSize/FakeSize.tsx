import React from "react";
import styles from "./FakeSize.css";

export default function FakeSize() {
    return (
        <div className={styles["FakeSize__wrapper"]}>
            <h3 className={styles["FakeSize__title"]}>
                Escolha por <span>tamanho</span>
            </h3>
            <ul className={styles["FakeSize__list"]}>
                <li className={styles["FakeSize__item-list"]}>
                    <a
                        className={styles["FakeSize__button"]}
                        href="https://lucassantos--agenciamagma.myvtex.com/m3-academy---desafio/"
                    >
                        PEQUENA
                    </a>
                </li>
                <li className={styles["FakeSize__item-list"]}>
                    <a
                        className={styles["FakeSize__button"]}
                        href="https://lucassantos--agenciamagma.myvtex.com/m3-academy---desafio/"
                    >
                        MÉDIA
                    </a>
                </li>

                <li className={styles["FakeSize__item-list"]}>
                    <a
                        className={styles["FakeSize__button"]}
                        href="https://lucassantos--agenciamagma.myvtex.com/m3-academy---desafio/"
                    >
                        GRANDE
                    </a>
                </li>
            </ul>
        </div>
    );
}
