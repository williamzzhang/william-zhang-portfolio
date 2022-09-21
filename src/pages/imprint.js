import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ImprintPage() {
  return (
    <>
      <Seo title="License" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="imprint" heading="License" />
      </Page>
    </>
  );
}
