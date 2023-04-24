import React, {useEffect, useState} from "react";
import {useSwipeable} from "react-swipeable";

import style from "./carousel.module.scss";

export const CarouselItem = ({ children, width}) => {
    return (
        <div className={ style.carousel__item } style={{ width : width }}>
            { children }
        </div>
    )
};
export default function Carousel({ children }){
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const updateIndex = newIndex => {
        if(newIndex < 0) {
            newIndex = React.Children.count(children) - 1
        }else if(newIndex >= React.Children.count(children)) {
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
    return (
      <div
        className={style.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        {...handlers}
      >
        <div
          className={style.inner}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
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
                    return (
                        <span
                            className={` ${index === activeIndex ? style.active : ""}`}
                            onClick={() => updateIndex(index)}
                        >
                        </span>
                    );
                })}
            </div>
        </div>
      </div>
    );
}