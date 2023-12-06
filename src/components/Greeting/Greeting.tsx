"use client";
import React from "react";
import * as styles from "./Greeting.module.css";

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

export const Greeting = () => {
  return <h2 className={styles.Greeting}>{getText()}</h2>;
};
