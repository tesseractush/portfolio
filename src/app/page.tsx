import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Download, Mountain, Palette, BookOpen, Settings, Briefcase, GraduationCap, Code, Users, FileText, BrainCircuit, BarChart, Twitter, Instagram, CodeSquare } from 'lucide-react'; // Added CodeSquare for Leetcode
import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

export default function Home() {
  const GITHUB_BASE_URL = "https://github.com/tesseractush/";
  const projectLinks: { [key: string]: string } = {
    "Processimo – AI Agent Marketplace": GITHUB_BASE_URL + "processimo-backend", // Example link, replace with actual repo if available
    "News Aggregator API (Spring Boot)": GITHUB_BASE_URL + "news-aggregator", // Example link
    "Employee Tracking System": GITHUB_BASE_URL + "employee-tracking", // Example link
    "Library Management System": GITHUB_BASE_URL + "library-management", // Example link
    "Smart Parking Lot System": GITHUB_BASE_URL + "smart-parking", // Example link
    "TaskMaster – Collaborative Task Tracking": GITHUB_BASE_URL + "taskmaster", // Example link
    "default": GITHUB_BASE_URL, // Default link if specific repo not found
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Logo className="h-8 w-8" />
          Mrityunjay Srivastava
        </Link>
        <ThemeToggle />
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48"> {/* Removed gradient */}
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-primary/70 pb-2">
              Hi, I’m Mrityunjay Srivastava
            </h1>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl xl:text-5xl/none text-foreground/80 mb-4">
              Full Stack Developer & AI Automation Engineer
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto mb-6">
              Crafting intelligent solutions and robust backends to drive innovation and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="kbc-button">
                 {/* Apply kbc-button class here */}
                <Link href="#projects">
                  View My Work
                </Link>
              </Button>
              {/* Update with actual resume link */}
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" download="Mrityunjay_Srivastava_Resume.pdf" className="kbc-button">
                  <Download className="mr-2 h-4 w-4" /> Download Résumé
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-3">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20">
                {/* Replace with actual photo URL */}
                <AvatarImage src="https://picsum.photos/200" alt="Mrityunjay Srivastava" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold mb-2">About Me</h3>
              <p className="text-muted-foreground mb-4">
                With 3 years of experience in Java/Spring Boot, I transitioned into the exciting field of Generative AI in 2025. I'm passionate about building scalable systems and leveraging AI to automate complex processes.
              </p>
              <div className="flex gap-2 justify-center lg:justify-start mb-4">
                <Mountain className="h-5 w-5 text-muted-foreground" title="Mountaineering" />
                <Palette className="h-5 w-5 text-muted-foreground" title="Digital Art" />
                <BookOpen className="h-5 w-5 text-muted-foreground" title="Reading" />
              </div>
               {/* Social Media Links */}
               <div className="flex gap-4 justify-center lg:justify-start mt-4">
                  <Link href="https://github.com/tesseractush" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://linkedin.com/in/mrityunjay-srivastava-851197171" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                     <span className="sr-only">LinkedIn</span>
                  </Link>
                  <a href="mailto:tesseractush@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </a>
                   <Link href="https://x.com/Mrityun60045254" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" />
                     <span className="sr-only">Instagram</span>
                  </Link>
                   <Link href="https://leetcode.com/your-leetcode" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <CodeSquare className="h-6 w-6" /> {/* Using CodeSquare for Leetcode */}
                     <span className="sr-only">LeetCode</span>
                  </Link>
                </div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-2xl font-bold text-center lg:text-left">Core Strengths</h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glassmorphism-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Settings className="h-5 w-5 text-foreground" /> Backend Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80">Java, Spring Boot, MySQL, REST APIs, Microservices, Kubernetes, AWS.</p>
                  </CardContent>
                </Card>
                 <Card className="glassmorphism-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BrainCircuit className="h-5 w-5 text-foreground" /> AI Automation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80">Langchain, Langchain4j, n8n, LLM Agents, Multi-Agent Systems, FastAPI, Agent Orchestration.</p>
                  </CardContent>
                </Card>
                 <Card className="glassmorphism-card col-span-1 md:col-span-2"> {/* Span full width on small, half on medium+ */}
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BarChart className="h-5 w-5 text-foreground" /> Data Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80">Metrics-driven decision-making, Root-cause analysis, Performance Optimization.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32"> {/* Removed background */}
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Project Cards - Wrapped with Link */}
              <Link href={projectLinks["Processimo – AI Agent Marketplace"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block">
                <ProjectCard
                  title="Processimo – AI Agent Marketplace"
                  role="Founder & AI Automation Architect"
                  techStack="FastAPI, React, n8n, PostgreSQL, Tailwind, OAuth, VPS"
                  description="Platform for subscribing to and customizing AI agents with an admin dashboard for workflow management, usage tracking, and tiered pricing."
                  highlights={["AI Agent Preview", "Workflow Versioning", "Custom AI Requests", "Secure User Auth"]}
                  className="h-full" // Ensure card fills the link height
                />
              </Link>
               <Link href={projectLinks["News Aggregator API (Spring Boot)"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block">
                 <ProjectCard
                   title="News Aggregator API (Spring Boot)"
                   role="Backend API Developer"
                   techStack="Java, Spring Boot, REST, MySQL"
                   description="REST API to fetch, filter, and serve news from various sources with features like category filtering, sorting, pagination, and rate-limiting."
                   highlights={["Category Endpoints", "Performance Optimization", "Scalable Design"]}
                   className="h-full"
                 />
               </Link>
               <Link href={projectLinks["Employee Tracking System"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block">
                <ProjectCard
                  title="Employee Tracking System"
                  role="Full-Stack Developer"
                  techStack="Java, Spring Boot, Thymeleaf, MySQL"
                  description="System for managing employee records, attendance, leave, and project allocation with role-based dashboards and reporting."
                  highlights={["HR Dashboard", "CRUD Operations", "CSV Export", "Role-Based Access"]}
                  className="h-full"
                />
               </Link>
               <Link href={projectLinks["Library Management System"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block">
                <ProjectCard
                  title="Library Management System"
                  role="Backend Developer"
                  techStack="Java, Spring Boot, JPA, MySQL"
                  description="Manages book catalog, issuing/returning books, fines, and user roles with real-time availability and overdue alerts."
                  highlights={["Rule-based Fines", "Inventory Logging", "Search Functionality"]}
                  className="h-full"
                />
               </Link>
               <Link href={projectLinks["Smart Parking Lot System"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block">
                <ProjectCard
                  title="Smart Parking Lot System"
                  role="System Designer & Backend Engineer"
                  techStack="Java, Spring Boot, MySQL, Microservices"
                  description="IoT-ready backend for managing smart parking slots, sensors, reservations, and availability checks using a microservices architecture."
                  highlights={["Dynamic Slot Allocation", "Availability Prediction", "Modular APIs"]}
                  className="h-full"
                />
              </Link>
               <Link href={projectLinks["TaskMaster – Collaborative Task Tracking"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block">
                <ProjectCard
                  title="TaskMaster – Collaborative Task Tracking"
                  role="Full-Stack Engineer"
                  techStack="Java, Spring Boot, Thymeleaf/React, MySQL, Spring Security"
                  description="Kanban-style task tracking system for teams with projects, task assignments, deadlines, and status tracking."
                  highlights={["Project Boards", "Deadline Indicators", "Team Collaboration", "Activity Logs"]}
                  className="h-full"
                />
               </Link>
            </div>
          </div>
        </section>

        <Separator />

         {/* Professional Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Professional Experience</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
               <ExperienceItem
                role="Generative AI Engineer (Founder)"
                company="Processimo"
                duration="Mar 2025 – Present"
                points={[
                  "Architected and developed an end-to-end AI agent marketplace platform.",
                  "Integrated n8n workflows for customizable AI agent automation.",
                  "Designed tiered subscription models and implemented secure user authentication (OAuth).",
                  "Managed deployment and scaling on a VPS infrastructure."
                ]}
              />
              <ExperienceItem
                role="Backend Java Developer"
                company="Cognizant"
                duration="Jan 2022 – Dec 2024"
                points={[
                  "Diagnosed and resolved critical production issues in a global application, enhancing performance and stability.",
                  "Developed a Financial Expenditure Management System for real-time tracking and reporting.",
                  "Built a Purchase Request Management Tool automating procurement workflows with audit logging.",
                  "Mentored 5+ junior engineers on clean code, microservices, and agile methodologies."
                ]}
              />
               <ExperienceItem
                role="Data Science and Business Analytics Intern"
                company="The Sparks Foundation (Remote)"
                duration="May 2022 – July 2022"
                points={[
                  "Applied machine learning models (SVM, Random Forest, XGBoost) for predictive tasks.",
                  "Analyzed complex datasets using advanced querying, visualization, and analytics tools.",
                  "Developed insights to support data-driven business decisions."
                ]}
              />
            </div>
          </div>
        </section>

        <Separator />

        {/* Education & Certifications Section */}
        <section id="education" className="w-full py-12 md:py-24 lg:py-32"> {/* Removed background */}
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Education & Certifications</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
               <Card className="glassmorphism-card">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-foreground" /> B.Tech Computer Science & Engineering</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-card-foreground/80">Uttarakhand Technical University, 2021</p>
                 </CardContent>
               </Card>
               <Card className="glassmorphism-card">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5 text-foreground" /> Generative AI Nanodegree</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-card-foreground/80">Udacity Scholarship (Completed 2024)</p>
                 </CardContent>
               </Card>
            </div>
          </div>
        </section>

         <Separator />

         {/* Open Source & Community Section */}
        <section id="community" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
             <h2 className="text-3xl font-bold tracking-tighter mb-10">Open Source & Community</h2>
             <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex flex-col items-center">
                  <Code className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">GitHub Contributions</h3>
                  <p className="text-muted-foreground mb-2">Active contributor to AI and backend projects.</p>
                   <Button variant="link" asChild>
                     <a href="https://github.com/tesseractush" target="_blank" rel="noopener noreferrer" className="kbc-button">
                       <Github className="mr-2 h-4 w-4" /> View Repositories
                     </a>
                   </Button>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
                   <p className="text-muted-foreground">Sharing knowledge via n8n workflows & LangChain discussions.</p>
                   <p className="text-muted-foreground">Mentoring peers on Udacity forums.</p>
                 </div>
             </div>
           </div>
         </section>

        <Separator />

        {/* Contact Section */}
         <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-accent/80 to-accent/90 text-accent-foreground dark:from-accent/70 dark:to-accent/80">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Let's Work Together</h2>
            <p className="max-w-[600px] text-accent-foreground/90 md:text-xl mx-auto mb-8">
              Interested in collaborating or discussing a project? Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               {/* Replace with your actual Calendly link */}
              <Button variant="secondary" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer" className="kbc-button">
                  Schedule a Call
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-accent-foreground/50 text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground">
                <a href="mailto:tesseractush@gmail.com" className="kbc-button">
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t bg-background"> {/* Ensure footer has background */}
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mrityunjay Srivastava. All rights reserved.</p>
           {/* Footer links removed as they are moved under bio */}
           <div></div> {/* Placeholder for spacing if needed */}
        </div>
      </footer>
    </div>
  );
}


// Project Card Component
interface ProjectCardProps {
  title: string;
  role: string;
  techStack: string;
  description: string;
  highlights: string[];
  className?: string; // Added className prop
}

// Make the ProjectCard component accept a className and apply glassmorphism
function ProjectCard({ title, role, techStack, description, highlights, className }: ProjectCardProps) {
  return (
    <Card className={cn("flex flex-col glassmorphism-card", className)}> {/* Apply glassmorphism and custom class */}
      <CardHeader>
        <CardTitle className="text-card-foreground">{title}</CardTitle> {/* Adjusted text color for contrast */}
        <CardDescription className="text-card-foreground/70">{role}</CardDescription> {/* Adjusted text color */}
        <p className="text-sm text-card-foreground/60 pt-1"><strong>Tech:</strong> {techStack}</p> {/* Adjusted text color */}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <p className="text-sm mb-4 text-card-foreground/80">{description}</p> {/* Adjusted text color */}
        <div>
          <h4 className="font-semibold mb-1 text-sm text-card-foreground">Highlights:</h4> {/* Adjusted text color */}
          <ul className="list-disc list-inside text-sm text-card-foreground/70 space-y-1"> {/* Adjusted text color */}
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

// Experience Item Component
interface ExperienceItemProps {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

function ExperienceItem({ role, company, duration, points }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 border-l-2 border-primary/20">
        {/* Timeline Dot */}
        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-background dark:border-black"></div>
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="text-muted-foreground font-medium">{company}</p>
        <p className="text-sm text-muted-foreground mb-2">{duration}</p>
        <ul className="list-disc list-outside pl-5 text-muted-foreground space-y-1 text-sm">
            {points.map((point, index) => (
            <li key={index}>{point}</li>
            ))}
        </ul>
    </div>
  );
}
