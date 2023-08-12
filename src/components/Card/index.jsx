import React from 'react'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://play-lh.googleusercontent.com/P3xTS7gQrh0S2e_99KmHVGiVUcvepvj4eFFhqU_y6XFRegRoo1fTZ8r6t1MUsmfRxXNJ" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/93764492?v=4" />
          <div>
            <h4>Thiago Lima</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito o curso de HTML e CSS no Bootcamp dio do Global
            avanade...
            <br/>
            <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}

export default Card