import React, { PropsWithChildren } from "react";
import { Body, Main } from "./style";

const Page: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Body />
    <Main>{children}</Main>
  </>
);

export default Page;
