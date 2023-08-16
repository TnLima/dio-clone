import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  max-width: 1200px;
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
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  background-color: rgba(0,0,0,.2);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  top: auto;
  height: 90px;

  //SOCIALS
  #author {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 6px;
  }

  .iconWrapper {
    display: flex;
    align-items: center;
    height: 100px;
  }

  #linkedin {
    font-size: 30px;
    color: #005dff;
    margin: 6px;
    transition-duration: 0.1s;
  }

  #github {
    color: black;
    border-radius: 240px;
    border: solid white 4px;
    background-color: white;
    font-size: 40px;
    transition-duration: 0.1s;
  }

  #youtube {
    font-size: 30px;
    color: #ff5d5e;
    margin: 6px;
    transition-duration: 0.1s;
  }

  #linkedin:hover {
    font-size: 50px;
  }

  #youtube:hover {
    font-size: 50px;
  }

  #github:hover {
    font-size: 55px;
    color: #7f28b5;
  }
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
  width: 32px;
  height: 32px;
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
