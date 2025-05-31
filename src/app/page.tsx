
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Linkedin, Github, Instagram, AtSign, CodeXml, Palette, FileCode2, ServerCog, Database, GitFork, Container, PenTool, ExternalLink, Brain, DatabaseZap, AppWindow, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample Data (replace with your actual data)
const projectData = [
  {
    title: 'AI Powered E-commerce Platform',
    description: 'A full-stack e-commerce site with AI-driven product recommendations and personalized shopping experiences.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'e-commerce ai',
    projectUrl: '#',
    techStack: ['Next.js', 'Genkit', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'Interactive Data Visualization Dashboard',
    description: 'A web application for visualizing complex datasets with interactive charts and filters, built with React and D3.js.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard data',
    projectUrl: '#',
    techStack: ['React', 'D3.js', 'Node.js', 'ShadCN UI'],
  },
  {
    title: 'Mobile-First Social Networking App',
    description: 'A cross-platform mobile app focusing on local community engagement, featuring real-time chat and event organization.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile social',
    projectUrl: '#',
    techStack: ['React Native', 'Firebase', 'TypeScript'],
  },
];

const skillsData = {
  frontend: [
    { name: 'HTML5', icon: <CodeXml className="w-10 h-10" /> },
    { name: 'CSS3', icon: <Palette className="w-10 h-10" /> },
    { name: 'JavaScript (ES6+)', icon: <FileCode2 className="w-10 h-10" /> },
    { name: 'TypeScript', icon: <FileCode2 className="w-10 h-10" /> },
    { name: 'React', icon: <CodeXml className="w-10 h-10" /> },
    { name: 'Next.js', icon: <AppWindow className="w-10 h-10" /> },
    { name: 'Tailwind CSS', icon: <Palette className="w-10 h-10" /> },
  ],
  backend: [
    { name: 'Node.js', icon: <ServerCog className="w-10 h-10" /> },
    { name: 'Express.js', icon: <ServerCog className="w-10 h-10" /> },
    { name: 'Python', icon: <Terminal className="w-10 h-10" /> },
    { name: 'Genkit', icon: <Brain className="w-10 h-10" /> },
  ],
  databases: [
    { name: 'MongoDB', icon: <Database className="w-10 h-10" /> },
    { name: 'PostgreSQL', icon: <Database className="w-10 h-10" /> },
    { name: 'Firebase', icon: <DatabaseZap className="w-10 h-10" /> },
  ],
  tools: [
    { name: 'Git & GitHub', icon: <GitFork className="w-10 h-10" /> },
    { name: 'Docker', icon: <Container className="w-10 h-10" /> },
    { name: 'VS Code', icon: <CodeXml className="w-10 h-10" /> },
    { name: 'Figma', icon: <PenTool className="w-10 h-10" /> },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, url: '#' },
  { name: 'GitHub', icon: <Github className="w-6 h-6" />, url: '#' },
  { name: 'Threads', icon: <AtSign className="w-6 h-6" />, url: '#' },
  { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, url: '#' },
];

interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  details: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "KoTai Australia (Remote)",
    dates: "Apr 2025 – Present",
    details: [
      "Developed and maintained responsive web apps and CMS platforms using WordPress, PHP, and JavaScript.",
      "Automated WordPress blog publishing workflows to save time and reduce manual effort.",
      "Integrated third-party APIs (e.g., payment gateways, social sharing tools) for added site functionality.",
      "Optimised site performance, SEO, and mobile responsiveness.",
      "Built community platforms and e-commerce sites targeting Korean markets using GnuBoard."
    ]
  },
  {
    title: "Software Developer",
    company: "R2reKorea (Remote)",
    dates: "May 2023 – July 2024",
    details: [
      "Led full project lifecycle from planning to deployment, creating web and mobile app solutions.",
      "Applied strong debugging and testing strategies to deliver clean, maintainable code.",
      "Embraced continuous learning to stay updated on frameworks and best practices."
    ]
  },
  {
    title: "Disability Justice Coordinator",
    company: "Department of Families, Fairness and Housing (VIC, Australia)",
    dates: "Aug 2024 – Jan 2025",
    details: [
      "Advocated for clients within the legal system; liaised with stakeholders under pressure.",
      "Developed strategic plans based on complex assessments — skills mirrored in problem-solving during dev projects."
    ]
  },
  {
    title: "Local Area Coordinator",
    company: "Latrobe Community Health Services (VIC, Australia)",
    dates: "May 2021 – Apr 2023",
    details: [
      "Conducted needs-based assessments and coordinated cross-functional support.",
      "Refined stakeholder communication and planning — vital for translating client requirements into software features."
    ]
  },
  {
    title: "Mental Health Practitioner",
    company: "Mind Australia (VIC, Australia)",
    dates: "Nov 2020 – Nov 2021",
    details: [
      "Facilitated structured programs and collaborated with multidisciplinary teams.",
      "Cultivated empathy and team-based problem solving that now strengthens dev collaboration."
    ]
  },
  {
    title: "Aircraft Maintenance Engineer",
    company: "Republic of Korea Air Force (Chungju-si, South Korea)",
    dates: "Mar 2010 – Feb 2017",
    details: [
      "Performed technical diagnostics and repairs in high-stakes environments.",
      "Developed strong attention to detail, precision, and teamwork under strict protocols.",
      "Equipped with strong “can-do” and “never-give-up” mindset."
    ]
  }
];

interface EducationItem {
  dates: string;
  degree: string;
  institution: string;
  location: string;
}

const educationData: EducationItem[] = [
  {
    dates: "Jan 2025 – Apr 2025",
    degree: "Full Stack Web Development with AI features Bootcamp",
    institution: "Le Wagon",
    location: "Australia"
  },
  {
    dates: "Jun 2018 – Aug 2020",
    degree: "Master’s degree, Social Work",
    institution: "Flinders University",
    location: "South Australia"
  },
  {
    dates: "Mar 2014 - Aug 2016",
    degree: "Master’s degree, Public Administration",
    institution: "Yonsei University",
    location: "South Korea"
  },
  {
    dates: "Aug 2011 - Aug 2013",
    degree: "Bachelor’s degree, Computer Science",
    institution: "National Institute for Lifelong Education",
    location: "South Korea"
  }
];


export default function HomePage() {
  const [activeAboutTab, setActiveAboutTab] = useState<'experience' | 'education'>('experience');
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);

  const SkillCategory = ({ title, skills }: { title: string, skills: { name: string, icon: React.ReactNode }[] }) => (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="p-3 mb-3 rounded-full bg-accent/10 text-accent">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-center text-foreground">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const ExperienceEntry = ({ experience }: { experience: ExperienceItem }) => (
    <div className="mb-6">
      <h4 className="text-lg font-medium text-foreground">{experience.title} - {experience.company}</h4>
      <p className="text-sm text-muted-foreground">{experience.dates}</p>
      <ul className="list-disc list-inside mt-2 text-foreground/80 space-y-1 pl-4">
        {experience.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary">
        <div className="text-center p-4">
          <h1 className="text-5xl font-bold text-primary mb-4">Welcome to Devfolio</h1>
          <p className="text-xl text-foreground mb-8">Your journey to an amazing developer portfolio starts here.</p>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-16">About Me</h2>
          <div className="max-w-3xl mx-auto mb-8 bg-card p-8 rounded-xl shadow-xl">
            <p className="text-lg text-foreground leading-relaxed mb-8 text-left">
              Problem-solver at heart with a strong focus on building clean, user-friendly, and efficient web applications. 
              Not just a Developer but state of the art AI-savvy Developer with an excellent ability to use and keep up to date with new AI tools for maximising efficiency, automation and performance with a strong foundation in full-stack development, automation, and API integration. 
              Background in health care, customer service with high-pressure, collaborative environments brings strong analytical thinking, interpersonal communication, and adaptability to every project.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Button
                onClick={() => setActiveAboutTab('experience')}
                variant={activeAboutTab === 'experience' ? 'default' : 'outline'}
                className="gap-2"
              >
                <Briefcase /> Experience
              </Button>
              <Button
                onClick={() => setActiveAboutTab('education')}
                variant={activeAboutTab === 'education' ? 'default' : 'outline'}
                className="gap-2"
              >
                <GraduationCap /> Education & Certs
              </Button>
            </div>

            {activeAboutTab === 'experience' && (
              <div className="text-left space-y-6 p-6 bg-secondary/50 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Professional Experience</h3>
                {experienceData.slice(0, 2).map((exp, index) => (
                  <ExperienceEntry key={index} experience={exp} />
                ))}
                
                {experienceData.length > 2 && (
                  <Button 
                    onClick={() => setIsExperienceExpanded(!isExperienceExpanded)} 
                    variant="outline" 
                    className="w-full mt-4"
                  >
                    {isExperienceExpanded ? 'Show Less Experience' : 'Show More Experience'}
                    {isExperienceExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </Button>
                )}

                {isExperienceExpanded && experienceData.slice(2).map((exp, index) => (
                  <ExperienceEntry key={index + 2} experience={exp} />
                ))}
              </div>
            )}

            {activeAboutTab === 'education' && (
              <div className="text-left space-y-6 p-6 bg-secondary/50 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Education & Certifications</h3>
                {educationData.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-lg font-medium text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.dates}</p>
                    <p className="text-foreground/80 mt-1">{edu.institution}, {edu.location}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-secondary">
         <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectData.map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl">
                <CardHeader className="p-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </CardHeader>
                <CardContent className="flex-grow p-6 space-y-3">
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-foreground/80 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="pt-2">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1">TECH STACK:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 bg-muted/50">
                  <Button asChild variant="default" className="w-full gap-2">
                    <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Skills & Tech Stack</h2>
          <div className="max-w-5xl mx-auto">
            <SkillCategory title="Frontend Development" skills={skillsData.frontend} />
            <SkillCategory title="Backend Development" skills={skillsData.backend} />
            <SkillCategory title="Databases" skills={skillsData.databases} />
            <SkillCategory title="Tools & Platforms" skills={skillsData.tools} />
            <p className="mt-12 text-sm text-muted-foreground">
              Note: Icons are representative. For a richer display, consider replacing them with official SVG logos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Get In Touch</h2>
          <p className="text-lg text-foreground max-w-xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
            Feel free to reach out!
          </p>
          <div className="bg-card p-8 rounded-xl shadow-xl max-w-md mx-auto">
            {/* Placeholder for a contact form - can be built out later */}
            <div className="mb-8">
              <p className="text-foreground">
                The best way to reach me is via email at: <a href="mailto:your.email@example.com" className="text-accent hover:underline font-medium">your.email@example.com</a>
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-primary mb-4">Connect with me:</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`My ${social.name} profile`}
                  className="text-foreground hover:text-accent transition-colors duration-300 p-2 rounded-full hover:bg-accent/10"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

