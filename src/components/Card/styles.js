import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  position: relative;
  margin-bottom: 24px;
  border-radius: 8px ;
`;

export const ImageBackground = styled.img`
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 180px;
  object-fit: contain;
  background-color: white;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-family: "MD Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  p {
    font-family: "MD Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid #ffffff;
`;

export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: "MD Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  p {
    font-family: "MD Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }
`;

export const HasInfo = styled.div`
  margin-top: 12px;

  h4 {
    font-family: "MD Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff80;
  }

  p {
    font-family: "MD Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;
