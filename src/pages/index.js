import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Section,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="Me" />
        <AboutSection sectionId="About" heading="About Me" />
        <Section sectionId="Experiences" heading="Experiences">
        <p>You can add your custom JSX here.</p>
        </Section>
        <InterestsSection sectionId="Skills" heading="Skills" />
        <InterestsSection sectionId="Interests" heading="Interests" />
        <ProjectsSection sectionId="Projects" heading="Projects" />
        <ContactSection sectionId="Contact" heading="Contact" />
      </Page>
    </>
  );
}
