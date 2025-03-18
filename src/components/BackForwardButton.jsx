import React, { useEffect } from 'react'
import {useLocation} from "react-router-dom";

const BackForwardButton = () => {
    const location = useLocation();

    useEffect(() => {
    }, [location]);

    return null; // Walang UI, watcher lang ito.
}
export default BackForwardButton
