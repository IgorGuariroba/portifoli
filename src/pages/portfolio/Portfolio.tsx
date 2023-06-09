import {PortifolioContainerGrid, PortifolioSection, SectionTitle} from "./Portfolio.styled.ts";
import {portfolio} from "../../Data.tsx";
import {PortfolioItem} from "../../components/portfolioItem/PortfolioItem.tsx";

export function Portfolio() {
    return (
        <PortifolioSection>
            <SectionTitle>My <span>Portfolio</span></SectionTitle>

            <PortifolioContainerGrid>
                {portfolio.map(item => <PortfolioItem key={item.id} {...item}/>)}
            </PortifolioContainerGrid>
        </PortifolioSection>
    );
}