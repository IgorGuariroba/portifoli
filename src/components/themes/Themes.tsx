import {
    StyledSwitcher,
    StyledSwitcherClose,
    StyledSwitcherItems,
    StyledSwitcherTitle,
    StyledSwitcherToggler,
    ThemeToggler,
    StyledButton
} from "./Themes.styled.ts";
import {FaCog} from "react-icons/fa";
import {BsMoon, BsSun} from "react-icons/bs";
import {themes} from "../../Data.tsx";
import {ThemesItem} from "../themesItem/ThemesItem.tsx";
import {useEffect, useState} from "react";
import {blackTheme} from "../../styles/themes/blackTheme.ts";
import {lightTheme} from "../../styles/themes/lightTheme.ts";
import Flag from 'react-flagkit';
interface ThemesProps {
    setUpdatedTheme: (theme: typeof blackTheme) => void;
    setUpdatedLanguage: (language: string) => void;
}



const getStorageColor = () => {
    let color = 'hsl(271, 76%, 53%)';
    const storedColor = localStorage.getItem('color');

    if (storedColor) {
        color = storedColor;
    }
    return color;
}

const getTheme = () => {
    let theme = blackTheme;
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        theme = JSON.parse(storedTheme);
    }
    return theme;
}

const getLanguage = () => {
    let language = 'en';
    const storedLanguage = localStorage.getItem('language');

    if (storedLanguage) {
        language = storedLanguage;
    }
    return language;
}

export function Themes({setUpdatedTheme, setUpdatedLanguage}: ThemesProps) {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState(getTheme());
    const [toogleTheme, setToogleTheme] = useState(false);
    const [activeFlag, setActiveFlag] = useState(getLanguage());


    const handleClick = () => {
        setShowSwitcher(!showSwitcher);
    };

    const changeColor = (color: string) => {
        setColor(color);
    };

    const toggleTheme = () => {
        setToogleTheme(!toogleTheme);
        if (theme === blackTheme) {
            setTheme(lightTheme);
            return;
        }
        setTheme(blackTheme);
    }

    const toggleActiveFlag = () => {
        setActiveFlag(activeFlag === 'en' ? 'ptBR' : 'en');
    }

    useEffect(() => {
        const newTheme = {
            ...theme,
            firstColor: color
        };
        localStorage.setItem('color', color);
        setUpdatedTheme(newTheme);
    }, [color]);

    useEffect(() => {
        const newTheme = {
            ...theme,
            firstColor: color
        };
        localStorage.setItem('theme', JSON.stringify(newTheme));
        setUpdatedTheme(newTheme);
    }, [theme]);


    useEffect(() => {
        localStorage.setItem('language', activeFlag);
        setUpdatedLanguage(activeFlag)
    }, [activeFlag]);



    return (<>
        <StyledSwitcher showSwitcher={showSwitcher}>
            <StyledSwitcherToggler showSwitcher={showSwitcher} onClick={handleClick}>
                <FaCog/>
            </StyledSwitcherToggler>

            <ThemeToggler showSwitcher={showSwitcher} onClick={toggleTheme}>
                {toogleTheme ? <BsSun/> : <BsMoon/>}
            </ThemeToggler>

            <StyledButton showSwitcher={showSwitcher} onClick={toggleActiveFlag}>
                {activeFlag === 'en' ? <Flag country="US"/> : <Flag country="BR"/>}
            </StyledButton>

            <StyledSwitcherTitle>Style Switcher</StyledSwitcherTitle>

            <StyledSwitcherItems>
                {
                    themes.map((theme, index) => {
                        return <ThemesItem key={index} {...theme} changeColor={changeColor}/>;
                    })
                }
            </StyledSwitcherItems>

            <StyledSwitcherClose onClick={handleClick}>&times;</StyledSwitcherClose>
        </StyledSwitcher>
    </>);
}