import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Page } from "../components/Page/Page";
import {
  ContactButton,
  Introduction,
  Logo,
  Header,
  SectionContent,
  LogoImage,
  LogoTitle,
} from "../components/Content/Content";
import { Availability } from "../components/Availability/Availability";
import {
  Resume,
  ResumeDownload,
  ResumeHeader,
  ResumeHilights,
  ResumeItem,
  ResumeItemContent,
  ResumeItemHeader,
  ResumeSection,
  ResumeTitle,
} from "../components/Resume/Resume";
import { Greeting } from "../components/Greeting/Greeting";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Page>
      <Availability>
        Available from January 1st 2024 ·{" "}
        <a href="mailto:contact@bruggen.dev">contact me</a>
      </Availability>
      <Header>
        <Logo>
          <LogoImage />
          <LogoTitle>bruggen</LogoTitle>
        </Logo>
        <Introduction>
          <Greeting></Greeting>
          <p>
            I’m Jesse Dijkstra, freelance fullstack product developer with a
            specialisation in frontend and user experience design.
          </p>
          <ContactButton href="mailto:contact@bruggen.dev">
            contact@bruggen.dev
          </ContactButton>
        </Introduction>
      </Header>

      <ResumeSection>
        <ResumeHeader>
          <ResumeTitle>Experience</ResumeTitle>
          <ResumeDownload
            download
            href="/downloads/Jesse Dijkstra - Fullstack Developer - Resume.pdf"
          >
            Download resume
          </ResumeDownload>
        </ResumeHeader>
        <SectionContent>
          <Resume>
            <ResumeItem>
              <ResumeItemHeader from="April 2023" to="Current">
                <strong>Frontend Developer (Freelance)</strong> at{" "}
                <strong>UMC Utrecht</strong>
              </ResumeItemHeader>
              <ResumeItemContent>
                <p>
                  Freelance frontend developer at UMC Utrecht to build a
                  consolidated search for laboratories to offer provisions from
                  six different labs.
                </p>
                <ResumeHilights>Technologies:</ResumeHilights>
                <ul>
                  <li>React</li>
                  <li>.NET Core</li>
                  <li>SASS</li>
                </ul>
              </ResumeItemContent>
            </ResumeItem>
            <ResumeItem>
              <ResumeItemHeader from="April 2023" to="August 2023">
                <strong>Head of Product &amp; Development</strong> at{" "}
                <strong>Twelve</strong>
              </ResumeItemHeader>
              <ResumeItemContent>
                <p>
                  Restructuring and reorganizing the product & development
                  organization for Twelve. Spearheaded the organizational change
                  needed to merge two companies and product portfolios and
                  restructured the leadership organization to empower employees
                  to make quick decisions without the need for management.
                </p>
                <ResumeHilights>Hilights:</ResumeHilights>
                <ul>
                  <li>Restructured leadership organization</li>
                  <li>
                    Created general roadmap for consolidating the two core
                    products
                  </li>
                </ul>
              </ResumeItemContent>
            </ResumeItem>
            <ResumeItem>
              <ResumeItemHeader from="February 2020" to="April 2023">
                <strong>Senior Product Owner</strong> at{" "}
                <strong>DPG Media</strong>
              </ResumeItemHeader>
              <ResumeItemContent>
                <p>
                  Product owner for three teams that work on products for 35
                  newspapers and magazines ranging from smaller publications to
                  larger ones. Created an in-house content planning and
                  collaborative article editor from the ground with an article
                  display module to consistently display articles on both app
                  and web for all 35 brands.
                </p>
                <ResumeHilights>Hilights:</ResumeHilights>
                <ul>
                  <li>
                    Decreased production issues from multiple daily incidents to
                    a weekly average
                  </li>
                  <li>
                    Migrated from on-prem services to AWS. Transitioned from
                    tightly coupled to loosely coupled maintainable architecture
                  </li>
                  <li>
                    Stabilized the velocity and predictability of the output of
                    the development teams
                  </li>
                  <li>
                    Coached teams and stakeholders to focus on achieving goals
                    instead of individual tasks. Ad Interim responsibility for
                    architecture for 3 squads
                  </li>
                </ul>
              </ResumeItemContent>
            </ResumeItem>
            <ResumeItem>
              <ResumeItemHeader from="January 2018" to="February 2018">
                <strong>Senior Fullstack Developer</strong> at{" "}
                <strong>DPG Media</strong>
              </ResumeItemHeader>
              <ResumeItemContent>
                <p>
                  Senior fullstack developer specialized in frontend development
                  for quality journalism. Focus on creating an article display
                  module to consistently display articles for all 35 brands in
                  DPG Media with Java, NodeJS, React, React Native and
                  Typescript.
                </p>
                <p>
                  Spearheaded building a new collaborative article editor within
                  the editorial content planning systems and introduced
                  Typescript and micro-frontends within the editorial systems.
                </p>
                <ResumeHilights>Technologies:</ResumeHilights>
                <ul>
                  <li>AWS</li>
                  <li>Cypress</li>
                  <li>React</li>
                  <li>React-Native</li>
                  <li>NodeJS</li>
                  <li>Typescript</li>
                  <li>MongoDB</li>
                  <li>ElasticSearch</li>
                  <li>Java</li>
                  <li>SpringBoot</li>
                </ul>
              </ResumeItemContent>
            </ResumeItem>
            <ResumeItem>
              <ResumeItemHeader from="August 2016" to="January 2018">
                <strong>Senior Fullstack Developer</strong> at{" "}
                <strong>Defacto</strong>
              </ResumeItemHeader>
              <ResumeItemContent>
                <p>
                  Product developer specialized in building large scalable
                  single page applications. Heavily involved in tasks ranging
                  from product development and user experience design to
                  application architecture.
                </p>
                <p>
                  Primary tasks include maintaining code quality and standards
                  for a Elixir/Phoenix application and setting up and driving
                  recruitment efforts and migrating to latest EmberJS for
                  various applications.
                </p>
                <p>
                  Authored CellJS, ex_cell and ex_css_modules to improve the
                  frontend development workflow for the new flagship Phoenix
                  product for Defactor.
                </p>
                <ResumeHilights>Technologies:</ResumeHilights>
                <ul>
                  <li>PostgreSQL</li>
                  <li>Heroku</li>
                  <li>EmberJS</li>
                  <li>Elixir</li>
                  <li>Phoenix</li>
                  <li>Ruby</li>
                  <li>Ruby on Rails</li>
                </ul>
              </ResumeItemContent>
            </ResumeItem>

            <ResumeItem>
              <ResumeItemHeader from="February 2013" to="August 2016">
                <strong>Lead Frontend Developer</strong> at{" "}
                <strong>Blendle</strong>
              </ResumeItemHeader>
              <ResumeItemContent>
                <p>
                  First employee and core contributor on various projects.
                  Involved in conceptualization of key features, UX, frontend
                  and backend.
                </p>
                <p>
                  Core developer of two of our flagship projects from the ground
                  up and driving force in developing frontend testing
                  strategies.
                </p>
                <p>
                  Closely involved in hiring and training of new frontend
                  developers and developed various strategies on how hiring
                  should be implemented in a fast growing company.
                </p>
                <ResumeHilights>Technologies:</ResumeHilights>
                <ul>
                  <li>BackboneJS</li>
                  <li>React</li>
                  <li>AWS</li>
                  <li>HAL/JSON</li>
                  <li>Ruby</li>
                  <li>Sinatra</li>
                  <li>Clojure</li>
                  <li>Python</li>
                </ul>
              </ResumeItemContent>
            </ResumeItem>
          </Resume>
        </SectionContent>
      </ResumeSection>
    </Page>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
