import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/themes/default.ts";
import {GlobalStyle} from "./styles/global.ts";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router.tsx";
import {Themes} from "./components/themes/Themes.tsx";
import {useState} from "react";
import './i18n/i18n.ts'

export function App() {
    const [updatedTheme, setUpdatedTheme] = useState(defaultTheme);
    return (
        <ThemeProvider theme={updatedTheme}>
            <Themes setUpdatedTheme={setUpdatedTheme}/>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
            <GlobalStyle/>
        </ThemeProvider>
    );
}