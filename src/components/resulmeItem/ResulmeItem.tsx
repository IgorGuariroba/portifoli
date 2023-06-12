import {ResulmeDescription, ResulmeIcon, ResulmeItemStyled, ResulmeSubTitle} from "./ResulmeItem.styled.ts";
import parse from "html-react-parser";
import {ReactNode} from "react";


type ResulmeItemProps = {
    icon?: ReactNode;
    title?: string;
    desc?: string;
};

export function ResulmeItem({icon, title = '', desc = ''}: ResulmeItemProps) {
    return (
        <ResulmeItemStyled>
            <ResulmeIcon>{icon}</ResulmeIcon>
            <ResulmeSubTitle>{parse(title)}</ResulmeSubTitle>
            <ResulmeDescription>{desc}</ResulmeDescription>
        </ResulmeItemStyled>
    );
}