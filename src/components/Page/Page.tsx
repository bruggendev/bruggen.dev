import React, { PropsWithChildren } from "react";
import "./Body.css";
import "./Fonts.css";
import * as styles from "./Page.module.css";

export const Page: React.FC<PropsWithChildren> = (props) => (
  <main className={styles.Page} {...props} />
);
