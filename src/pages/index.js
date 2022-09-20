import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Section,
  Animation,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
          <HeroSection sectionId="Me" />
        <Animation type="fadeUp">
          <AboutSection sectionId="About" heading="About Portfolio Minimal" />
        </Animation>
        <Animation type="fadeUp">
                <Section heading="Experiences">
                    <p>You can add your custom JSX here.</p>
                    </Section>
            </Animation>
        <InterestsSection sectionId="Skills" heading="Skills" />
        <InterestsSection sectionId="Interests" heading="Interests" />
        <ProjectsSection sectionId="Projects" heading="Projects" />
        <ContactSection sectionId="Contact Me" heading="Contact Me" />
      </Page>
    </>
  );
}
