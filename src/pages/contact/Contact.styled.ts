import styled from "styled-components";
import {FaEnvelopeOpen, FaPhoneSquareAlt} from "react-icons/fa";
import {FiSend} from "react-icons/fi";

export const ContactSection = styled.section`
  padding-block: 4.37rem;
`;

export const ContactContainer = styled.div`
  display: grid;
  gap: 1.87rem;
  max-width: 1140px;
  margin-inline: auto;
  padding-inline: 0.93rem;
  grid-template-columns: 4fr 8fr;
`;

export const ContactData = styled.div``;
export const ContactTitle = styled.h3`
  font-size: ${props => props.theme.h3FontSize};
  font-weight: ${props => props.theme.weigth600};
  margin-bottom: 1rem;
`;
export const ContactDescription = styled.p`
  font-size: ${props => props.theme.smallFontSize};
  line-height: 1.6;
  margin-bottom: 1.25rem;
`;
export const ContactInfo = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  flex-wrap: wrap;
  font-size: ${props => props.theme.smallFontSize};
  font-family: ${props => props.theme.bodyFont};
  font-weight: ${props => props.theme.weigth500};
`;
export const InfoItem = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
export const InfoICon = styled(FaEnvelopeOpen)`
  color: ${props => props.theme.firstColor};
  font-size: ${props => props.theme.h2FontSize};
`;
export const InfoTitle = styled.span`
  font-size: ${props => props.theme.smallFontSize};
`;
export const InfoDesc = styled.h4`
  font-size: ${props => props.theme.smallFontSize};
  font-family: ${props => props.theme.bodyFont};
  font-weight: ${props => props.theme.weigth500};
`;
export const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  background-color: transparent;
`;
export const InfoIConPhone = styled(FaPhoneSquareAlt)`
  color: ${props => props.theme.firstColor};
  font-size: ${props => props.theme.h2FontSize};
`;

export const ContactSocials = styled.div`
  display: flex;
  column-gap: 1rem;
`;
export const ContactSocialsLink = styled.a`
  background-color: ${props => props.theme.containerColor};
  color: ${props => props.theme.titleColor};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  text-align: center;
  line-height: 2.81rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.firstColor};
    color: ${props => props.theme.textWhite};
  }
`;

export const ContactForm = styled.form``;
export const FormInputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  column-gap: 1.87rem;
`;
export const FormInputdiv = styled.div`
  margin-bottom: 1.87rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const FormControl = styled.input`
  border: 1px solid ${props => props.theme.containerColor};
  background-color: ${props => props.theme.containerColor};
  color: ${props => props.theme.titleColor};
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: ${props => props.theme.smallFontSize};
  transition: all 0.3s ease;
  &:focus {
    border-color: ${props => props.theme.firstColor};
  }
`;
export const FormControlArea = styled.textarea`
  border: 1px solid ${props => props.theme.containerColor};
  background-color: ${props => props.theme.containerColor};
  color: ${props => props.theme.titleColor};
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: ${props => props.theme.smallFontSize};
  transition: all 0.3s ease;

  &:focus {
    border-color: ${props => props.theme.firstColor};
  }

  resize: none;
  height: 10rem;
`;
export const Button = styled.button`
 display: inline-block;
  color: ${props => props.theme.titleColor};
  border: 1px solid ${props => props.theme.firstColor};
  padding: 0.9rem 4.3rem 0.9rem 2.1rem;
  border-radius: 35px;
  font-family: ${props => props.theme.secondFont};
  font-size: ${props => props.theme.smallFontSize};
  font-weight: ${props => props.theme.weigth500};
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    transform: translateX(100%);
    background-color: ${props => props.theme.firstColor};
    transition: all 0.3s ease-out;
  }
  
  &:hover {
    color: ${props => props.theme.textWhite};
    background-color: ${props => props.theme.firstColor};
  }
  
  &:hover::before {
    transform: translateX(0);
  }
  
  span{
    background-color: ${props => props.theme.firstColor};
    position: absolute;
    inset-block: -3px;
    right: 0;
    width: 3.3rem;
    border-radius: 50%;
    color: ${props => props.theme.textWhite};
    text-align: center;
    line-height: 3.7rem;
    height: 3.3rem;
  }
  
  pointer-events: auto;
  cursor: pointer;
  opacity: 1;

  &:disabled {
    pointer-events: none; 
    cursor: not-allowed;
    opacity: 0.6; 
  }
`;

export const ButtonIcon = styled(FiSend)`
  font-size: ${props => props.theme.h3FontSize};
  line-height: 4rem;
`;

export const ErrorMessage = styled.div`
  color: red;
  background-color: rgba(255, 0, 0, 0.2);
  padding: 3px;
  border-radius: 8px;
  height: 40px;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`