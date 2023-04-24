import style from "./title.module.scss";

export default function Title({ main__title, sub__title}){
    return(
        <div className={style.title__container}>
            <h1 className={style.main__title}> { main__title } </h1>
            <p className={style.sub__title}> { sub__title } </p>
        </div>
    )
}