import styled, { css } from "styled-components";
import { palette } from "../../lib/styles/colors";

const Container = styled.button`
  position: relative;
  overflow: hidden;
  background: ${({ color }) => palette[color] || palette.primary};
  color: #fff;
  border-radius: 0.7rem;
  padding: 0.7rem 1.5rem;
  width: auto;
  min-width: 100px;
  line-height: 20px;
  font-size: 15px;

  ${({ size }) =>
    size === "sm" &&
    css`
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      min-width: 50px;
      line-height: 18px;
      font-size: 13px;
    `}
  ${({ size }) =>
    size === "lg" &&
    css`
      min-width: 150px;
      line-height: 25px;
      font-size: 20px;
    `}
  ${({ size }) =>
    size === "auto" &&
    css`
      width: 100%;
    `}
  ${({ shadow, color }) =>
    shadow &&
    css`
      box-shadow: 0 4px 14px 0 ${palette[color] || palette.primary};
    `}
`;

export { Container };
