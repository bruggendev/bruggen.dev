import React from "react";
import BareLogoImage from "./bruggen.logo";
import styled from "styled-components";
import media from "css-in-js-media";

export default styled.main`
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 50px 30px;

  ${media(">desktop")} {
    flex-direction: row;
    padding: 70px 100px;
  }
`;

export const Logo = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 180px;

  ${media(">desktop")} {
    width: 270px;
    margin-right: 90px;
  }
`;

export const LogoImage = styled(BareLogoImage)`
  width: 100%;
  height: auto;
`;

export const LogoTitle = styled.h1`
  font-weight: 700;
  margin: 0 0 0 -4px;
  line-height: 1em;
  font-size: 48px;

  ${media(">desktop")} {
    font-size: 66px;
  }
`;

export const Introduction = styled.div`
  margin: 8px 0;
  font-size: 20px;
  line-height: 32px;
  text-align: center;

  h2 {
    font-weight: 900;
  }

  ${media(">desktop")} {
    width: 380px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const ContactButton = styled.a`
  font-size: 16px;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  border-radius: 5px;
  padding: 3px 10px;
  margin-top: 40px;
  text-decoration: none;
  font-weight: bold;
  display: block;
  margin: 0 auto;
  width: fit-content;
  line-height: 34px;

  ${media(">desktop")} {
    padding: 5px 12px;
    font-size: 20px;
  }
`;

export const Section = styled.section<{
  backgroundcolor?: string;
  color?: string;
}>`
  ${({ color }) => (color ? `--text-color: ${color};` : "")};
  --background-color: ${({ backgroundcolor }) => backgroundcolor || "inherit"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 30px;

  ${media(">desktop")} {
    padding: 70px 100px;
  }
`;

export const SectionHeader = styled.header`
  margin: 0 0 30px;
  max-width: var(--content-width);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media(">desktop")} {
    margin: 0 0 70px;
  }
`;

export const SectionContent = styled.main`
  max-width: var(--content-width);
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  flex-grow: 1;

  ${media(">desktop")} {
    font-size: 36px;
  }
`;
