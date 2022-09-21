import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function indexPage() {
  return (
    <>
      <Seo title="williamzhang.dev" />
      <Page useSplashScreenAnimation>
        <HeroSection  sectionId="Me" />
        <AboutSection sectionId="About" heading="About Me" />
        <InterestsSection sectionId="Skills" heading="Skills & Interests" />
        <ContactSection sectionId="Contact" heading="Contact" />
      </Page>
    </>
  );
}
