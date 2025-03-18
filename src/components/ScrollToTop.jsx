import { useEffect } from "react";  // Import useEffect hook to handle side effects
import { useLocation } from "react-router-dom"; // Import useLocation to get the current page path

export default function ScrollToTop() {
    // Get the current URL path from React Router
    const { pathname } = useLocation();

    useEffect(() => {
        // Whenever the pathname changes (user navigates to a new page), scroll to the top
        window.scrollTo(0, 0);

        // Optional: Log the new page path for debugging purposes
        // console.log(`Navigated to: ${pathname}`);

    }, [pathname]); // Effect runs every time 'pathname' updates (whenever a new page is visited)

    // This component does not return any visible UI; it's just for functionality
    return null;
}
