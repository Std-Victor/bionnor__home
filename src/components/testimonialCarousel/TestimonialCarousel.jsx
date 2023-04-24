import React, {useEffect, useState} from "react";

import style from "./testimonialCarousel.module.scss";
import {useSwipeable} from "react-swipeable";
import {useWindowsResize} from "../../customHooks/useWindowsResize.js";

export const TestimonialItem = ({user_img, user_name, user_location, review, star, content}) => <div className={style.testimonial__item}>
    <p>{ content }</p>
    <div className={style.testimonial__user}>
        <div>
            <div className={style.user__img__container}>
                <img src={user_img} alt=""/>
            </div>
            <div className={style.user__info__container}>
                <p>{user_name}</p>
                <p>{user_location}</p>
            </div>
        </div>
        <div className={style.user__review}>
            <div>
                { [...Array(5).keys()].map(item => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  key={item} style={{ color: star > item ? "#CD9912" : "" }}>
                        <path fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"/>
                    </svg>
                ) }
            </div>
            <p>{review}</p>
        </div>
    </div>
</div>

export default function TestimonialCarousel({children}) {
    const [activeIndex, setActiveIndex] = useState(Math.floor((React.Children.count(children)-3)/2));
    const [paused, setPaused] = useState(false);
    const windowWidth = useWindowsResize();
    const updateIndex = newIndex => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children) - (windowWidth < 1025 ? 1 : (windowWidth < 1201 ? 2 : 3)) // 1 2 3
        }else if(newIndex >= React.Children.count(children)- (windowWidth < 1025 ? 0 : (windowWidth < 1201 ? 1 : 2))) {  //0 1 2
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    const handlers = useSwipeable({
        onSwipedLeft : () => updateIndex(activeIndex + 1),
        onSwipedRight : () => updateIndex(activeIndex - 1)
    })

    useEffect(()=>{
        const interval = setInterval(()=> {
            if(!paused){
                updateIndex(activeIndex + 1)
            }
        }, 5000)
        return () => {
            if (interval){
                clearInterval(interval)
            }
        }
    })

    return(
        <div
            className={style.testimonial__carousel}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            {...handlers}
        >
            <div
                className={style.inner}
                style={{ transform: `translateX(-${activeIndex * (38+6)}rem)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className={style.indicators}>
                <button onClick={() => updateIndex(activeIndex - 1)} value={"prev"} >prev</button>
                <button onClick={() => updateIndex(activeIndex + 1)} value={"next"} >next</button>
                <div className={style.dotes}>
                    {React.Children.map(children, (child, index) => {
                       if( index <= React.Children.count(children)-(windowWidth < 1025 ? 1 : (windowWidth < 1201 ? 2 : 3)) ){
                           return (
                               <span
                                   className={` ${index === activeIndex ? style.active : ""}`}
                                   onClick={() => updateIndex(index)}
                                   key={index}
                               >
                        </span>
                           );
                       }
                    })}
                </div>
            </div>
        </div>
    )
}