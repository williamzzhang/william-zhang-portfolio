import React from "react";
import { Page, Seo, Section} from 'gatsby-theme-portfolio-minimal';

export default function Experiences() {
    return (
        <>
            <Seo title="Experiences" />
            <Page useSplashScreenAnimation>
            <Section sectionId="Work Experiences" heading="Work Experiences">
            <p>You can add your custom JSX here.</p>
            </Section>
            <Section sectionId="Volunteer Experiences" heading="Volunteer Experiences">
            <p>You can add your custom JSX here.</p>
            </Section>
            </Page>
        </>
    );
}