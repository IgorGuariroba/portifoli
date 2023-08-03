import styled from "styled-components";

interface StyledSwitcherProps {
    showSwitcher: boolean;
}
export const StyledSwitcher = styled.div<StyledSwitcherProps>`
  position: fixed;
  left: 0;
  top: 10%;
  background-color: ${props => props.theme.textWhite};
  z-index: 100;
  padding: 0.9rem;
  box-shadow: 0 0 4px hsl(0,0%,80%);
  
  border-radius: 0 5px 5px 0;

  transform: translateX(${(props) => (props.showSwitcher ? '0' : '-100%')});
  transition: all 0.3s ease;
`;
export const StyledSwitcherToggler = styled.div<StyledSwitcherProps>`
  border-radius: 0 5px 5px 0;
  color: hsl(0, 0%, 40%);
  
  position: absolute;
  background-color: ${props => props.theme.textWhite};
  height: 3.12rem;
  width: 3.12rem;
  font-size: ${props =>props.theme.largeFontSize};
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 0 2px hsl(0,0%, 80%);
  
  top: 10%;
  
  transition: all 0.3s ease;
  left: ${(props) => (props.showSwitcher ? '-100%' : '100%')};
`;
export const ThemeToggler = styled.div<StyledSwitcherProps>`
  border-radius: 0 5px 5px 0;
  color: hsl(0, 0%, 40%);

  position: absolute;
  background-color: ${props => props.theme.textWhite};
  height: 3.12rem;
  width: 3.12rem;
  font-size: ${props =>props.theme.largeFontSize};
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 0 2px hsl(0,0%, 80%);
  
  bottom: 10%;

  transition: all 0.3s ease;
  left: ${(props) => (props.showSwitcher ? '-100%' : '100%')};
`;
export const StyledSwitcherTitle = styled.h3`
  color: hsl(0, 0%, 40%);
  font-size: ${props => props.theme.smallFontSize};
  font-weight: ${props => props.theme.weigth600};
  border-bottom: 1px solid hsl(0, 0%, 87%);
  padding-bottom: 5px;
  margin-bottom: 0.9rem;
`;
export const StyledSwitcherItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 4px;
  row-gap: 8px;
`;
export const StyledSwitcherClose = styled.div`
  color: hsl(0, 0%, 40%);
  
  cursor: pointer;
  font-size: ${props => props.theme.h2FontSize};
  position: absolute;
  top: 2%;
  right: 0.9rem;
`;


export const StyledButton = styled.button<StyledSwitcherProps>`
  border-radius: 0 5px 5px 0;
  color: hsl(0, 0%, 40%);
  position: absolute;
  background-color: ${props => props.theme.textWhite};
  height: 3.12rem;
  width: 3.12rem;
  font-size: ${props => props.theme.largeFontSize};
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 0 2px hsl(0,0%, 80%);
  transition: all 0.3s ease;
  left: ${(props) => (props.showSwitcher ? '-100%' : '100%')};
  top: 95% // Isso vai mover o botão um pouco para baixo.
`;