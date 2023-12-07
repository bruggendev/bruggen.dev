import { ParentComponent } from "solid-js";
import * as styles from "./Availability.module.css";

export const Availability: ParentComponent = (props) => (
  <p class={styles.Availability} {...props} />
);
