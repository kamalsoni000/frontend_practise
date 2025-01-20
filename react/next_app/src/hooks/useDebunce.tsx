import { useEffect, useState } from "react"

export const useDebounce = ( text:string, delay:number )=> {
    const [debounceText, setDebouncetext] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncetext(text);
        }, delay);

        return () => {
            clearTimeout(timerId);

        }

    }, [text, delay])

    return {
        text: debounceText
    }

}
