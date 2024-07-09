import styled from 'styled-components';

export const CardStyle = styled.div `
  background: var(--primary-white);
  width: 218px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.12);
  border-radius: 8px;
  overflow: hidden;
`;

export const NameDisplayStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  text-align: left;

  .product-name {    
    font-size: 19px;
    color: var(--secondary-gray-dark);
  }
  .product-price {
    background-color: var(--secondary-gray-dark);
    border-radius: 5px;
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
    color: var(--primary-white);
  }
`;

export const ButtonBuyStyle = styled.button`
  background-color: var(--primary-blue);
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
  padding: 10px;
  margin-top: auto;
  border: none;  
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-white);
  cursor: pointer;
`;