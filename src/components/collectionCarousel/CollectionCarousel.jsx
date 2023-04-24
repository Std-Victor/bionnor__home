import React, {useRef, useState} from "react";
import {useSwipeable} from "react-swipeable";

import style from "./collectionCarousel.module.scss";
import {useWindowsResize} from "../../customHooks/useWindowsResize.js";


export const CollectionItem = ({ img, title, hart, review, price}) => <div className={style.collectionCarousel__item}>
    <div className={style.container}>
        <div className={style.collection__product__img}>
            <img src={img} alt=""/>
        </div>
        <div className={style.collection__product__details}>
            <h1>{title}</h1>
            <div>
                <div>
                    {[...Array(5).keys()].map(item => (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  key={item} style={{ color: hart > item ? "#4B614A" : "" }}>
                            <path
                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
                        </svg>
                    ))}
                </div>
                <span>{review} Review(s)</span>
            </div>
            <p>${price}</p>
        </div>
        <div className={style.collection__product__action}>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"/>
                </svg>
                <span>Add to cart</span>
            </button>
            <button className={style.hart__icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
                </svg>
            </button>

            <button className={style.reload__icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                          clipRule="evenodd"/>
                </svg>
            </button>
        </div>
        <span className={style.collection__product__new}>new</span>
    </div>
</div>


export default function CollectionCarousel({children}){
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowsResize();

    console.log(windowWidth)
    const updateIndex = newIndex => {
        if( (newIndex < 0) || (newIndex >= React.Children.count(children)-3) ) return;
        setActiveIndex(newIndex);
    }

    const handlers = useSwipeable({
        onSwipedLeft : () => updateIndex(activeIndex + 1),
        onSwipedRight : () => updateIndex(activeIndex - 1)
    })

    return(
        <div
            className={style.collectionCarousel}
            {...handlers}
        >
            <div
                className={style.inner}
                style={{ transform: `translateX(-${ activeIndex * (28+ ((windowWidth > 790 && windowWidth <= 1200) ? 7.8 : 4.6))}rem)` }}
            >
                { React.Children.map(children, (child, index)=> React.cloneElement(child)) }
            </div>
            <div className={style.btn__action}>
                <button onClick={() => updateIndex(activeIndex - 1)} value={'prev'}  disabled={ activeIndex <= 0} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                              clipRule="evenodd"/>
                    </svg>
                </button>
                <button onClick={() => updateIndex(activeIndex + 1)} value={"next"} disabled={ activeIndex === (React.Children.count(children) - 4) }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                        <path fillRule="evenodd"
                              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                              clipRule="evenodd"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}