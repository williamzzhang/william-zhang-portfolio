import React from "react";
import {
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function AllProjectsPage() {
  return (
    <>
      <Seo title="williamzhang.dev" />
      <Page>
      <ProjectsSection sectionId="AllProjects" heading="All Projects" />
      </Page>
    </>
  );
}
