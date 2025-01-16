import { ParentComponent } from "solid-js";
import * as styles from "./Availability.module.css";

export const Availability: ParentComponent = (props) => (
  <p class={styles.Availability} {...props}>
    I'm currently not available for new projects ·{" "}
    <a href="mailto:contact@bruggen.dev">contact me</a>
  </p>
);
