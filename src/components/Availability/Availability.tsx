import styled from "styled-components";
import media from "css-in-js-media";

export const Availability = styled.p`
  font-size: 14px;
  font-weight: bold;
  background: var(--yellow);
  position: sticky;
  top: 0;
  margin: 0;
  padding: 18px;
  color: var(--text-color);
  text-align: center;
  z-index: 1;

  a {
    color: var(--text-color);
  }

  ${media(">desktop")} {
    font-size: 16px;
  }
`;
