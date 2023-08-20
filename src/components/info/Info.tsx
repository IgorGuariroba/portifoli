import {InfoDescription, InfoItem, InfoTitle} from "./Info.styles.ts";
import {differenceInYears, parseISO} from "date-fns";
import {useTranslation} from "react-i18next";

const date = parseISO('1996-06-05T00:00:00.000Z');
const years = differenceInYears(new Date(), date);
export const personalInfo = [
    {
        id: 1,
        title: "firstNameKey",
        description: "firstName",
    },
    {
        id: 2,
        title: "lastNameKey",
        description: "lastName",
    },
    {
        id: 3,
        title: "ageKey",
        description: years,
    },
    {
        id: 4,
        title: "nationalityKey",
        description: "nationality",
    },
    {
        id: 5,
        title: "freelanceKey",
        description: "available",
    },
    {
        id: 6,
        title: "addresskey",
        description: "Mogi Das Cruzes, SP",
    },
    {
        id: 7,
        title: "Phone",
        description: "(11) 97214-4771",
    },
    {
        id: 8,
        title: "Email",
        description: "contact@igorguariroba.com.br",
    },
    {
        id: 9,
        title: "Github",
        description: "https://github.com/igorguariroba",
    },
    {
        id: 10,
        title: "Languages",
        description: "English, Portuguese",
    },
];

export function Info() {
    const { t } = useTranslation();
    return (<>
        {personalInfo.map(({id, title, description}) => (
            <InfoItem key={id}>
                <InfoTitle>{t(title)}: </InfoTitle>
                <InfoDescription>{t(description)}</InfoDescription>
            </InfoItem>
        ))}
    </>);
}