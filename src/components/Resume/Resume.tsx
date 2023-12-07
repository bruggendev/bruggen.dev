import { ParentComponent } from "solid-js";
import * as styles from "./Resume.module.css";

export const Resume: ParentComponent = (props) => (
  <dl {...props} class={styles.Resume} />
);

export const ResumeDownload: ParentComponent<{ href: string }> = (props) => (
  <a download {...props} class={styles.ResumeDownload} />
);

export const ResumeHeader: ParentComponent = (props) => (
  <header {...props} class={styles.ResumeHeader} />
);

export const ResumeHilights: ParentComponent = (props) => (
  <h2 {...props} class={styles.ResumeHilights} />
);

export const ResumeItem: ParentComponent = (props) => <>{props.children}</>;

export const ResumeItemContent: ParentComponent = (props) => (
  <dd {...props} class={styles.ResumeItemContent} />
);

export const ResumeItemHeader: ParentComponent<{
  from: string;
  to: string;
}> = ({ from, to, children }) => (
  <dt class={styles.ResumeItemHeader}>
    <ResumeItemHeaderPeriod>
      <time>{from}</time> - <time>{to}</time>
    </ResumeItemHeaderPeriod>
    <ResumeItemHeaderPosition>{children}</ResumeItemHeaderPosition>
  </dt>
);

export const ResumeItemHeaderPeriod: ParentComponent = (props) => (
  <h4 {...props} class={styles.ResumeItemHeaderPeriod} />
);

export const ResumeItemHeaderPosition: ParentComponent = (props) => (
  <h3 {...props} class={styles.ResumeItemHeaderPosition} />
);

export const ResumeSection: ParentComponent = (props) => (
  <section {...props} class={styles.ResumeSection} />
);

export const ResumeTitle: ParentComponent = (props) => (
  <h2 {...props} class={styles.ResumeTitle} />
);
