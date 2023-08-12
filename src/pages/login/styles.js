import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-items: center;


    @media (max-width: 1000px) {
    margin-top: 0px;
    flex-direction: column;
    .bannerImage {
      scale: 80%;
    }
  }
`;

export const Title = styled.h2`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;
export const Column = styled.div`
  flex: 1;
  padding: 8%;
  a {
    color: #e23dd7;
    text-decoration: none;
    font-weight: bold;
    &:hover{
      text-decoration: underline;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const TitleLogin = styled.p`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
`;

export const SubtitleLogin = styled.p`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`;

export const EsqueciText = styled.p`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #e5e044; 
`;

export const CriarText = styled.a`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;  
`;

export const ErrorText = styled.p`
color: #ff0000;
font-size: 12px;
`