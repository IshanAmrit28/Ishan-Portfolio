// import profilePhoto from '@/assets/profile-photo.jpeg';
// import resume from '@/assets/Resume.pdf'; 
// import { Button } from '@/components/ui/button';
// import { Download } from 'lucide-react';

// const AboutSection = () => {
//   return (
//     <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-background">
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Photo */}
//           <div className="relative">
//             <div className="relative w-80 h-80 mx-auto lg:mx-0">
//               <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-6 opacity-20"></div>
//               <div className="relative bg-gradient-card rounded-2xl p-2 shadow-lg">
//                 <img
//                   src={profilePhoto}
//                   alt="Profile"
//                   className="w-full h-full object-cover rounded-xl"
//                 />
//               </div>
//               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
//             </div>
//           </div>

          
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl lg:text-6xl font-bold mb-6">
//               <span className="block text-foreground">Hello, I'm</span>
//               <span className="bg-gradient-primary bg-clip-text text-transparent">
//                 Ishan Amrit Srivastava
//               </span>
//             </h1>
            
//             <div className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               <p>
//                 I am a final-year Computer Science student at VIT Bhopal, deeply passionate about technology and its potential to transform ideas into impactful solutions. I have a strong curiosity for learning and constantly explore emerging tools, frameworks, and concepts across software development, cloud computing, and artificial intelligence. Building efficient, scalable, and user-friendly applications excites me, and I thrive in environments that challenge me to grow my technical and problem-solving skills. Beyond coding, I enjoy experimenting with new technologies, staying updated with industry trends, and pushing the boundaries of what can be created. My approach combines creativity, logical thinking, and a relentless drive to turn concepts into reality, reflecting my commitment to continuous learning and innovation.
//               </p>
//             </div>

//             <a
//   href={resume}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-full shadow-md hover:shadow-lg transition-all"
// >
//   <Download className="w-4 h-4" />
//   Download Resume
// </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


// import profilePhoto from '@/assets/profile-photo.jpeg';
// import resume from '@/assets/Resume.pdf'; 
// import { Download } from 'lucide-react';

// const AboutSection = () => {
//   return (
//     <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-background">
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Photo */}
//           <div className="relative w-64 h-64 mx-auto lg:mx-0 lg:w-80 lg:h-80">
//             {/* Decorative rotated background (only for lg screens) */}
//             <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-6 opacity-20 hidden lg:block"></div>

//             <div className="relative bg-gradient-card rounded-2xl p-2 shadow-lg overflow-hidden">
//               <img
//                 src={profilePhoto}
//                 alt="Profile"
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </div>

//             {/* Animated circle (only for lg screens) */}
//             <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
//           </div>

//           {/* About Content */}
//           <div className="text-center lg:text-left mt-8 lg:mt-0">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//               <span className="block text-foreground">Hello, I'm</span>
//               <span className="bg-gradient-primary bg-clip-text text-transparent">
//                 Ishan Amrit Srivastava
//               </span>
//             </h1>
            
//             <div className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
//               <p>
//                 I am a final-year Computer Science student at VIT Bhopal, deeply passionate about technology and its potential to transform ideas into impactful solutions. I have a strong curiosity for learning and constantly explore emerging tools, frameworks, and concepts across software development, cloud computing, and artificial intelligence. Building efficient, scalable, and user-friendly applications excites me, and I thrive in environments that challenge me to grow my technical and problem-solving skills. Beyond coding, I enjoy experimenting with new technologies, staying updated with industry trends, and pushing the boundaries of what can be created. My approach combines creativity, logical thinking, and a relentless drive to turn concepts into reality, reflecting my commitment to continuous learning and innovation.
//               </p>
//             </div>

//             {/* Resume Button */}
//             <a
//               href={resume}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-full shadow-md hover:shadow-lg transition-all"
//             >
//               <Download className="w-4 h-4" />
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;



import profilePhoto from '@/assets/profile-photo.jpeg';
import resume from '@/assets/Resume.pdf'; 
import { Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <div className="flex justify-center lg:justify-start lg:pl-12">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
              
              {/* Decorative rotated background (only for lg screens) */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-6 opacity-20 hidden lg:block"></div>

              <div className="relative bg-gradient-card rounded-2xl p-2 shadow-lg overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Animated circle (only for lg screens) */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Ishan Amrit Srivastava
              </span>
            </h1>
            
            <div className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              <p>
                I am a final-year Computer Science student at VIT Bhopal, deeply passionate about technology and its potential to transform ideas into impactful solutions. I have a strong curiosity for learning and constantly explore emerging tools, frameworks, and concepts across software development, cloud computing, and artificial intelligence. Building efficient, scalable, and user-friendly applications excites me, and I thrive in environments that challenge me to grow my technical and problem-solving skills. Beyond coding, I enjoy experimenting with new technologies, staying updated with industry trends, and pushing the boundaries of what can be created. My approach combines creativity, logical thinking, and a relentless drive to turn concepts into reality, reflecting my commitment to continuous learning and innovation.
              </p>
            </div>

            {/* Resume Button */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
