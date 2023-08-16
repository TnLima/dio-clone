import styled from "styled-components";
export const Container = styled.main`
  width: 100%;
  /* max-width: 80%; */
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 180px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .bannerImage {
  }

  @media (max-width: 1100px) {
    margin-top: 64px;
    flex-direction: column;
    .bannerImage {
      scale: 80%;
    }
  }

  @media (max-width: 450px) {
    margin-top: 64px;
    flex-direction: column;
    .bannerImage {
      scale: 60%;
    }

    .bannerText {
      width: 74vw;
      font-size: 34px;
    }

    .subTitle {
      width: 74vw;
      font-size: 14px;
    }
  }
`;

export const Title = styled.h2`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #ffffff;
`;

export const TitleHighlight = styled.span`
color: #e4105d;
`

export const TextContent = styled.p`
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  width: 420px;
  margin-bottom: 20px;
  line-height: 22px;
  color: #ffffff;
`;