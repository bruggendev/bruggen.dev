import React from "react";
import * as styles from "./Greeting.module.css";
import { GreetingText } from "./GreetingText";

export const Greeting = () => {
  return (
    <h2 className={styles.Greeting}>
      <GreetingText />
    </h2>
  );
};
