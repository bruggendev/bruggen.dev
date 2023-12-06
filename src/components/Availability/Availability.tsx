import * as styles from "./Availability.module.css";
import React, { PropsWithChildren } from "react";

export const Availability: React.FC<PropsWithChildren> = (props) => (
  <p className={styles.Availability} {...props} />
);
