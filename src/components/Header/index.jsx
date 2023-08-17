import React from "react";
import logo from "../../assets/logo-dio.svg";
import Button from "./../Button/index";
import { HiOutlineChevronDown } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  BuscarInputContainer,
  Column,
  Container,
  Input,
  Menu,
  MenuRigth,
  Row,
  UserPicture,
  Wrapper,
  MainButtons
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <a href="#/">
            <img src={logo} alt="Logo da DIO" />
          </a>
          {autenticado ? (
            <>
              {/* <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer> */}

              <div className="feedHeader">
                <MenuRigth
                  className="barItems"
                  // href="https://www.dio.me/#careers"
                  href="#"
                >
                  Cursos
                </MenuRigth>
                <MenuRigth
                  className="barItems"
                  //href="https://www.dio.me/bootcamp"
                  href="#"
                >
                  Carreira Global
                </MenuRigth>
                <MenuRigth
                  className="barItems"
                  //href="https://www.dio.me/projects"
                  href="#"
                >
                  Curso de Inglês
                </MenuRigth>
                <MenuRigth
                  className="barItems"
                  //href="https://www.dio.me/articles"
                  href="#"
                >
                  Vagas
                </MenuRigth>
                <MenuRigth
                  className="barItems"
                  //href="https://www.dio.me/planos"
                  href="#"
                >
                  Artigos
                </MenuRigth>
                <MenuRigth
                  className="barItems"
                  //href="https://www.dio.me/talent-match"
                  href="#"
                >
                  Rooms
                </MenuRigth>
                {/* 
                <MenuRigth className="burgerMenu">
                  <RxHamburgerMenu />
                </MenuRigth> */}
              </div>
            </>
          ) : null}
          {/* <MenuRigth href="#">Home</MenuRigth> */}
        </Row>
        <Row>
          {autenticado ? (
            <>
              <div className="intSymbol">?</div>
              <div className="notifBell">🔔</div>
              <div className="heartContainer">❤️️ 5</div>
              <UserPicture src="https://avatars.githubusercontent.com/u/93764492?v=4" />
            </>
          ) : (
            <>
              <MenuRigth
                className="barItems"
                //href="https://www.dio.me/#careers"
                href="#"
              >
                Carreiras
                <HiOutlineChevronDown className="chevron" />
              </MenuRigth>
              <MenuRigth
                className="barItems"
                //href="https://www.dio.me/bootcamp"
                href="#"
              >
                Bootcamps
              </MenuRigth>
              <MenuRigth
                className="barItems"
                //href="https://www.dio.me/projects"
                href="#"
              >
                Projetos
              </MenuRigth>
              <MenuRigth
                className="barItems"
                //href="https://www.dio.me/articles"
                href="#"
              >
                Comunidade
              </MenuRigth>
              <MenuRigth
                className="barItems"
                //href="https://www.dio.me/planos"
                href="#"
              >
                Planos
              </MenuRigth>
              <MenuRigth
                className="barItems"
                //href="https://www.dio.me/talent-match"
                href="#"
              >
                Para Empresas
              </MenuRigth>

              <MenuRigth className="burgerMenu">
                <a href="#/Feed">
                  <RxHamburgerMenu />
                </a>
              </MenuRigth>

              <MainButtons className="barItems">
                <a href="#/Feed">
                  <Button title="Entrar" />
                </a>

                <a href="#/Cadastro">
                  <Button
                    class="criarconta"
                    title="Criar Conta"
                    variant="variant"
                  />
                </a>
              </MainButtons>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;