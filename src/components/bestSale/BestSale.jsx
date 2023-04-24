import style from "./bestSale.module.scss";
export default function BestSale(){
    return(
        <div className={style.wrapper}>
            {[...Array(3).keys()].map(item => (
                <div className={style.container} key={item}>
                    <div className={style.container__fill}>
                        <div className={style.product__img}>
                            <img src="./src/assets/mareron 1.png" alt=""/>
                        </div>
                        <div className={style.product__details__container}>
                            <div className={style.product__details}>
                                <h1 className={style.title}>capi-therapy</h1>
                                <p className={style.caption}>ultra nourrissant</p>
                                <p className={style.price}>120.00 mad</p>
                            </div>
                            <button className={style.button}>buy now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}