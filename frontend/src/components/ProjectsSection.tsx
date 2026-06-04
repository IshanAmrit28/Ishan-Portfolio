import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "CareerByte (AI Interview Platform)",
      description: "An advanced AI-powered platform for realistic interview simulations, featuring voice, video, and performance analytics.",
      tech: ["React", "Node.js", "AI / ML", "Cloudinary"],
      github: "https://github.com/IshanAmrit28/CareerByte",
      demo: "https://career-byte.vercel.app/"
    },
    {
      title: "Cardiovascular Disease Detection",
      description: "A predictive healthcare application leveraging machine learning models to analyze medical data for early CVD detection.",
      tech: ["Python", "Machine Learning", "Data Modeling"],
      github: "https://github.com/IshanAmrit28/CVD-Detection-using-retinal-images",
      demo: "https://cvd-detection-using-retinal-images.streamlit.app/"
    },
    {
      title: "Naruto Programming Language",
      description: "A custom-built interpreted programming language with its own syntax, lexer, parser, and evaluator inspired by anime.",
      tech: ["TypeScript", "Compilers", "AST"],
      github: "https://github.com/IshanAmrit28/NARUTO",
      demo: "https://naruto-playground.vercel.app/"
    },
    {
      title: "Full-Stack Chat Application",
      description: "Real-time messaging platform with user authentication, online status tracking, and instant message delivery.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/IshanAmrit28/ChatApp",
      demo: "https://chat-app-five-roan-35.vercel.app/"
    },
    {
      title: "Smart Expense Tracker",
      description: "A comprehensive dashboard for tracking personal finances, visualizing spending habits, and managing budgets.",
      tech: ["React", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/IshanAmrit28/ExTracker",
      demo: "https://extracker-jade.vercel.app/"
    },
    {
      title: "4 in a Row Game",
      description: "A classic strategic multiplayer board game built for the web with an interactive UI and game state management.",
      tech: ["JavaScript", "HTML5 / CSS3", "Game Logic"],
      github: "https://github.com/IshanAmrit28/FourInARow",
      demo: "https://four-in-a-row-seven.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            A selection of my recent technical endeavors, showcasing full-stack development and machine learning solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-card/40 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,212,255,0.15)] relative overflow-hidden"
            >
              {/* Subtle top glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex-1">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-colors duration-300">
                  <Code2 className="w-7 h-7 text-primary group-hover:text-background transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-semibold text-primary/80 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors bg-background px-4 py-2 rounded-xl border border-primary/20 hover:border-primary/50"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors bg-background px-4 py-2 rounded-xl border border-primary/20 hover:border-primary/50"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
