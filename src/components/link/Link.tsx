import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {Icon, StyledLink} from "./Link.styles";


interface LinkProps {
    to: string;
    icon: IconProp;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, icon, children}) => {
        return (
        <StyledLink to={to} activeClassName="active">
            <Icon icon={icon} />
            {children}
        </StyledLink>
    );
};