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
    ContactTitle, ErrorMessage,
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
import React, {useEffect, useState} from 'react';
import {object, string, ZodError} from 'zod';
import TagManager from 'react-gtm-module';


const contactFormSchema = object({
    name: string()
        .min(3, {message: "O nome deve ter pelo menos 3 caracteres."})
        .max(50,{ message: "O nome não pode ter mais de 50 caracteres." }),
    email: string().email({ message: "O email fornecido não é válido." }),
    subject: string()
        .min(2, { message: "O assunto deve ter pelo menos 2 caracteres." })
        .max(100, { message: "O assunto não pode ter mais de 100 caracteres." }),
    message: string()
        .min(10,{ message: "A mensagem deve ter pelo menos 10 caracteres." })
        .max(1000, { message: "A mensagem não pode ter mais de 1000 caracteres." }),
});


export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const validateForm = async () => {
            try {
                await contactFormSchema.parseAsync(formData);

                // Se a validação for bem-sucedida, não há erros no formulário
                setFormErrors({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });

                // Verifique se todos os campos estão preenchidos
                const isAllFieldsFilled = Object.keys(formData).every(
                    (key) => formData[key] !== ''
                );

                setIsFormValid(isAllFieldsFilled);
            } catch (error) {

                const getErrorMessage = (fieldName) => {
                    const fieldError = error.issues.find((issue) => issue.path[0] === fieldName);
                    return fieldError && fieldError.message !== 'Required' ? fieldError.message : '';
                };

                if (error instanceof ZodError) {

                    // Mapeie os erros do ZodError para o estado formErrors
                    const updatedFormErrors = {
                        name: getErrorMessage('name'),
                        email: getErrorMessage('email'),
                        subject: getErrorMessage('subject'),
                        message: getErrorMessage('message'),
                    };
                    setFormErrors(updatedFormErrors);
                    setIsFormValid(false);
                }
            }
        };

        validateForm().then();
    }, [formData]);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            contactFormSchema.parse(formData);

            TagManager.dataLayer({
                dataLayer: {
                    event: 'formSubmit',
                    formData: {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                    },
                },
            });

            // Limpe os campos do formulário e exiba uma mensagem de sucesso
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            // Exiba uma mensagem de sucesso para o usuário (você pode implementar isso como preferir)
            alert('E-mail enviado com sucesso!');
        } catch (error: any) {
            if (error instanceof ZodError) {
                // Mapeie os erros do ZodError para o estado formErrors
                const updatedFormErrors = {
                    name: getErrorMessage('name'),
                    email: getErrorMessage('email'),
                    subject: getErrorMessage('subject'),
                    message: getErrorMessage('message'),
                };

                // Atualize os erros do formulário no estado
                setFormErrors(updatedFormErrors);
            } else {
                // Lidar com outros erros, se necessário
                console.error('An error occurred:', error);
            }
        }
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => {
        const { value } = e.target;
        const tempData = { [fieldName]: value };

        try {
            contactFormSchema.parse(tempData);
        } catch (error) {
            if (error instanceof ZodError) {

                const getErrorMessage = (fieldName) => {
                    const fieldError = error.issues.find((issue) => issue.path[0] === fieldName);
                    return fieldError && fieldError.message !== 'Required' ? fieldError.message : '';
                };

                const updatedFormErrors = {
                    name: getErrorMessage('name'),
                    email: getErrorMessage('email'),
                    subject: getErrorMessage('subject'),
                    message: getErrorMessage('message'),
                };

                setFormErrors(updatedFormErrors);
            }
        }

        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

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

                <ContactForm onSubmit={handleFormSubmit}>
                    <FormInputGroup>
                        <FormInputdiv>
                            <ErrorMessage isVisible={formErrors.name} >{formErrors.name}</ErrorMessage>
                            <FormControl
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => handleInputChange(e, 'name')}
                            />
                        </FormInputdiv>
                        <FormInputdiv>
                            <ErrorMessage isVisible={formErrors.email} >{formErrors.email}</ErrorMessage>
                            <FormControl
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => handleInputChange(e, 'email')}
                            />
                        </FormInputdiv>
                        <FormInputdiv>
                            <ErrorMessage isVisible={formErrors.subject} >{formErrors.subject}</ErrorMessage>
                            <FormControl
                                type="text"
                                placeholder="Your Subject"
                                value={formData.subject}
                                onChange={(e) => handleInputChange(e, 'subject')}
                            />
                        </FormInputdiv>
                    </FormInputGroup>
                    <FormInputdiv>
                        <ErrorMessage isVisible={formErrors.message} >{formErrors.message}</ErrorMessage>
                        <FormControlArea
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => handleInputChange(e, 'message')}
                        />
                    </FormInputdiv>
                    <Button disabled={!isFormValid} >Send Message <span><ButtonIcon/></span></Button>
                </ContactForm>
            </ContactContainer>
        </ContactSection>
    );
}