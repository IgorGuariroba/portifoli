import {
    Button,
    ButtonIcon,
    ContactContainer,
    ContactData,
    ContactDescription,
    ContactForm,
    ContactInfo,
    ContactLink,
    ContactSection,
    ContactSocials,
    ContactSocialsLink,
    ContactTitle,
    FormControl,
    FormControlArea,
    FormInputdiv,
    FormInputGroup,
    InfoDesc,
    InfoICon,
    InfoIConPhone,
    InfoItem,
    InfoTitle
} from "./Contact.styled.ts";
import {SectionTitle} from "../portfolio/Portfolio.styled.ts";
import {FaFacebookF, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";
import PageTracker from "../../components/pageTracker/PageTracker.tsx";

export function Contact() {
    return (
        <ContactSection>
            <PageTracker pageName='Contato'/>
            <SectionTitle>
                Get in <span>touch</span>
            </SectionTitle>

            <ContactContainer>
                <ContactData>
                    <ContactTitle>Don´t be shy!</ContactTitle>

                    <ContactDescription>Feel free to get in touch with me. I am always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.
                    </ContactDescription>

                    <ContactInfo>
                        <InfoItem>
                            <InfoICon/>
                            <div>
                                <InfoTitle>Mail me</InfoTitle>
                                <ContactLink href="mailto:contact@igorguariroba.com.br">
                                    <InfoDesc>contact@igorguariroba.com.br</InfoDesc>
                                </ContactLink>
                            </div>
                        </InfoItem>
                        <InfoItem>
                            <InfoIConPhone/>
                            <div>
                                <InfoTitle>Call me</InfoTitle>
                                <ContactLink href="tel:+5511972144771">
                                    <InfoDesc>(+55) 11 97214-4771</InfoDesc>
                                </ContactLink>
                            </div>
                        </InfoItem>
                    </ContactInfo>

                    <ContactSocials>
                        <ContactSocialsLink href='https://www.linkedin.com/in/igor-ravel/'>
                            <FaLinkedin/>
                        </ContactSocialsLink>
                        <ContactSocialsLink href='https://www.facebook.com/igorguarioba/'>
                            <FaFacebookF/>
                        </ContactSocialsLink>
                        <ContactSocialsLink href='https://www.instagram.com/igor.guariroba/'>
                            <FaInstagram/>
                        </ContactSocialsLink>
                        <ContactSocialsLink href='https://www.youtube.com/@igorravelguariroba/videos'>
                            <FaYoutube/>
                        </ContactSocialsLink>
                    </ContactSocials>
                </ContactData>

                <ContactForm>
                    <FormInputGroup>
                        <FormInputdiv>
                            <FormControl type="text" placeholder="Your name"/>
                        </FormInputdiv>
                        <FormInputdiv>
                            <FormControl type="email" placeholder="Your Email"/>
                        </FormInputdiv>
                        <FormInputdiv>
                            <FormControl type="text" placeholder="Your Subject"/>
                        </FormInputdiv>
                    </FormInputGroup>
                    <FormInputdiv>
                        <FormControlArea placeholder="Your Message"/>
                    </FormInputdiv>
                    <Button>Send Message <span><ButtonIcon/></span></Button>
                </ContactForm>
            </ContactContainer>
        </ContactSection>
    );
}