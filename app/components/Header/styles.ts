import styled from 'styled-components';

export const HeaderStyle = styled.div `
  background: var(--primary-blue);
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShoppingCartStyle = styled.div `
  background: var(--primary-white);
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  .count {
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;
