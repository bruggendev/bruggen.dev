import * as styles from "./Content.module.css";
import { BareLogoImage } from "./bruggen.logo";
import React, { PropsWithChildren } from "react";

export const Header: React.FC<PropsWithChildren> = (props) => (
  <header className={styles.Header} {...props} />
);

export const Logo: React.FC<PropsWithChildren> = (props) => (
  <div className={styles.Logo} {...props} />
);
export const LogoImage: React.FC<PropsWithChildren> = (props) => (
  <BareLogoImage className={styles.LogoImage} {...props} />
);
export const LogoTitle: React.FC<PropsWithChildren> = (props) => (
  <h1 className={styles.LogoTitle} {...props} />
);
export const Introduction: React.FC<PropsWithChildren> = (props) => (
  <div className={styles.Introduction} {...props} />
);
export const ContactButton: React.FC<PropsWithChildren> = (props) => (
  <a className={styles.ContactButton} {...props} />
);
export const Section: React.FC<PropsWithChildren> = (props) => (
  <section className={styles.Section} {...props} />
);
export const SectionHeader: React.FC<PropsWithChildren> = (props) => (
  <header className={styles.SectionHeader} {...props} />
);
export const SectionContent: React.FC<PropsWithChildren> = (props) => (
  <main className={styles.SectionContent} {...props} />
);
export const SectionTitle: React.FC<PropsWithChildren> = (props) => (
  <h2 className={styles.SectionTitle} {...props} />
);
