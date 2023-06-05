import {
    ResulmeDate,
    ResulmeDescription,
    ResulmeIcon,
    ResulmeItemStyled,
    ResulmeSubTitle
} from "./ResulmeItem.styled.ts";
import parse from "html-react-parser";
import {ReactNode} from "react";

type ResulmeItemProps = {
    icon: ReactNode;
    years?: string;
    title?: string;
    desc?: string;
};
export function ResulmeItem({icon , years = '', title = '', desc = ''}: ResulmeItemProps) {
    return (
        <ResulmeItemStyled>
            <ResulmeIcon>{icon}</ResulmeIcon>
            <ResulmeDate>{years}</ResulmeDate>
            <ResulmeSubTitle>{parse(title)}</ResulmeSubTitle>
            <ResulmeDescription>{desc}</ResulmeDescription>
        </ResulmeItemStyled>
    );
}