import { ParentComponent } from "solid-js";
import * as styles from "./Availability.module.css";

export const Availability: ParentComponent = (props) => (
  <p class={styles.Availability} {...props}>
    Available from May 3th 2025 ·{" "}
    <a href="mailto:contact@bruggen.dev">contact me</a>
  </p>
);
