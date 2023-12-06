import React, { PropsWithChildren } from "react";
import "./Body.css";
import "./Fonts.css";

export const Page: React.FC<PropsWithChildren> = ({ children }) => (
  <>{children}</>
);
