import React from "react";
import { PropsWithChildren } from "react";
import * as styles from "./Resume.module.css";

type ResumeItemHeaderProps = PropsWithChildren<{ from: string; to: string }>;

export const Resume: React.FC<PropsWithChildren> = (props) => (
  <dl {...props} className={styles.Resume} />
);

export const ResumeDownload: React.FC<PropsWithChildren> = (props) => (
  <a {...props} className={styles.ResumeDownload} />
);

export const ResumeHeader: React.FC<PropsWithChildren> = (props) => (
  <header {...props} className={styles.ResumeHeader} />
);

export const ResumeHilights: React.FC<PropsWithChildren> = (props) => (
  <h2 {...props} className={styles.ResumeHilights} />
);

export const ResumeItem: React.FC<PropsWithChildren> = (props) => (
  <>{props.children}</>
);

export const ResumeItemContent: React.FC<PropsWithChildren> = (props) => (
  <dd {...props} className={styles.ResumeItemContent} />
);

export const ResumeItemHeader = ({
  from,
  to,
  children,
}: ResumeItemHeaderProps) => (
  <dt className={styles.ResumeItemHeader}>
    <ResumeItemHeaderPeriod>
      <time>{from}</time> - <time>{to}</time>
    </ResumeItemHeaderPeriod>
    <ResumeItemHeaderPosition>{children}</ResumeItemHeaderPosition>
  </dt>
);

export const ResumeItemHeaderPeriod: React.FC<PropsWithChildren> = (props) => (
  <h4 {...props} className={styles.ResumeItemHeaderPeriod} />
);

export const ResumeItemHeaderPosition: React.FC<PropsWithChildren> = (
  props
) => <h3 {...props} className={styles.ResumeItemHeaderPosition} />;

export const ResumeSection: React.FC<PropsWithChildren> = (props) => (
  <section {...props} className={styles.ResumeSection} />
);

export const ResumeTitle: React.FC<PropsWithChildren> = (props) => (
  <h2 {...props} className={styles.ResumeTitle} />
);
