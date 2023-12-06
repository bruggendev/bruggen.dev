"use client";
import React from "react";

const getText = () => {
  const date = new Date();
  const timeInHours = date.getHours();

  if (timeInHours < 12) {
    return "Good morning!";
  }
  if (timeInHours >= 12 && timeInHours < 18) {
    return "Good day!";
  }

  return `Good evening!`;
};

export const GreetingText = () => <>{getText()}</>;
