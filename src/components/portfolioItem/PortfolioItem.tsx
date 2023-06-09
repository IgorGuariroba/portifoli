import {ReactNode, useState} from "react";
import {
    ItemIcon,
    StyledIcon,
    ModalClose, ModalImg, ModalItem, ModalListGrid, ModalTitle,
    PortfolioHover,
    PortfolioImg,
    PortfolioItemStyled,
    PortfolioModal, PortfolioModalContent,
    PortfolioTitle, SpanItemDetails, SpanItemTitle
} from "./PortfolioItem.styled.ts";


interface Detail {
    icon?: ReactNode | null,
    title: string,
    desc: string
}

interface PortfolioItemProps {
    img: string,
    title: string,
    details: Detail[]
}
export function PortfolioItem({img, title, details}: PortfolioItemProps) {
    const[modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <PortfolioItemStyled>
            <PortfolioImg src={img} alt=''/>

            <PortfolioHover onClick={toggleModal}>
                <PortfolioTitle>{title}</PortfolioTitle>
            </PortfolioHover>

            {modal && (
                <PortfolioModal>
                    <PortfolioModalContent>
                        <ModalClose onClick={toggleModal}><StyledIcon/></ModalClose>
                        <ModalTitle>{title}</ModalTitle>
                        <ModalListGrid>
                            {details.map(({icon, title, desc}, index ) => {
                                return (
                                    <ModalItem key={index}>
                                        <ItemIcon>{icon}</ItemIcon>

                                        <div>
                                            <SpanItemTitle>{title}</SpanItemTitle>
                                            <SpanItemDetails>{desc}</SpanItemDetails>
                                        </div>
                                    </ModalItem>
                                );
                            })}
                        </ModalListGrid>

                        <ModalImg src={img} alt=''/>

                    </PortfolioModalContent>
                </PortfolioModal>
            )}
        </PortfolioItemStyled>
    );
}