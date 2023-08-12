import React from "react";

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

const Footer = () => {
  return (
    <Wrapper>
      <div className="iconWrapper">
        <a
          href="https://www.linkedin.com/in/thiago-de-lima-980977134/"
          target="_blank"
          rel="noreferrer"
        >
          <i id="linkedin" class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/TnLima" target="_blank" rel="noreferrer">
          <i id="github" class="fab fa-github"></i>
        </a>
        <a
          href="https://www.youtube.com/@thi-lima"
          target="_blank"
          rel="noreferrer"
        >
          <i id="youtube" class="fab fa-youtube"></i>
        </a>
      </div>
      <p id="author">Coded by Thiago Lima</p>
    </Wrapper>
  );
};

export default Footer;