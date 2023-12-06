"use client";
import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";

const Greeting = styled.h2`
  display: none;
  ${media(">desktop")} {
    display: block;
  }
`;

const getText = () => {
  const date = new Date();
  const timeInHours = date.getHours();

  if (timeInHours < 12) {
    return "Good morning!";
  }
  if (timeInHours >= 12 && timeInHours < 18) {
    return "Good day!";
  }

  return "Good evening!";
};

export default () => {
  return <Greeting>{getText()}</Greeting>;
};
