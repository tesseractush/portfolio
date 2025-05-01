import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Download, Mountain, Palette, BookOpen, Settings, Briefcase, GraduationCap, Code, Users, FileText, BrainCircuit, BarChart, Twitter, Instagram, SquareCode, UserCheck, Calendar, MessageSquare } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ContactCard } from '@/components/contact-card'; // Import ContactCard

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

  const skills = [
    // Backend
    "Java", "Spring Boot", "MySQL", "REST", "Microservices", "Kubernetes", "AWS", "JPA", "Thymeleaf", "Spring Security", "PostgreSQL", "FastAPI", "Oauth",
    // AI Automation
    "Langchain", "Langchain4j", "n8n", "LLM Agents", "Multi-Agent Systems",
    // Data Analytics
    "Metrics-driven decision-making", "Root-cause analysis", "Performance Optimization",
    // Specific Project Skills derived from Tech Stacks
    "System Design", "Low Level Design", "High Level Design", "Microservices Architecture", "Workflow Orchestration", 
    // Additional Project Tech
    "Thymeleaf/React",
  ];
  // Remove duplicates and sort
  const uniqueSkills = Array.from(new Set(skills)).sort();


  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Logo className="h-8 w-8" />
        </Link>
        <ThemeToggle />
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="absolute inset-0 overflow-hidden -z-10">
             {/* Dotted background is applied globally via globals.css */}
          </div>
          <div className="container mx-auto px-4 md:px-6 text-center relative"> {/* Added mx-auto */}
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
              <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "kbc-button")}>
                 View My Work
              </a>
              <a href="/resume.pdf" download="Mrityunjay_Srivastava_Resume.pdf" className={cn(buttonVariants({ size: "lg" }), "kbc-button")}>
                <Download className="mr-2 h-4 w-4" /> Download Résumé
              </a>
            </div>
          </div>
        </section>

       {/* About Me Section */}
         <section id="about" className="w-full py-12 md:py-24 lg:py-32">
           <div className="container px-4 md:px-6 max-w-4xl mx-auto">
             <div className="flex flex-col items-center"> {/* Center the content */}
               <div className="w-full max-w-xl bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                 {/* Cover Image Placeholder */}
                 <div className="h-48 bg-muted relative overflow-hidden">
                   <Image
                     src="https://github.com/tesseractush/portfolio/blob/main/public/cover.jpg?raw=true"
                     alt="Profile cover"
                     fill // Use fill instead of layout
                     style={{ objectFit: 'cover' }} // Use style for objectFit
                     priority
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                 </div>

                 {/* Profile Content */}
                 <div className="p-8 flex flex-col items-center -mt-16">
                   {/* Avatar */}
                   <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
                     <AvatarImage src="https://github.com/tesseractush/portfolio/blob/main/public/profile.jpg?raw=true" alt="Mrityunjay Srivastava" />
                     <AvatarFallback>MS</AvatarFallback>
                   </Avatar>

                   {/* Name & Title */}
                   <h1 className="text-2xl font-bold mt-4">Mrityunjay Srivastava</h1>
                   <p className="text-muted-foreground">Full Stack Developer & AI Automation Engineer</p>

                   {/* Bio/Intro */}
                   <p className="text-center text-muted-foreground mt-4 text-sm">
                     With 3 years of experience in Java/Spring Boot, I transitioned into the exciting field of Generative AI in 2025. I'm passionate about building scalable systems and leveraging AI to automate complex processes.
                   </p>

                   {/* Personal Interests */}
                   <div className="mt-6 w-full">
                     <h4 className="text-sm font-semibold mb-2 text-muted-foreground text-center">Interests</h4>
                     <div className="flex flex-wrap gap-2 justify-center">
                       <Badge variant="secondary" className="flex items-center gap-1.5 cursor-default">
                         <Mountain className="h-3 w-3" /> Mountaineering
                       </Badge>
                       <Badge variant="secondary" className="flex items-center gap-1.5 cursor-default">
                         <Palette className="h-3 w-3" /> Digital Art
                       </Badge>
                       <Badge variant="secondary" className="flex items-center gap-1.5 cursor-default">
                         <BookOpen className="h-3 w-3" /> Reading
                       </Badge>
                     </div>
                   </div>

                   {/* Connect Links */}
                   <div className="mt-6 w-full">
                     <h4 className="text-sm font-semibold mb-2 text-muted-foreground text-center">Connect</h4>
                     <div className="flex flex-wrap gap-4 justify-center">
                       <Link href="https://github.com/tesseractush" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="GitHub">
                         <Github className="h-5 w-5" />
                         <span className="sr-only">GitHub</span>
                       </Link>
                       <Link href="https://linkedin.com/in/tesseractush" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="LinkedIn">
                         <Linkedin className="h-5 w-5" />
                         <span className="sr-only">LinkedIn</span>
                       </Link>
                       <a href="mailto:tesseractush@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" title="Email">
                         <Mail className="h-5 w-5" />
                         <span className="sr-only">Email</span>
                       </a>
                       <Link href="https://x.com/tesseractush" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="Twitter">
                         <Twitter className="h-5 w-5" />
                         <span className="sr-only">Twitter</span>
                       </Link>
                       <Link href="https://instagram.com/tesseractush" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="Instagram"> {/* Add your instagram link */}
                         <Instagram className="h-5 w-5" />
                         <span className="sr-only">Instagram</span>
                       </Link>
                       <Link href="https://leetcode.com/tesseractush" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="LeetCode"> {/* Add your leetcode link */}
                         <SquareCode className="h-5 w-5" />
                         <span className="sr-only">LeetCode</span>
                       </Link>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>

        <Separator />

         {/* Core Strengths Section */}
        <section id="strengths" className="w-full py-12 md:py-24 lg:py-32">
           <div className="container px-4 md:px-6 mx-auto"> {/* Added mx-auto to center container */}
             <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Core Strengths & Skills</h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                 {/* Strength Cards */}
                 <Card className="glassmorphism-card lg:col-span-1">
                     <CardHeader>
                         <CardTitle className="flex items-center gap-2"><Settings className="h-5 w-5 text-card-foreground" /> Backend Development</CardTitle>
                     </CardHeader>
                     <CardContent>
                         <p className="text-card-foreground/80">Building robust, scalable, and maintainable server-side applications and APIs.</p>
                     </CardContent>
                 </Card>
                 <Card className="glassmorphism-card lg:col-span-1">
                     <CardHeader>
                         <CardTitle className="flex items-center gap-2"><BrainCircuit className="h-5 w-5 text-card-foreground" /> AI Automation</CardTitle>
                     </CardHeader>
                     <CardContent>
                         <p className="text-card-foreground/80">Leveraging Large Language Models and automation tools to create intelligent agents and streamline workflows.</p>
                     </CardContent>
                 </Card>
                 <Card className="glassmorphism-card lg:col-span-1">
                     <CardHeader>
                         <CardTitle className="flex items-center gap-2"><BarChart className="h-5 w-5 text-card-foreground" /> Data Analytics</CardTitle>
                     </CardHeader>
                     <CardContent>
                         <p className="text-card-foreground/80">Utilizing data analysis techniques for metrics-driven decision-making and performance optimization.</p>
                     </CardContent>
                 </Card>
              </div>

             {/* Skills Section */}
             <div className="max-w-5xl mx-auto mt-10 text-center"> {/* Centered */}
                <h3 className="text-2xl font-semibold tracking-tight mb-6">Technical Skills</h3>
                <div className="flex flex-wrap justify-center gap-2">
                   {uniqueSkills.map((skill, index) => (
                     <span key={index} className="kbc-button text-xs px-1.5 py-0.5 !min-h-0 !h-auto !leading-tight !font-normal cursor-default">
                       {skill}
                     </span>
                   ))}
                </div>
              </div>
           </div>
         </section>

        <Separator />

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto"> {/* Added mx-auto */}
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"> {/* Added max-w and mx-auto */}
              {/* Project Cards - Wrapped with Link */}
              <Link href={projectLinks["Processimo – AI Agent Marketplace"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block group">
                <ProjectCard
                  title="Processimo – AI Agent Marketplace"
                  role="Founder & AI Automation Architect"
                  techStack={["FastAPI", "React", "n8n", "PostgreSQL", "Tailwind", "OAuth", "VPS"]}
                  description="Platform for subscribing to and customizing AI agents with an admin dashboard for workflow management, usage tracking, and tiered pricing."
                  highlights={["AI Agent Preview", "Workflow Versioning", "Custom AI Requests", "Secure User Auth"]}
                  className="h-full" // Ensure card fills the link height
                />
              </Link>
               <Link href={projectLinks["News Aggregator API (Spring Boot)"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block group">
                 <ProjectCard
                   title="News Aggregator API (Spring Boot)"
                   role="Backend API Developer"
                   techStack={["Java", "Spring Boot", "REST", "MySQL"]}
                   description="REST API to fetch, filter, and serve news from various sources with features like category filtering, sorting, pagination, and rate-limiting."
                   highlights={["Category Endpoints", "Performance Optimization", "Scalable Design"]}
                   className="h-full"
                 />
               </Link>
               <Link href={projectLinks["Employee Tracking System"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block group">
                <ProjectCard
                  title="Employee Tracking System"
                  role="Full-Stack Developer"
                  techStack={["Java", "Spring Boot", "Thymeleaf", "MySQL"]}
                  description="System for managing employee records, attendance, leave, and project allocation with role-based dashboards and reporting."
                  highlights={["HR Dashboard", "CRUD Operations", "CSV Export", "Role-Based Access"]}
                  className="h-full"
                />
               </Link>
               <Link href={projectLinks["Library Management System"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block group">
                <ProjectCard
                  title="Library Management System"
                  role="Backend Developer"
                  techStack={["Java", "Spring Boot", "JPA", "MySQL"]}
                  description="Manages book catalog, issuing/returning books, fines, and user roles with real-time availability and overdue alerts."
                  highlights={["Rule-based Fines", "Inventory Logging", "Search Functionality"]}
                  className="h-full"
                />
               </Link>
               <Link href={projectLinks["Smart Parking Lot System"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block group">
                <ProjectCard
                  title="Smart Parking Lot System"
                  role="System Designer & Backend Engineer"
                  techStack={["Java", "Spring Boot", "MySQL", "Microservices"]}
                  description="IoT-ready backend for managing smart parking slots, sensors, reservations, and availability checks using a microservices architecture."
                  highlights={["Dynamic Slot Allocation", "Availability Prediction", "Modular APIs"]}
                  className="h-full"
                />
              </Link>
               <Link href={projectLinks["TaskMaster – Collaborative Task Tracking"] || projectLinks["default"]} target="_blank" rel="noopener noreferrer" className="block group">
                <ProjectCard
                  title="TaskMaster – Collaborative Task Tracking"
                  role="Full-Stack Engineer"
                  techStack={["Java", "Spring Boot", "Thymeleaf/React", "MySQL", "Spring Security"]}
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
          <div className="container px-4 md:px-6 mx-auto"> {/* Added mx-auto */}
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
                role="Associate"
                company="Cognizant"
                duration="Dec 2021 – Mar 2025"
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
        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto"> {/* Added mx-auto */}
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Education & Certifications</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
               <Card className="glassmorphism-card">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-card-foreground" /> B.Tech Computer Science & Engineering</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-card-foreground/80">Uttarakhand Technical University, 2021</p>
                 </CardContent>
               </Card>
               <Card className="glassmorphism-card">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5 text-card-foreground" /> Generative AI Nanodegree</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-card-foreground/80">Udacity Scholarship (Completed 2024)</p>
                 </CardContent>
               </Card>
                <Card className="glassmorphism-card">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-card-foreground" /> 10+2 </CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-card-foreground/80">Saraswati Vidya Mandir Sr. Sec. School</p>
                 </CardContent>
               </Card>

            </div>
          </div>
        </section>

         <Separator />

         {/* Open Source & Community Section */}
        <section id="community" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center mx-auto"> {/* Added mx-auto */}
             <h2 className="text-3xl font-bold tracking-tighter mb-10">Open Source & Community</h2>
             <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto"> {/* Added max-w and mx-auto */}
                <div className="flex flex-col items-center">
                  <Code className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">GitHub Contributions</h3>
                  <p className="text-muted-foreground mb-4">Active contributor to AI and backend projects.</p>
                   <a href="https://github.com/tesseractush" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "link" }), "kbc-button")}>
                       <Github className="mr-2 h-4 w-4" /> Github Profile
                   </a>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
                   <p className="text-muted-foreground mb-2">Sharing knowledge via n8n workflows & LangChain discussions.</p>
                   <div className="flex flex-col sm:flex-row gap-2"> {/* Container for buttons */}
                        <a href="https://community.n8n.io/u/tesseractush" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "link" }), "kbc-button")}>
                           <UserCheck className="mr-2 h-4 w-4" /> n8n Profile
                       </a>
                   </div>
                 </div>
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">HuggingFace Contributions</h3>
                   <p className="text-muted-foreground mb-2">Active Contributor and Learner in world of AI/ML</p>
                   <div className="flex flex-col sm:flex-row gap-2"> {/* Container for buttons */}
                        <a href="https://huggingface.co/tesseractush" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "link" }), "kbc-button")}>
                           <UserCheck className="mr-2 h-4 w-4" /> Huggingface Profile
                       </a>
                   </div>
                 </div>

             </div>
           </div>
         </section>

        

        {/* Contact Section - Updated Styling */}
         <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
           <div className="container px-4 md:px-6 mx-auto max-w-screen-lg"> {/* Constrain width */}
             <ContactCard className="p-8 md:p-12 lg:p-16"> {/* Use ContactCard component */}
               {/* Content */}
               <div className="relative z-10 text-center">
                 <h2 className="text-3xl font-bold tracking-tighter mb-6 text-foreground">Let's Work Together</h2>
                 <p className="max-w-[600px] text-foreground/80 md:text-xl mx-auto mb-8">
                   Interested in collaborating or discussing a project? Feel free to reach out.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "kbc-button bg-primary-foreground text-primary hover:bg-primary-foreground/90")}>
                      <Calendar className="mr-2 h-4 w-4" /> Schedule a Call
                    </a>
                    <a href="mailto:tesseractush@gmail.com" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "kbc-button border-foreground/30 text-foreground hover:bg-foreground/10 hover:text-foreground")}>
                      <Mail className="mr-2 h-4 w-4" /> Email Me
                    </a>
                 </div>
               </div>
             </ContactCard>
           </div>
         </section>


      </main>

      <footer className="py-6 border-t bg-background">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-center items-center text-sm text-muted-foreground"> {/* Centered content */}
          <p>&copy; {new Date().getFullYear()} Mrityunjay Srivastava. All rights reserved.</p>
          
        </div>
      </footer>
    </div>
  );
}


// Project Card Component
interface ProjectCardProps {
  title: string;
  role: string;
  techStack: string[];
  description: string;
  highlights: string[];
  className?: string;
}

// Updated ProjectCard to apply glassmorphism and tech stack styling
function ProjectCard({ title, role, techStack, description, highlights, className }: ProjectCardProps) {
  return (
    <Card className={cn(
        "flex flex-col glassmorphism-card transition-transform duration-200 ease-in-out group-hover:scale-[1.02] group-active:scale-[0.98]",
        className
     )}>
      <CardHeader>
        <CardTitle className="text-card-foreground">{title}</CardTitle>
        <CardDescription className="text-card-foreground/70">{role}</CardDescription>
         <div className="pt-1 flex flex-wrap gap-1"> {/* Adjusted padding and gap */}
           <strong className="text-sm text-card-foreground/60 mr-1 self-center">Tech:</strong> {/* Adjusted text color and added self-center */}
           {techStack.map((tech, index) => (
             <span key={index} className="kbc-button text-xs px-1.5 py-0.5 !min-h-0 !h-auto !leading-tight !font-normal cursor-default"> {/* Added cursor-default */}
               {tech}
             </span>
           ))}
         </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <p className="text-sm mb-4 text-card-foreground/80">{description}</p>
        <div>
          <h4 className="font-semibold mb-1 text-sm text-card-foreground">Highlights:</h4>
          <ul className="list-disc list-inside text-sm text-card-foreground/70 space-y-1">
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

// Experience Item remains largely the same visually
function ExperienceItem({ role, company, duration, points }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 border-l-2 border-primary/20">
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
