import React from 'react'

import {
    NameText,
    Container,
    Progress,
    UserPicture
} from './styles';

const UserInfo = ({nome, image, percentual}) => {
  return (
      <Container>
          <UserPicture src={image} />
              <div>
                  <NameText>{nome}</NameText>
                  <Progress percentual={percentual} />
              </div>
    </Container>
  )
}

export default UserInfo