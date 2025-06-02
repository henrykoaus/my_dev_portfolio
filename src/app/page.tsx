
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { 
  Briefcase, GraduationCap, Linkedin, Github, Instagram, AtSign, 
  CodeXml, Palette, FileCode2, ServerCog, Database, GitFork, 
  PenTool, ExternalLink, Brain, AppWindow, Terminal, 
  ChevronDown, ChevronUp, Gem, Smartphone, Cloud, CloudCog, Server, 
  LayoutPanelTop, Store, LayoutGrid, ShoppingCart, ImageIcon as ImageIconLucide,
  NotebookText, ClipboardList, SearchCheck, TerminalSquare, 
  Waypoints, Blocks, Zap, Gauge, Rocket, MonitorSmartphone, Laptop, UploadCloud, HardDrive,
  Accessibility as AccessibilityIcon
} from 'lucide-react';

const projectData = [
  {
    title: 'DTWash (DoorToWash)',
    description: 'DoorToWash is a convenient laundry delivery service like laundry version of Uber/AirBnb thus it has customer side and service provider side, using Google Cloud Vision AI for photo recognition to tell about the clothes for the laundry including types and colours of the clothes.',
    projectUrl: 'https://dtwash-henry-46d72d94ed50.herokuapp.com/',
    techStack: ['Ruby on Rails', 'PostgreSQL', 'Google Cloud Vision AI', 'Bootstrap', 'Hotwire', 'Heroku', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Tripnomad - Automated Blog Publisher',
    description: 'Developed a custom automation tool for WordPress that streamlines blog post creation and scheduling using PHP, WordPress hooks, and custom functions. Reduced manual workload and improved content publishing consistency.',
    projectUrl: 'https://www.tripnomad.net/',
    techStack: ['WordPress', 'AWS EC2', 'Linux', 'Apache', 'MariaDB (MySQL)', 'PHP', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'R2re (ReturnToRestaurant)',
    description: 'R2:re (Return to Restaurant) is a platform that connects restaurant owners and customers, helping diners enjoy more meals at better value while boosting sales and customer loyalty for businesses. It supports small food businesses and revitalizes the dining market through smart rewards and engagement. Inspired by Australia’s Liven, R2:re drives innovation in Korea’s restaurant culture.',
    projectUrl: '#', 
    appStoreUrl: 'https://apps.apple.com/au/app/알투레/id6483616989', 
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.r2rekorea.r2re&pcampaignid=web_share', 
    techStack: ['Dart', 'Flutter', 'Google Cloud Platform', 'Firebase', 'Node.js', 'Express.js'],
  },
  {
    title: 'R2reOwner',
    description: "R2reOwner is the companion app for R2:re (Return to Restaurant), designed specifically for restaurant owners and managers. It provides tools to manage listings, track customer engagement, redeem rewards, and analyze business performance, empowering them to optimize their operations and grow their customer base through the R2:re platform.",
    projectUrl: '#',
    appStoreUrl: 'https://apps.apple.com/au/app/알투레사장님/id6497567753', 
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.r2rekorea.r2reowner&pcampaignid=web_share',
    techStack: ['Dart', 'Flutter', 'Google Cloud Platform', 'Firebase', 'Node.js', 'Express.js'],
  },
];

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategoryData {
  title: string;
  skills: SkillItem[];
}

const skillsDataCategorized: SkillCategoryData[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "HTML", icon: <CodeXml className="w-10 h-10" /> },
      { name: "CSS/SCSS", icon: <Palette className="w-10 h-10" /> },
      { name: "JavaScript", icon: <FileCode2 className="w-10 h-10" /> },
      { name: "TypeScript", icon: <FileCode2 className="w-10 h-10" /> },
      { name: "React", icon: <AppWindow className="w-10 h-10" /> },
      { name: "Next.js", icon: <AppWindow className="w-10 h-10" /> },
      { name: "Node.js", icon: <ServerCog className="w-10 h-10" /> },
      { name: "Express.js", icon: <ServerCog className="w-10 h-10" /> },
      { name: "Ruby", icon: <Gem className="w-10 h-10" /> },
      { name: "Ruby on Rails", icon: <Gem className="w-10 h-10" /> },
      { name: "PHP", icon: <FileCode2 className="w-10 h-10" /> },
      { name: "SQL", icon: <Database className="w-10 h-10" /> },
      { name: "Dart", icon: <Smartphone className="w-10 h-10" /> },
      { name: "Flutter", icon: <Smartphone className="w-10 h-10" /> },
      { name: "Vue.js", icon: <AppWindow className="w-10 h-10" /> },
      { name: "jQuery", icon: <FileCode2 className="w-10 h-10" /> },
    ]
  },
  {
    title: "Development Tools & Platforms",
    skills: [
      { name: "VS Code", icon: <MonitorSmartphone className="w-10 h-10" /> },
      { name: "Git", icon: <GitFork className="w-10 h-10" /> },
      { name: "GitHub", icon: <Github className="w-10 h-10" /> },
      { name: "Command Line Tools", icon: <TerminalSquare className="w-10 h-10" /> },
      { name: "Android Studio", icon: <Smartphone className="w-10 h-10" /> },
      { name: "Xcode", icon: <Laptop className="w-10 h-10" /> },
      { name: "Firebase", icon: <Cloud className="w-10 h-10" /> },
      { name: "Google Cloud Platform", icon: <CloudCog className="w-10 h-10" /> },
      { name: "AWS (EC2)", icon: <CloudCog className="w-10 h-10" /> },
      { name: "Heroku", icon: <UploadCloud className="w-10 h-10" /> },
      { name: "Apache", icon: <Server className="w-10 h-10" /> },
      { name: "Termius", icon: <Terminal className="w-10 h-10" /> },
      { name: "FileZilla", icon: <UploadCloud className="w-10 h-10" /> },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MariaDB (MySQL)", icon: <Database className="w-10 h-10" /> },
      { name: "PostgreSQL", icon: <Database className="w-10 h-10" /> },
      { name: "SQLite", icon: <HardDrive className="w-10 h-10" /> },
      { name: "Sequel Pro", icon: <Database className="w-10 h-10" /> },
    ]
  },
  {
    title: "CMS & E-commerce",
    skills: [
      { name: "WordPress", icon: <LayoutPanelTop className="w-10 h-10" /> },
      { name: "WooCommerce", icon: <ShoppingCart className="w-10 h-10" /> },
      { name: "GnuBoard", icon: <LayoutGrid className="w-10 h-10" /> },
      { name: "App Store Deployment", icon: <Store className="w-10 h-10" /> },
      { name: "Google Play Deployment", icon: <Store className="w-10 h-10" /> },
    ]
  },
  {
    title: "UI/UX, Design & Productivity",
    skills: [
      { name: "Figma", icon: <PenTool className="w-10 h-10" /> },
      { name: "Canva", icon: <ImageIconLucide className="w-10 h-10" /> },
      { name: "Notion", icon: <NotebookText className="w-10 h-10" /> },
      { name: "Jira", icon: <ClipboardList className="w-10 h-10" /> },
    ]
  },
  {
    title: "Methodologies & Best Practices",
    skills: [
      { name: "MVC", icon: <Waypoints className="w-10 h-10" /> },
      { name: "OOP", icon: <Blocks className="w-10 h-10" /> },
      { name: "Web Performance Opt.", icon: <Gauge className="w-10 h-10" /> },
      { name: "Accessibility (A11y)", icon: <AccessibilityIcon className="w-10 h-10" /> },
      { name: "SEO", icon: <SearchCheck className="w-10 h-10" /> },
    ]
  },
  {
    title: "Specialized & Other Skills",
    skills: [
      { name: "Genkit (AI)", icon: <Brain className="w-10 h-10" /> },
      { name: "Google Cloud Vision AI", icon: <CloudCog className="w-10 h-10" /> },
      { name: "WordPress Automation", icon: <Zap className="w-10 h-10" /> },
      { name: "Hybrid Mobile Apps", icon: <Smartphone className="w-10 h-10" /> },
      { name: "SaaS Publishing", icon: <Rocket className="w-10 h-10" /> },
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', icon: <Linkedin className="w-8 h-8" />, url: 'https://www.linkedin.com/in/henry-jung-10017129b/' },
  { name: 'GitHub', icon: <Github className="w-8 h-8" />, url: 'https://github.com/henrykoaus' },
  { name: 'Threads', icon: <AtSign className="w-8 h-8" />, url: 'https://www.threads.com/@tripnomad210' }, 
  { name: 'Instagram', icon: <Instagram className="w-8 h-8" />, url: 'https://www.instagram.com/tripnomad210/' },
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
  const [areAllSkillsShown, setAreAllSkillsShown] = useState(false);
  const initialVisibleSkillCategories = 1; 
  const [showTechStack, setShowTechStack] = useState<Record<number, boolean>>({});
  const [isAboutMeExpanded, setIsAboutMeExpanded] = useState(false);

  const toggleTechStackVisibility = (index: number) => {
    setShowTechStack(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const SkillCard = ({ name, icon }: SkillItem) => (
    <div className="flex flex-col items-center p-4 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="p-3 mb-3 rounded-full bg-accent/10 text-accent">
        {icon}
      </div>
      <span className="text-sm font-medium text-center text-foreground">{name}</span>
    </div>
  );
  
  const SkillCategoryDisplay = ({ title, skills }: SkillCategoryData) => (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );

  const ExperienceEntry = ({ experience }: { experience: ExperienceItem }) => (
    <div className="mb-8"> 
      <h4 className="text-lg font-semibold text-primary">{experience.title}</h4>
      <p className="text-md font-medium text-foreground/90 mb-1">{experience.company}</p>
      <p className="text-sm text-muted-foreground mb-2">{experience.dates}</p>
      <div className="text-foreground/80 space-y-3"> 
        {experience.details.map((detail, i) => (
          <p key={i} className="leading-relaxed">{detail}</p> 
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary">
        <div className="text-center p-4">
          <h1 className="text-5xl font-bold text-primary mb-4">Welcome to Henry's Dev Portfolio</h1>
          <p className="text-xl text-foreground mb-8">You can start getting to know me from here. You are always welcome to reach out 😎</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/#contact">Contact me</Link>
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-primary mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-xl shadow-xl">
            <div className="mb-8">
              <Image
                src="/profile-image.png" 
                alt="Henry Jung profile picture"
                width={180}
                height={180}
                className="rounded-full mx-auto shadow-lg object-cover"
                priority 
              />
            </div>
            <div className="text-lg text-foreground leading-relaxed text-left space-y-6 mb-8">
              <p className="text-center">🇦🇺 🏘️ 🇰🇷</p>
              <p>
                G'day! I’m an AI-savvy Software Developer with an excellent ability to use and keep up to date with new AI tools for maximising efficiency, automation and performance, and also a great fun communicator who gets motivated by ongoing communication and active interactions with colleagues.
              </p>
              <p>
                I am passionate about building tools and systems that make life simpler — from responsive web apps to hybrid mobile applications and workflow automations. I specialise in creating clean, maintainable solutions that not only function smoothly behind the scenes but also enhance real-world usability.
              </p>

              <Button 
                onClick={() => setIsAboutMeExpanded(!isAboutMeExpanded)} 
                variant="outline" 
                className="w-full mt-4 mb-4"
              >
                {isAboutMeExpanded ? 'See Less' : 'See More'}
                {isAboutMeExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>

              {isAboutMeExpanded && (
                <>
                  <p>
                    Lately, I’ve been exploring automation in WordPress blog posting, low-maintenance web systems, and integration of third-party APIs to deliver fast, scalable, and user-friendly solutions. I enjoy every phase of the dev cycle — from planning and coding to problem-solving and optimisation.
                  </p>
                  <p>
                    My path into tech is unique. I bring a strong foundation from high-pressure roles in government, social services and healthcare sectors, where I developed sharp problem-solving skills, empathy, and resilience. These experiences taught me how to communicate across disciplines, stay composed under stress, and continuously learn — traits that now make me a better developer and collaborator.
                  </p>
                  <p>
                    I’m always excited to connect with others in tech — whether you’re building the next big thing, automating the boring stuff, or just want to geek out over clean code. Let’s connect!
                  </p>
                </>
              )}
            </div>
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
                <h3 className="text-xl font-semibold text-primary mb-6">Professional Experience</h3>
                {experienceData.slice(0, 1).map((exp, index) => (
                  <ExperienceEntry key={index} experience={exp} />
                ))}
                
                {experienceData.length > 1 && (
                  <Button 
                    onClick={() => setIsExperienceExpanded(!isExperienceExpanded)} 
                    variant="outline" 
                    className="w-full mt-4"
                  >
                    {isExperienceExpanded ? 'See Less' : 'See More'}
                    {isExperienceExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </Button>
                )}

                {isExperienceExpanded && experienceData.slice(1).map((exp, index) => (
                  <ExperienceEntry key={index + 1} experience={exp} />
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
         <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectData.map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-xl">
                <CardContent className="flex-grow p-6 space-y-3 pt-6">
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-foreground/80 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs font-semibold text-muted-foreground">TECH STACK:</h4>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleTechStackVisibility(index)}
                            className="p-1 h-fit text-muted-foreground hover:text-accent"
                            aria-expanded={!!showTechStack[index]}
                            aria-controls={`tech-stack-${index}`}
                        >
                            {showTechStack[index] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            <span className="sr-only">{showTechStack[index] ? 'Hide' : 'Show'} tech stack</span>
                        </Button>
                    </div>
                    {showTechStack[index] && (
                        <div id={`tech-stack-${index}`} className="flex flex-wrap gap-1.5">
                        {project.techStack.map(tech => (
                            <span key={tech} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">{tech}</span>
                        ))}
                        </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 bg-card/50 dark:bg-card/20">
                  {(project as any).appStoreUrl || (project as any).googlePlayUrl ? (
                    <div className="flex flex-col sm:flex-row w-full gap-2">
                      {(project as any).appStoreUrl && (project as any).appStoreUrl !== '#' && (
                        <Button asChild variant="default" className="flex-1 gap-2">
                          <Link href={(project as any).appStoreUrl} target="_blank" rel="noopener noreferrer">
                            <Store className="w-4 h-4" /> App Store
                          </Link>
                        </Button>
                      )}
                      {(project as any).googlePlayUrl && (project as any).googlePlayUrl !== '#' && (
                        <Button asChild variant="default" className="flex-1 gap-2">
                          <Link href={(project as any).googlePlayUrl} target="_blank" rel="noopener noreferrer">
                            <Store className="w-4 h-4" /> Google Play
                          </Link>
                        </Button>
                      )}
                      {(!((project as any).appStoreUrl && (project as any).appStoreUrl !== '#') && 
                        !((project as any).googlePlayUrl && (project as any).googlePlayUrl !== '#')) &&
                        project.projectUrl && project.projectUrl !== '#' && (
                         <Button asChild variant="default" className="w-full gap-2">
                            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                              View Project <ExternalLink className="w-4 h-4" />
                            </Link>
                          </Button>
                      )}
                       {(!((project as any).appStoreUrl && (project as any).appStoreUrl !== '#') && 
                        !((project as any).googlePlayUrl && (project as any).googlePlayUrl !== '#')) &&
                        !(project.projectUrl && project.projectUrl !== '#') && (
                          <p className="text-sm text-muted-foreground w-full text-center">More details soon.</p>
                      )}
                    </div>
                  ) : (
                    project.projectUrl && project.projectUrl !== '#' ? (
                      <Button asChild variant="default" className="w-full gap-2">
                        <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                          View Project <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    ) : (
                       <p className="text-sm text-muted-foreground w-full text-center">More details soon.</p>
                    )
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Skills &amp; Tech Stack</h2>
          <div className="max-w-5xl mx-auto">
            {skillsDataCategorized.slice(0, initialVisibleSkillCategories).map((category) => (
              <SkillCategoryDisplay key={category.title} title={category.title} skills={category.skills} />
            ))}

            {skillsDataCategorized.length > initialVisibleSkillCategories && (
              <Button
                onClick={() => setAreAllSkillsShown(!areAllSkillsShown)}
                variant="outline"
                className="w-full mt-0 mb-8" 
              >
                {areAllSkillsShown ? 'See Less' : 'See More'}
                {areAllSkillsShown ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>
            )}

            {areAllSkillsShown && skillsDataCategorized.slice(initialVisibleSkillCategories).map((category) => (
              <SkillCategoryDisplay key={category.title} title={category.title} skills={category.skills} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Get In Touch</h2>
          <p className="text-lg text-foreground max-w-xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
            Feel free to reach out!
          </p>
          <div className="bg-card p-8 rounded-xl shadow-xl max-w-md mx-auto">
            <div className="mb-8">
              <p className="text-foreground">
                The best way to reach me is via email at: <a href="mailto:henrykor210@gmail.com" className="text-accent hover:underline font-medium">henrykor210@gmail.com</a>
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

    

    