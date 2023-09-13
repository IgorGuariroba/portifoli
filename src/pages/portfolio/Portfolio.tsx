import {PortifolioContainerGrid, PortifolioSection, SectionTitle} from "./Portfolio.styled.ts";
import {portfolio} from "../../Data.tsx";
import {PortfolioItem} from "../../components/portfolioItem/PortfolioItem.tsx";
import PageTracker from "../../components/pageTracker/PageTracker.tsx";

export function Portfolio() {
    return (
        <PortifolioSection>
            <PageTracker pageName='Portifolio'/>
            <SectionTitle>My <span>Portfolio</span></SectionTitle>

            <PortifolioContainerGrid>
                {portfolio.map(item => <PortfolioItem key={item.id} {...item}/>)}
            </PortifolioContainerGrid>
        </PortifolioSection>
    );
}