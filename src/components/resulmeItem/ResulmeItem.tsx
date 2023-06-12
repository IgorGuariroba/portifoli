import {
    ResulmeDate,
    ResulmeDescription,
    ResulmeIcon,
    ResulmeItemStyled,
    ResulmeSubTitle
} from "./ResulmeItem.styled.ts";
import parse from "html-react-parser";
import { ReactNode } from "react";
import { differenceInYears, parseISO } from "date-fns";


type ResulmeItemProps = {
    icon?: ReactNode;
    title?: string;
    desc?: string;
};
export function ResulmeItem({ icon,title = '', desc = '' }: ResulmeItemProps) {
    const date = parseISO('1996-06-05T00:00:00.000Z');
    const years = differenceInYears(new Date(), date);
    return (
        <ResulmeItemStyled>
            <ResulmeIcon>{icon}</ResulmeIcon>
            <ResulmeDate>{years.toString()}</ResulmeDate>
            <ResulmeSubTitle>{parse(title)}</ResulmeSubTitle>
            <ResulmeDescription>{desc}</ResulmeDescription>
        </ResulmeItemStyled>
    );
}