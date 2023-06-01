import {personalInfo} from "../../Data.tsx";
import {InfoDescription, InfoItem, InfoTitle} from "./Info.styles.ts";

export function Info() {
    return (<>
        {personalInfo.map(({id, title, description}) => (
            <InfoItem key={id}>
                <InfoTitle>{title}: </InfoTitle>
                <InfoDescription>{description}</InfoDescription>
            </InfoItem>
        ))}
    </>);
}