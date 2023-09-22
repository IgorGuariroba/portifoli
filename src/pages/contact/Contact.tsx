"use client"
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
import {object, string, z, ZodError} from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import TagManager from 'react-gtm-module';


const contactFormSchema = object({
    name: string()
        .min(3, {message: "O nome deve ter pelo menos 3 caracteres."})
        .max(50, {message: "O nome não pode ter mais de 50 caracteres."}),
    email: string().email({message: "O email fornecido não é válido."}),
    subject: string()
        .min(2, {message: "O assunto deve ter pelo menos 2 caracteres."})
        .max(100, {message: "O assunto não pode ter mais de 100 caracteres."}),
    message: string()
        .min(10, {message: "A mensagem deve ter pelo menos 10 caracteres."})
        .max(1000, {message: "A mensagem não pode ter mais de 1000 caracteres."}),
});

type ContactFormData = z.infer<typeof contactFormSchema>

export function Contact() {

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        }
    })

    console.log(errors)
    async function handleSetForm(data: ContactFormData) {
       console.log('data',data)
    }

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

                <ContactForm onSubmit={handleSubmit(handleSetForm)}>
                    <FormInputGroup>
                        <FormInputdiv>
                            <ErrorMessage isVisible={errors.name?.message} >{errors.name?.message}</ErrorMessage>
                            <FormControl
                                type="text"
                                placeholder="Your name"
                                {...register('name')}
                            />
                        </FormInputdiv>
                        <FormInputdiv>
                            <ErrorMessage isVisible={errors.email?.message} >{errors.email?.message}</ErrorMessage>
                            <FormControl
                                type="email"
                                placeholder="Your Email"
                                {...register('email')}
                            />
                        </FormInputdiv>
                        <FormInputdiv>
                            <ErrorMessage isVisible={errors.subject?.message} >{errors.subject?.message}</ErrorMessage>
                            <FormControl
                                type="text"
                                placeholder="Your Subject"
                                {...register('subject')}
                            />
                        </FormInputdiv>
                    </FormInputGroup>
                    <FormInputdiv>
                        <ErrorMessage isVisible={errors.message?.message} >{errors.message?.message}</ErrorMessage>
                        <FormControlArea
                            placeholder="Your Message"
                            {...register('message')}
                        />
                    </FormInputdiv>
                    <Button disabled={isSubmitting}>Send Message <span><ButtonIcon/></span></Button>
                </ContactForm>
            </ContactContainer>
        </ContactSection>
    );
}