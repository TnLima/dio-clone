import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  max-width: 1200px;

  .burgerMenu {
    display: none;
  }

  @media (max-width: 1000px) {
    .barItems {
      display: none;
    }

    .burgerMenu {
      scale: 180%;
      display: block;
      cursor: pointer;
      text-decoration: none;
      color: white;
      a:visited {
        color: white;
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  //logo DIO
  img {
    height: 40px;
  }

  Button {
    margin: 0 8px 0;
  }

  .feedHeader {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
  }

  .heartContainer {
    background-color: #363537;
    font-size: 18px;
    width: 48px;
    height: 24px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    padding: 6px;
    margin-right: 12px;
  }

  .notifBell {
    font-size: 20px;
    margin-right: 12px;
    background-color: #363537;
    border-radius: 20px;
    height: 38px;
    width: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .intSymbol {
    font-size: 20px;
    margin-right: 12px;
    background-color: #363537;
    border-radius: 20px;
    height: 38px;
    width: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BuscarInputContainer = styled.div`
  width: 175px;
  height: 30px;
  background: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Menu = styled.a`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 25px;
  color: white;
  margin-right: 12px;
  text-decoration: none;
`;
export const MenuRigth = styled.a`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 25px;
  color: white;
  margin-right: 26px;
  text-decoration: none;
  white-space: nowrap; //evita quebra de linhas
  display: flex;
  align-items: center;  

  &:hover {
    color: #b798e3;
  }

  .chevron {
    scale: 120%;
    padding-top: 2px;
    margin-left: 4px;
  }
`;
export const UserPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 22px;
  border: 2px solid white;
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: white;
`;

export const MainButtons = styled.div`
display: flex;
a{
  margin: 8px;
}
`;
