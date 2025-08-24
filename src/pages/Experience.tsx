import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Cloud Engieering Intern",
      company: "Mitchell's Logistics LLC",
      location: "San Francisco, CA",
      period: "June - July 2024",
      description: "Lead Cloud Development for ML Academy Learning Management System (LMS), focusing on the Backend and architecture of the platform. Also assisted in the Market and User Research, along with the design of the Frontend and course modules.",
      achievements: [
        "Created the hosting architecture of the product completely on Virtual machines using Azure tools like Virtual Machines",
        "Hosted the LMS on a Linux Virtual Machine using Moodle LMS application and Bash for scripting and interacting with the Linux VM",
        "Co-led a team of 5 interns on the project, assiting the project management (using Asana) and designing the frontend",
        "Assisted in the implementation of the recommendation system for the course modules"
      ],
      skills: ["Azure", "Bash", "LMS", "Asana", "Recommendation systems"]
    },
    {
      title: "Research and Development Intern",
      company: "Center for Energy Regulation, IITK",
      location: "IIT Kanpur, Kanpur, UP",
      period: "May - July 2023",
      description: "Development and Management of Regulatory Tracker",
      achievements: [
        "ImplementedWeb Scraping for gathering data of uploaded documents on various ERC websites using requests, Beautiful Soup and Selenium libraries in Python",
        "Successfully implemented Hashing procedure using the SHA256 algorithm in order to identify and differentiate documents that have not yet been uploaded in the CER Server with a 99% accuracy",
        "Successfully created a Natural Language Processing Model for categorization of new documents being uploaded on the CER Server using the Names and Categories data of 9250 documents provided"
      ],
      skills: ["Web Scraping", "Hashing", "Natural Language Processing"]
    },

  ]
  const pors = [
    {
      title: "Head | Show Management",
      company: "Inter IIT Sports Meet 2024, IIT Kanpur",
      period: "August to December 2024",
      description: "Led the Show Management vertical of the InterIIT Sports Meet",
      achievements: [
        "Created the hosting architecture of the product completely on Virtual machines using Azure tools like Virtual Machines",
        "Hosted the LMS on a Linux Virtual Machine using Moodle LMS application and Bash for scripting and interacting with the Linux VM",
        "Co-led a team of 5 interns on the project, assiting the project management (using Asana) and designing the frontend",
        "Assisted in the implementation of the recommendation system for the course modules"
      ],
      skills: []
    },
    {
      title: "Organizer | Events",
      company: "Antaragni 2023",
      location: "IIT Kanpur, Kanpur, UP",
      period: "July to October 2023",
      description: "Organization and management of Anime Convention in Institute's Cultural fest",
      achievements: [
        "Leading a 3-tier team of 20+ students responsible for organizing first iteration of AniCon during the fest,",
        "Hosted and conducted one of India’s largest Anime Convention and managed a Budget over 2 Lacs",
        "Ideated the first ever college level Anime Convention with upto 100 participants and reach of 20,000+",
        "Collaborated with various organisations to bring in sponsorships worth Rs. 2 Lakhs and future collaborations",
        "Helped manage other events throughout the fest, as well as in the hospitality and MnP verticals"
      ],
      skills: []
    },
    {
      title: "Coordinator | Anime Society",
      company: "Media and Cultural Council, IIT Kanpur",
      period: "May 2023 to April 2024",
      description: "Led the management of activities of the Anime Club",
      achievements: [
        "Leading a 2-tier team of 25 secretaries responsible for conducting various club activities throughout the year",
        "Conducted First College level Anime Convention in partnership with Antaragni, IITK & gathered sponsorship worth Rs. 2 Lakh",
        "Managed the official Instagram Handle and other handles of the society increasing its reach by over 60%",
        "Organized and managed a large scale offline events like quizzes and screenings for campus junta"
      ],
      skills: []
    },

  ];

  const education = [
    {
      degree: "Masters + Bachelor of Technology, Mechanical Engineering",
      school: "Indian Institute of Technology, Kanpur",
      period: "December 2021 to July 2026",
      description: "The Masters is focused on Active Turbulence, primarily focusing on activity based patterning of Active Materials. The Bachelors was focused majorly on the basics of mechanical engineering, including concepts from Stuctural Mechanics, Dynamics, Thermodynamics, Fluid Mechanics, Engineering Design, and Manufacturing and Material Studies."
    },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that are shaping my life into something new everyday.
          </p>
        </div>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" />
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                    <span className="font-medium">{exp.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        {/* positions of responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" />
            Positions of Responsibilities
          </h2>
          
          <div className="space-y-8">
            {pors.map((exp, index) => (
              <Card key={index} className="p-6 bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-card-gradient shadow-soft">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary">{edu.degree}</h3>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <span className="font-medium text-muted-foreground">{edu.school}</span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Experience;