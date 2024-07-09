import styled from 'styled-components'

export const CardProductStyle = styled.div `
  background: var(--primary-white);
  padding: 10px 15px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.28);

  .img-responsive-thumb {
    width: auto;
    height: 50px;
    margin: auto;
  }

  @media (max-width: 500px){
    text-align: center;
    flex-wrap: wrap;
    
    .img-responsive-thumb {
      width: 100px;
      height: auto;
    }
    span {
      display: none;
    }
  }
`;

export const DescritionStyle = styled.div `
  color: var(--secondary-gray-dark);
  font-size: 13px;
  width: 120px;
  @media (max-width: 500px){
    width: 100%
  }
`;

export const PriceStyle = styled.div`
  color: var(--primary-black);
  font-size: 14px;
  font-weight: bold;
`;