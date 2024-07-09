import styled from 'styled-components';

export const DisplayProducts = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 938px;
  width: 100%;
  margin: 50px auto;

  @media (max-width: 683px) { 
    justify-content: center;
  }
`;