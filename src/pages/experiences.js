import React from "react";
import { Page, Seo, Section} from 'gatsby-theme-portfolio-minimal';

function Experience(props) {
    return (
    <>
    <p><h3>{props.position} @ <i>{props.company}</i><img src={props.logo} alt={props.alt} style={{maxHeight: 42, paddingTop: 25}}/></h3> 
    <div></div>
    <b>{props.location}—{props.startDate} to{" "}{props.endDate}</b>
    <div></div>
    <ul>
        <li>{props.bullet1}</li>
        <li>{props.bullet2}</li>
        <li>{props.bullet3}</li>
    </ul>
     <div></div>
    </p>
    </>
    );
  }

export default function Experiences() {
    return (
        <>
            <Seo title="Experiences" />
            <Page useSplashScreenAnimation>
            <Section sectionId="Work Experiences" heading="Work Experiences">
            <Experience position="Risk Advisory Analyst" company="" logo="Deloitte_logo.png" alt="Deloitte Logo"
                        location= "Vancouver, BC" startDate="May 2022" endDate= "Sep 2022"
                        bullet1= "a" 
                        bullet2= "b" 
                        bullet3= "c"
                        />
            <h1 style={{paddingTop: 40}}>Extracurricular Involvements</h1>
            <Experience position="Blueprint Conference Director" company="" logo="Group 274.png" alt="BizTech Logo"
                        location= "Vancouver, BC" startDate="May 2022" endDate= "Sep 2022"
                        bullet1= "a" 
                        bullet2= "b" 
                        bullet3= "c"
                        />
            </Section>
            </Page>
        </>
    );
    }