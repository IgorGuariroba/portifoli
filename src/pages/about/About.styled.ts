import styled  from "styled-components";

export const Container = styled.main`
  max-width: 1140px;
  margin-inline: auto;
  padding-block: 4.3rem;

  & span {
    color: ${props => props.theme.firstColor};
  }
`;
export const AboutS = styled.section``;
export const Title = styled.h2`
  font-size: ${props => props.theme.bigFontSize};
  font-weight: ${props => props.theme.weigth800};
  text-align: center;
  margin-bottom: 4.3rem;
`;
export const Grid = styled.div`
  display: grid;
  gap: 1.8rem;
`;
export const Info = styled.div``;
export const Subtitle = styled.h3``;
export const ListGrid = styled.ul``;
