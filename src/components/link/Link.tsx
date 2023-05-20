import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { StyledLink } from "./Link.styles";


interface LinkProps {
    to: string;
    icon: IconProp;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, icon, children,onClick }) => (
    <StyledLink to={to} onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
        {children}
    </StyledLink>
);
