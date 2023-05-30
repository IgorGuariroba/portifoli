import {Item,  List, Menu, Name, Nav, Toggle} from "./Navbar.styles.ts";
import {
    faBars,
    faEnvelopeOpen,
    faFolderOpen,
    faHouse,
    faRectangleXmark,
    faUserLarge
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link} from "../link/Link.tsx";
import { useLocation } from 'react-router-dom';


export function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Nav>
            <Menu isOpen={isOpen}>
                <List>
                    <Item>
                        <Link isActive={location.pathname === '/'} to="/" icon={faHouse} onClick={handleToggleClick}>
                            <Name isActive={location.pathname === '/'}>Home</Name>
                        </Link>
                        <Link isActive={location.pathname === '/sobre'} to="/sobre" icon={faUserLarge} onClick={handleToggleClick}>
                            <Name isActive={location.pathname === '/sobre'}>About</Name>
                        </Link>
                        <Link isActive={location.pathname === '/portifolio'} to="/portifolio" icon={faFolderOpen} onClick={handleToggleClick}>
                            <Name isActive={location.pathname === '/portifolio'}>Portfolio</Name>
                        </Link>
                        <Link isActive={location.pathname === '/contato'} to="/contato" icon={faEnvelopeOpen} onClick={handleToggleClick}>
                            <Name isActive={location.pathname === '/contato'}>Contact</Name>
                        </Link>
                    </Item>
                </List>
            </Menu>
            <Toggle icon={isOpen ? faRectangleXmark : faBars} onClick={handleToggleClick}/>
        </Nav>
    );
}