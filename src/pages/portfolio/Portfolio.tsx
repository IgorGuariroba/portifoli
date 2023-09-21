import {PortifolioContainerGrid, PortifolioSection, SectionTitle} from "./Portfolio.styled.ts";
import {PortfolioItem} from "../../components/portfolioItem/PortfolioItem.tsx";
import PageTracker from "../../components/pageTracker/PageTracker.tsx";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import {useEffect, useState} from "react";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();


export function Portfolio() {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        storage.ref().listAll().then(function (res) {
            res.items.forEach(function (itemRef) {
                if(itemRef.name === 'projetos.json'){
                    itemRef.getDownloadURL().then(function (url) {
                        fetch(url)
                            .then(response => response.json())
                            .then(json => {
                                setPortfolio(json); // Set the portfolio data from fetched JSON
                            });
                    }).catch(function (error) {
                        console.log('Error fetching file:', error);
                    });
                }
            });
        }).catch(function (error) {
            console.log('Error listing files:', error);
        });
    }, []);


    return (
        <PortifolioSection>
            <PageTracker pageName='Portifolio'/>
            <SectionTitle>My <span>Portfolio</span></SectionTitle>

            <PortifolioContainerGrid>
                {portfolio.map((item, index) => <PortfolioItem key={index} {...item} />)}
            </PortifolioContainerGrid>
        </PortifolioSection>
    );
}