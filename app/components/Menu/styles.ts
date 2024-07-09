import styled from 'styled-components'

export const ButtonShoppingStyle = styled.button `
  background: var(--primary-white);
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: none;
  box-shadow: none;
  cursor: pointer;
`;

export const CountStyle = styled.div `
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const MenuStyle = styled.nav`
  display: flex;
  flex-direction: column;
  background: var(--primary-blue);
  max-width: 486px;
  width: 90%;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  box-shadow: -5px 0px 6px 0px rgba(0,0,0,0.13);

  .container-menu {
    padding:30px;
    position: relative;
  }

  h2 {
    margin: 0px;
    padding: 0px;
  }
`

export const HeaderStyle = styled.div`
  padding: 30px;
  position: relative;

  h2 {
    margin: 0px;
    padding: 0px;
    color: var(--primary-white);
  }
`

export const ButtonCloseStyle = styled.button `
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: none;
  box-shadow: none;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 15px;
`;

export const ContainerProductStyle = styled.div `
  padding: 0px 30px;
  max-height: 300px;
  overflow-y: auto;

  span {
    font-size: 8px;
    color: var(--primary-black);
  }
`;

export const TotalStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin-top: auto;
  color: var(--primary-white);
  font-size: 28px;
  font-weight: bold;
`;

export const ButtonBuyStyle = styled.button`
  background: var(--primary-black);
  padding: 30px;
  color: var(--primary-white);
  font-size: 28px;
  border: none;
  cursor: pointer;
`