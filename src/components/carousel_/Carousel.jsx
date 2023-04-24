import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import style from "./swiper.module.scss";
export default function Carousel(){
    return(
        <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            pagination={{
                clickable: true,
                bulletActiveClass: style['active-bullet'],
            }}
            className={style.swiper}
            
        >
            <SwiperSlide>
                <div className={style['swiper-slide']}>
                    <img src="./src/assets/banner 2.png" alt="first__banner"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style['swiper-slide']}>
                    <img src="./src/assets/yyys.png" alt="second__banner"/>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className={style['swiper-slide']} >
                    <img src="./src/assets/banner__03.png" alt="second__banner"/>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}