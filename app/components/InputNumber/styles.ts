import styled from 'styled-components';

export const DisplayNumberStyle = styled.div `
  display: flex;
  align-items: center;
  justify-content: start;
  width: 80px;
  height: 20px;
  border: 1px solid var(--secondary-gray);
  border-radius: 4px;
  border-radius: 4px;
  overflow: hidden;  

  .minus {
    background-color: var(--primary-white);
    color: var(--primary-black);
    font-size: 15px; 
    height: 100%;
    width: 20px;
    display: flex;
    justify-content: center;
    border: none;
    cursor: pointer;
  }

  .sum {
    background-color: var(--primary-white);
    color: var(--primary-black);
    font-size: 15px;
    height: 100%;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  .amount {
    height: 16px;
    width: 100%;
    color: var(--primary-black);
    text-align: center;
    padding: 0px;
    border: none;
    border-left: 1px solid var(--secondary-gray);
    border-right: 1px solid var(--secondary-gray);
  }
`;