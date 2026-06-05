import { ExternalLink } from 'lucide-react';

const CodingProfilesSection = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "naruto404",
      description: "Consistent problem solver focusing on Data Structures & Algorithms and technical interview preparation.",
      logoUrl: "https://cdn.simpleicons.org/leetcode/FFA116",
      link: "https://leetcode.com/u/naruto404/",
      color: "text-yellow-500",
      bgHover: "hover:border-yellow-500/50 hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]"
    },
    {
      platform: "CodeChef",
      username: "naruto404",
      description: "Active participant in competitive programming contests and rated challenges.",
      logoUrl: "https://cdn.simpleicons.org/codechef/5B4638",
      link: "https://www.codechef.com/users/naruto404",
      color: "text-amber-700",
      bgHover: "hover:border-amber-700/50 hover:shadow-[0_10px_30px_rgba(180,83,9,0.15)]"
    },
    {
      platform: "Codeforces",
      username: "ishan_2805",
      description: "Practicing advanced algorithmic techniques and participating in global div-based rounds.",
      customSvg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
          <rect x="1.5" y="10" width="5.5" height="11" fill="#F3A229" rx="0.5"/>
          <rect x="9" y="3" width="5.5" height="18" fill="#1F8ACB" rx="0.5"/>
          <rect x="16.5" y="14" width="5.5" height="7" fill="#DA474A" rx="0.5"/>
        </svg>
      ),
      link: "https://codeforces.com/profile/ishan_2805",
      color: "text-blue-500",
      bgHover: "hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
    }
  ];

  return (
    <section id="coding-profiles" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Coding <span className="text-primary">Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            My competitive programming journey and algorithmic problem-solving track record across various platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => {
            return (
              <div 
                key={index} 
                className={`group bg-card/40 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${profile.bgHover} flex flex-col h-full relative overflow-hidden`}
              >
                {/* Subtle top glow on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {/* @ts-ignore - Handle custom SVG if it exists, otherwise use standard img */}
                  {profile.customSvg ? profile.customSvg : (
                    <img src={profile.logoUrl} alt={`${profile.platform} logo`} className="w-8 h-8" />
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {profile.platform}
                </h3>
                
                <p className="text-primary/80 font-medium mb-4 text-sm">
                  @{profile.username}
                </p>
                
                <p className="text-muted-foreground text-sm mb-8 flex-grow font-light leading-relaxed">
                  {profile.description}
                </p>
                
                <a 
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 flex items-center justify-center gap-2 rounded-xl bg-background border border-primary/30 text-white font-medium hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] mt-auto"
                >
                  View Profile <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
