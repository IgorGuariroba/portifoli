import {ThemesImg} from "./ThemesItem.styled.ts";

interface PropsTheme {
    color: string;
    img: string;
    changeColor: (color: string) => void;
}

export function ThemesItem({img, color, changeColor}: PropsTheme) {
    return <ThemesImg src={img} onClick={() => changeColor(color)}/>;
}