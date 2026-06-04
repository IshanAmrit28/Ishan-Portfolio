import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "CareerByte (AI Interview Platform)",
      description: "A comprehensive developer preparation platform featuring an interactive coding playground, global contests, AI-powered interview simulations, and leaderboards.",
      tech: ["React", "Node.js", "Redux", "Gemini AI", "Docker"],
      github: "https://github.com/IshanAmrit28/CareerByte",
      demo: "https://career-byte.vercel.app/"
    },
    {
      title: "CVD Detection via Retinal Images",
      description: "An end-to-end Machine Learning web application designed to assess the likelihood of Cardiovascular Disease from high-resolution retinal images.",
      tech: ["Python", "Machine Learning", "Streamlit", "Node.js"],
      github: "https://github.com/IshanAmrit28/CVD-Detection-using-retinal-images",
      demo: "https://cvd-detection-using-retinal-images.streamlit.app/"
    },
    {
      title: "Naruto Programming Language",
      description: "A custom, statically typed, interpreted programming language built entirely in C++, featuring a rich type system, control flow, and a classic interpreter pipeline.",
      tech: ["C++", "Compilers", "AST", "Interpreters"],
      github: "https://github.com/IshanAmrit28/NARUTO",
      demo: "https://naruto-playground.vercel.app/"
    },
    {
      title: "Vibe - Realtime Chat Application",
      description: "A modern, full-stack real-time messaging application with a beautiful dark mode UI, seamless image sharing, and instant message delivery using Socket.IO.",
      tech: ["React", "Node.js", "Socket.IO", "Zustand"],
      github: "https://github.com/IshanAmrit28/ChatApp",
      demo: "https://chat-app-five-roan-35.vercel.app/"
    },
    {
      title: "Finance Tracker Pro",
      description: "A production-ready application to take control of personal finances, featuring AES-256-GCM encryption, smart categorization, and advanced spending analytics.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/IshanAmrit28/ExTracker",
      demo: "https://extracker-jade.vercel.app/"
    },
    {
      title: "4 in a Row Game",
      description: "A real-time multiplayer Four in a Row game featuring JWT authentication, a competitive AI bot, automatic reconnection, and an instant rematch functionality.",
      tech: ["MERN Stack", "WebSockets", "Game AI"],
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
