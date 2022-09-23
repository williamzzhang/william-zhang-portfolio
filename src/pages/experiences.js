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
     <b>{props.skill1} | {props.skill2} | {props.skill3}</b>
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
                        bullet1= "Consulted with clients to help them identify, manage, and respond to brand, financial, and catastrophic risks that could undermine their competitive position and jeopardize their critical assets, reputation or financial health" 
                        bullet2= "Assisted clients with defining and implementing strategies to manage their attack surface focusing on the continuous discovery, inventory, classification and monitoring of an organization's IT infrastructure" 
                        bullet3= "Conducted engagements for both public and private clients spanning industries such as software, telecommunications, real estate and mining."
                        skill1= "Communication"
                        skill2= "Attention to detail"
                        skill3= "Patience"
                        />
            <Experience position="Android Engineer Intern" company="Zennea Technologies" 
                        location= "Vancouver, BC" startDate="Jan 2021" endDate= "August 2021"
                        bullet1= "Created front-end app layouts for all systems (login, profile, device connection, and therapy) with Kotlin in Android Studio using reusable components, following SOLID object-oriented (OOP) principles" 
                        bullet2= "Implemented Firebase for user authentication services, managing user data, and sending notifications" 
                        bullet3= "Leveraged 3rd party APIs for login flow (Facebook, Google), configured Bluetooth Low Energy (BLE) technology to facilitate device connection with Zennea's wearable device, presented app demos to company"
                        skill1= "Kotlin"
                        skill2= "Firebase"
                        skill3= "API"
                        />
            <Experience position="Academic Tutor" company="Hillhouse Education" 
                        location= "Vancouver, BC" startDate="June 2020" endDate= "March 2021"
                        bullet1= "Prepared lessons and learning materials ahead of time, ensured students stay on task and all material is covered during the session and that students are adequately prepared by their exam date" 
                        bullet2= "Adjusted teaching style to accommodate for all ages, English proficiencies and learning speeds" 
                        bullet3= "Identified what is holding students back from fully understanding a subject, before starting to provide solutions"
                        skill1= "Communication"
                        skill2= "Time management"
                        skill3= "Problem-solving"
                        />                        
            <h1 style={{paddingTop: 40}}>Extracurricular Involvements</h1>
            <Experience position="Blueprint Conference Director" company="UBC BizTech"
                        location= "Vancouver, BC" startDate="May 2022" endDate= "Sep 2022"
                        bullet1= "Spearheaded BizTech's flagship conference with over 200 students and professional delegates in attendance winning Conference of the Year at the CUS Awards Night" 
                        bullet2= "Delegated tasks and worked with BizTech team of over 30 people to organize and delivered a keynote speaker, panel discussion, and 9 unique workshops over the two day conference " 
                        bullet3= "Pitched conference idea to raise over $5,000 worth of funding from various sponsor companies and grant organizations"
                        skill1= "Leadership"
                        skill2= "Teamwork"
                        skill3= "Adaptability"
                        />
            <Experience position="Warrant Officer Second Class" company="Royal Canadian Air Cadets"
                        location= "Vancouver, BC" startDate="Sep 2013" endDate= "Aug 2019"
                        bullet1= "Awarded Lord Strathcona Medal for Perosnal Fitness and Military Familiarization" 
                        bullet2= "Achieved 2nd highest rank in program, attended both pilot scholarship programs: Glider Pilot (2017) and Power Pilot (2018)" 
                        bullet3= "Selected for International Air Cadet Exchange Program to Australia (2019)"
                        skill1= "Discipline"
                        skill2= "Leadership"
                        skill3= "Mentorship"
                        />            
            </Section>
            </Page>
        </>
    );
    }