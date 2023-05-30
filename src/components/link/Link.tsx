import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {Icon, StyledLink} from "./Link.styles";


interface LinkProps {
    to: string;
    icon: IconProp;
    children: React.ReactNode;
    onClick?: () => void;
    isActive?: any;
}

export const Link: React.FC<LinkProps> = ({ to, icon, children, onClick,isActive }) => {
    const handleClick = () => {
        if (onClick) {
            const result = onClick(); // Chama a função onClick e obtém o resultado
            console.log(result); // Exibe o resultado no console (você pode usar o resultado como desejar)
        }
    };

    return (
        <StyledLink to={to} onClick={handleClick} isActive={isActive}>
            <Icon icon={icon} />
            {children}
        </StyledLink>
    );
};