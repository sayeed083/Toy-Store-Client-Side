import { useEffect } from "react"




const useTitle = title => {
    useEffect(() => {
        document.title = `Tiny Drivers || ${title}`;
    }, [title])
};

export default useTitle;