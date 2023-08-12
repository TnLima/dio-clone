import React from "react";
import { useNavigate } from "react-router-dom";
import Button from './../../components/Button/index';
import Header from './../../components/Header/index';
import { Container, TextContent, Title, TitleHighlight } from "../home/styles";

import bannerImage from '../../assets/banner.svg'
import Footer from './../../components/Footer/index';

const Home = () => {

  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header>Home</Header>
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>    
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
            desafio profissional, evoluindo em comunidade com os melhores experts.
          </TextContent>
          <Button title='Começar agora' variant="secondary" onClick={handleClickSignIn} />
        </div>

        <div className="bannerImage">
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
      <Footer />
      {/* <Button title="Teste 1"></Button>
      <Button variant="secondary" title="Teste 2"></Button>
      <Link to="/login">Fazer login</Link> */}
    </>
  );
};

export default Home;
