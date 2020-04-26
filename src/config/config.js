import React from 'react';
import algebraCheckOptions from './algebraCheck.js';

const ThemeContext = React.createContext(0);
const siteVersion = 1.0;
const logData = false;
const debug = true;
const useBottomOutHints = false;
const dynamicText = {
    "%CAR%": "Tesla car"
};
const cookieID = "openITS-id";

export {ThemeContext, 
    algebraCheckOptions,
    siteVersion,
    logData,
    dynamicText,
    cookieID,
    debug,
    useBottomOutHints
};