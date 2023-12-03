import React from "react";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { SectionHeader, SectionTitle } from "../Content";
import DownloadIcon from "./download.icon.svg";
import media from "css-in-js-media";

export const Resume = styled.dl`
  margin-top: 0;
  padding-left: 37px;
  padding-bottom: 40px;
  position: relative;
  margin-left: 17px;

  &:before {
    content: " ";
    display: block;
    border-left: 3px solid var(--text-color);
    position: absolute;
    top: 17px;
    left: -1.5px;
    bottom: 0px;

    ${media(">desktop")} {
      border-width: 5px;
      left: -2.5px;
      padding-left: 57px;
    }
  }

  &:after {
    content: " ";
    display: block;
    background: linear-gradient(transparent, var(--background-color));
    height: 80px;
    position: absolute;
    left: -40px;
    right: -40px;
    bottom: 0;
  }
`;

type ResumeItemHeaderProps = PropsWithChildren<{ from: string; to: string }>;

export const ResumeItemHeader = ({
  from,
  to,
  children,
}: ResumeItemHeaderProps) => (
  <ResumeItemHeaderContainer>
    <ResumeItemHeaderPeriod>
      <time>{from}</time> - <time>{to}</time>
    </ResumeItemHeaderPeriod>
    <ResumeItemHeaderPosition>{children}</ResumeItemHeaderPosition>
  </ResumeItemHeaderContainer>
);

const ResumeItemHeaderContainer = styled.dt`
  align-items: center;
  margin: 16px 0 0;

  &::before {
    content: " ";

    border: 3px solid var(--text-color);
    background-color: var(--background-color);
    box-sizing: border-box;
    display: block;
    position: absolute;

    width: 26px;
    height: 26px;
    left: -13px;
    border-radius: 26px;

    ${media(">desktop")} {
      border-width: 5px;
      width: 34px;
      height: 34px;
      left: -17px;
      border-radius: 34px;
    }
  }

  &:first-of-type::before {
    box-shadow: inset 0px 0px 0px 5px var(--background-color);
    background-color: var(--text-color);
  }
`;

const ResumeItemHeaderPeriod = styled.h4`
  font-size: 12px;
  font-weight: 500;
  line-height: 26px;
  margin: 0 0 5px;

  ${media(">desktop")} {
    font-size: 15px;

    line-height: 34px;
  }
`;

const ResumeItemHeaderPosition = styled.h3`
  font-size: 20px;
  margin: 0;
  font-weight: 900;

  ${media(">desktop")} {
    font-size: 22px;
  }
`;

export const ResumeItemContent = styled.dd`
  font-size: 16px;
  font-weight: 300;
  margin: 20px 0 40px;

  ${media(">desktop")} {
    font-size: 20px;
    margin: 30px 0 60px;
  }
`;

export const ResumeItem: React.FC<PropsWithChildren> = ({ children }) => (
  <>{children}</>
);

export const ResumeHilights = styled.h2`
  font-size: 20px;
  margin: 8px 0;
  font-weight: bold;
`;

export const ResumeHeader = styled(SectionHeader)``;

export const ResumeTitle = styled(SectionTitle)``;

export const ResumeDownload = styled.a`
  color: var(--text-color);
  text-decoration: underline;

  background-image: url("/download.icon.svg");
  background-repeat: no-repeat;
  background-size: 20px;
  padding-left: 30px;
  font-weight: 700;
  font-size: 16px;
`;
