import styled from "styled-components";
import { Bold, MainContentPadding } from "../../styles/general.styles";

export const ProgramsPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;
  margin-top: 3em;
`;

export const StyledProgramCard = styled.div`
  ${MainContentPadding}
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors["bg-secondary"]};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["bg-primary"]};
  height: 410px;
  width: 30vw;

  span {
    color: gray;
  }

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const StyledColoredText = styled.p`
  ${Bold}
  color: ${({ theme }) => theme.colors["font-secondary"]};
`;

export const StyledProgramSkeletonCard = styled.div`
  ${MainContentPadding}
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid ${({ theme }) => theme.colors["bg-secondary"]};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["bg-primary"]};
  height: 410px;
  width: 30vw;

  .skeleton-text {
    height: 20px;
    background-color: ${({ theme }) => theme.colors["bg-secondary"]};
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .skeleton-image {
    height: 60%;
    background-color: ${({ theme }) => theme.colors["bg-secondary"]};
    border-radius: 15px;
  }
`;
