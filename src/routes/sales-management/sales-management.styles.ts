import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

export const Card = styled.div`
  cursor: pointer;
  padding: 16px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  p {
    margin: 5px 0;
    font-weight: bold;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

export const SkeletonCard = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
