export default function SamplePreview(){
    return (
        <section className="container col-md-5">
            <div className="p-3 mx-auto">
                <div className="mr-auto">
                    <h1 className="header-name">John Doe</h1>
                    <p ><span ><strong >Email:</strong></span> john.doe&#64;gmail.com, <span ><strong >Contact:</strong></span>+11234567890, <span ><strong >Github:</strong></span>https://github.com/jdoe/, <span ><strong >LinkedIn:</strong></span>https://linkedin.com/us/johndoe/ </p>
                </div>
                <div className="resume-body">
                    <div className="technical_skills_section">
                        <h2 className="section-name"><b >Technical Skills</b></h2>
                        <p > Angular, React, SpringBoot, Node.js, PostgreSQL, Redis, MongoDB, Docker, K8S, System Design, Design Patterns, AWS, GCP, Jenkins </p>
                    </div>
                    <div className="education_section">
                        <h2 className="section-name"><strong >Education</strong></h2>
                        <div className="ng-star-inserted">
                            <li ><strong >Bachelor's Degree</strong> in <strong >Computer Science and Engineering</strong> from PQR University,[ <strong >May 12, 2017 - May 30, 2013, 9.20 </strong>] </li>
                        </div>
                    </div>
                    <div className="experience_section">
                        <h2 className="section-name"><strong >Experience</strong></h2>
                        <div className="ng-star-inserted">
                            <li ><strong >Microsoft (Lead Developer, February 7, 2022 - Present ) </strong><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis dictum sem, at rhoncus nisi maximus a. Ut pulvinar risus sed risus elementum, at euismod ante dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis dictum sem, at rhoncus nisi maximus a. Ut pulvinar risus sed risus elementum, at euismod ante dapibus. </li>
                        </div>
                    </div>
                    <div className="project_section">
                        <h2 className="section-name"><strong >Project</strong></h2>
                        <div className="ng-star-inserted">
                            <li ><strong >Project Title 1</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis dictum sem, at rhoncus nisi maximus a. Ut pulvinar risus sed risus elementum, at euismod ante dapibus. Nam dictum eget felis sit amet sodales. Donec commodo gravida ipsum ac convallis. Aenean metus dolor, vehicula nec pellentesque non. https://example.com </li>
                        </div>
                    </div>
                    <div className="hobbies_section">
                        <h2 className="section-name"><strong >Extra Curriculars / Hobbies</strong></h2>
                        <div className="ng-star-inserted">
                            <li > Ed turpis neque, pulvinar ac posuere eget, elementum sed dui. Mauris condimentum augue sed orci eleifend, sed blandit odio dignissim. Duis pharetra venenatis purus non semper. </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}