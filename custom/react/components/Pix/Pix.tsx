import React, { FC, useState, useEffect } from "react";
import styles from "./Pix.css";
import { useProduct } from "vtex.product-context";

const Pix: FC = () => {
    const [priceDiscount, setPriceDiscount] = useState<number>();
    const productContextValue = useProduct();
    console.log("Contexto: ", productContextValue);

    useEffect(() => {
        const valuePixDiscont = parseFloat(
            (
                productContextValue.product.priceRange.sellingPrice.lowPrice *
                0.9
            ).toFixed(2)
        );
        setPriceDiscount(valuePixDiscont);
    }, [productContextValue]);

    return (
        <div className={styles["pixDiscount__container-wrapper"]}>
            <div className={styles["pixDiscount__container-text"]}>
                <span className={styles["pixDiscount__total"]}>
                    R$ {priceDiscount}
                </span>
                <span className={styles["pixDiscount__percent"]}>
                    10% de desconto
                </span>
            </div>
        </div>
    );
};

export default Pix;
