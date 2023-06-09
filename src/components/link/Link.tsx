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
            const result = onClick();
            console.log(result);
        }
    };

    return (
        <StyledLink to={to} onClick={handleClick} isActive={isActive}>
            <Icon icon={icon} />
            {children}
        </StyledLink>
    );
};