import style from "./community.module.scss";

export default function Community(){
    return(
        <div className={style.community__container}>
            <div>
                <div className={style.community__img__container}>
                    <img src="./src/assets/community.png" alt=""/>
                </div>
                <div className={style.community__main__container}>
                    <div className={style.community__header}>
                        <h1>welcome to our family</h1>
                        <p>In order to keep in touch with us and receive our news. Subscribe in our news letter :</p>
                    </div>
                    <form className={style.community__form}>
                        <div>
                            <input type="text" placeholder="insert your e-mail address"/>
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                          clipRule="evenodd"/>
                                </svg>

                            </button>
                        </div>
                        <div>
                            <input type="text" placeholder="insert your phone number"/>
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                          clipRule="evenodd"/>
                                </svg>

                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}