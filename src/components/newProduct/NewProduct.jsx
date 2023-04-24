import style from "./newProduct.module.scss";

export default function NewProduct({img, price}){
    return(
        <div className={style.product__container}>
            <div className={style.product__img}>
                <img src={img} alt=""/>
            </div>
            <button className={style.btn__action}>Shop Now</button>
            <span className={style.price}>${price}</span>
        </div>
    )
}