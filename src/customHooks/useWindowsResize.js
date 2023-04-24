import {useEffect, useState} from "react";

export const useWindowsResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handler = () => setWidth(window.innerWidth)
    useEffect(()=> {
        window.addEventListener('resize', handler)
        return () => window.removeEventListener("resize", handler)
    }, [])

    return width;
}