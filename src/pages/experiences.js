import React from "react";
import { Page, Seo, Section} from 'gatsby-theme-portfolio-minimal';

function Experience(props) {
    return (
    <>
    <p><h3>{props.position} @ <i>{props.company}</i></h3> 
    <div></div>
    <b>{props.location}—{props.startDate} to{" "}{props.endDate}</b>
    <div></div>
    <ul>
        <li>{props.bullet1}</li>
        <li>{props.bullet2}</li>
        <li>{props.bullet3}</li>
    </ul>
     <div></div>
     {props.skill1} | {props.skill2} | {props.skill3}
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
            <Experience position="Risk Advisory Analyst" company="Deloitte" 
                        location= "Vancouver, BC" startDate="May 2022" endDate= "Sep 2022"
                        bullet1= "a" 
                        bullet2= "b" 
                        bullet3= "c"
                        skill1= "Communication"
                        skill2= "Teamwork"
                        skill3= "Consulting"
                        />
            <Experience position="Android Engineer Intern" company="Zennea Technologies" 
                        location= "Vancouver, BC" startDate="May 2022" endDate= "Sep 2022"
                        bullet1= "a" 
                        bullet2= "b" 
                        bullet3= "c"
                        skill1= "Communication"
                        skill2= "Teamwork"
                        skill3= "Consulting"
                        />
            <Experience position="Risk Advisory Analyst" company="Deloitte" 
                        location= "Vancouver, BC" startDate="May 2022" endDate= "Sep 2022"
                        bullet1= "a" 
                        bullet2= "b" 
                        bullet3= "c"
                        skill1= "Communication"
                        skill2= "Teamwork"
                        skill3= "Consulting"
                        />                        
            <h1 style={{paddingTop: 40}}>Extracurricular Involvements</h1>
            <Experience position="Blueprint Conference Director" company="UBC BizTech"
                        location= "Vancouver, BC" startDate="May 2022" endDate= "Sep 2022"
                        bullet1= "a" 
                        bullet2= "b" 
                        bullet3= "c"
                        skill1= "Communication"
                        skill2= "Teamwork"
                        skill3= "Consulting"
                        />
            <Experience position="Blueprint Conference Director" company="UBC BizTech"
                        location= "Vancouver, BC" startDate="May 2022" endDate= "Sep 2022"
                        bullet1= "a" 
                        bullet2= "b" 
                        bullet3= "c"
                        skill1= "Communication"
                        skill2= "Teamwork"
                        skill3= "Consulting"
                        />            
            </Section>
            </Page>
        </>
    );
    }