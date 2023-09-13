import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/themes/default.ts";
import {GlobalStyle} from "./styles/global.ts";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router.tsx";
import {Themes} from "./components/themes/Themes.tsx";
import {useEffect, useState} from "react";
import i18n from "./i18n/i18n.ts";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-MCQ42447',
};

TagManager.initialize(tagManagerArgs);
export function App() {
    const [updatedTheme, setUpdatedTheme] = useState(defaultTheme);
    const [updatedLanguage, setUpdatedLanguage ] =  useState('en');

    useEffect(() => {
        i18n.changeLanguage(updatedLanguage).then()
    }, [updatedLanguage]);

    return (
        <ThemeProvider theme={updatedTheme}>
            <Themes setUpdatedTheme={setUpdatedTheme} setUpdatedLanguage={setUpdatedLanguage}/>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
            <GlobalStyle/>
        </ThemeProvider>
    );
}