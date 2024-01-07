import { ParentComponent } from "solid-js";
import * as styles from "./Content.module.css";

export const Logo: ParentComponent = (props) => (
  <div class={styles.Logo} {...props} />
);

export const LogoTitle: ParentComponent = (props) => (
  <h1 class={styles.LogoTitle} {...props} />
);

export const Introduction: ParentComponent = (props) => (
  <div class={styles.Introduction} {...props} />
);

export const ContactButton: ParentComponent<{ href: string }> = (props) => (
  <a class={styles.ContactButton} {...props} />
);

export const Section: ParentComponent = (props) => (
  <section class={styles.Section} {...props} />
);

export const SectionHeader: ParentComponent = (props) => (
  <header class={styles.SectionHeader} {...props} />
);

export const SectionContent: ParentComponent = (props) => (
  <main class={styles.SectionContent} {...props} />
);

export const SectionTitle: ParentComponent = (props) => (
  <h2 class={styles.SectionTitle} {...props} />
);
