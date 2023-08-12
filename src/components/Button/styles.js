import styled, { css } from "styled-components"

export const ButtonContainer = styled.button`
  background: #151515;
  border-radius: 6px;
  position: relative;

  height: 34px;

  font-size: 15px;
  font-weight: bold;

  color: white;
  padding: 2px 12px;
  width: 100%;

  border: 1px solid white;

  &:hover {
    /* opacity: 0.6; */
    background: #932ed1;
    cursor: pointer;
    border: 1px solid #932ed1;
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 127px;
      height: 33px;
      background: #7f28b5;

      border: none;

      &:hover {
        /* opacity: 0.6; */
        background: #932ed1;
        cursor: pointer;
        border: none;
      }

      /* &::after {
        content: "";
        position: absolute;
        border: 1px solid #7f28d6;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      } */
    `}
`;
