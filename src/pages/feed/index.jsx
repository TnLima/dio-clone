import React from "react";
import Button from './../../components/Button/index';
import Header from './../../components/Header/index';
import { Container, TextContent, Title, TitleHighlight, Column } from "./styles";

import bannerImage from '../../assets/banner.svg'
import Card from './../../components/Card/index';
import UserInfo from './../../components/UserInfo/index';



const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />                    
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING DA SEMANA</TitleHighlight>

          <UserInfo
            percentual={50}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/93764492?v=4"
          />
          
          <UserInfo
            percentual={80}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/93764492?v=4"
          />
          <UserInfo
            percentual={70}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/93764492?v=4"
          />
          <UserInfo
            percentual={45}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/93764492?v=4"
          />
          <UserInfo
            percentual={92}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/93764492?v=4"
          />

        </Column>
      </Container>
    </>
  );
};

export default Feed;
