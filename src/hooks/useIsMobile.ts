import { useState, useEffect } from "react";

 const useIsMobile = (breakpoint:number = 768) => {
    const checkMobile = () => typeof window !== "undefined" && window.innerWidth < breakpoint;
    const [isMobile, setIsMobile] = useState<boolean>(checkMobile());

    useEffect(() => {
        const handleResize = () => setIsMobile(checkMobile());

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [breakpoint]);

    return isMobile;
};

export default useIsMobile