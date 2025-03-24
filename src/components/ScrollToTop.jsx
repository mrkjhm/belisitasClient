import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const prevPath = useRef(pathname); // Store previous path

    useEffect(() => {
        // Check if the previous and current path are in the same category
        const isSameCategoryPage = prevPath.current.startsWith("/category/") && pathname.startsWith("/category/");

        if (!isSameCategoryPage) {
            window.scrollTo(0, 0);
        }

        prevPath.current = pathname; // Update previous path
    }, [pathname]);

    return null;
}
