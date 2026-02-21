import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Smartphone,
  Code2,
  Database,
  ExternalLink,
  Briefcase
} from "lucide-react";

export default function Home() {
  const skills = [
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "REST API", icon: Code2 },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Provider", icon: Database },
    { name: "Agile", icon: Briefcase },
  ];

  const projects = [
    {
      title: "IZENHO - Health App",
      desc: "A healthcare mobile app integrated with Google Fit Token and AI services.",
      tags: ["Flutter", "Google Fit API", "AI Services"],
      link: null,
      private: true,
    },
    {
      title: "MMPos System",
      desc: "A comprehensive Cashier Information System / POS.",
      tags: ["CodeIgniter 3", "SB Admin", "PHP"],
      link: "https://github.com/randisihombing/mmpos",
    },
    {
      title: "Tech Test Template",
      desc: "A Flutter starter template featuring a clean project architecture for scalable apps.",
      tags: ["Flutter", "Clean Architecture", "Dart"],
      link: "https://github.com/randisihombing/tech-test",
    },
    {
      title: "Klontong Project",
      desc: "A seamless grocery store UI to manage product data effortlessly without a backend.",
      tags: ["Flutter", "UI/UX", "State Management"],
      link: "https://github.com/randisihombing/klontong-project",
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-24">
      {/* Hero Section */}
      <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow">
              Randi Tumbur
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mt-4">
            Mobile Developer | <span className="text-slate-100">Flutter Enthusiast</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-slate-300">
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <MapPin size={18} className="text-cyan-500" />
            <span>Jakarta, Indonesia</span>
          </div>
          <a href="mailto:randisihombing15@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Mail size={18} className="text-cyan-500" />
            <span>randisihombing15@gmail.com</span>
          </a>
        </div>

        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/randisihombing"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 hover:text-cyan-400 transition-all hover:scale-105 border border-slate-700/50"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/randi-tumbur-arjuna-lumbantoruan-01b789183"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 hover:text-cyan-400 transition-all hover:scale-105 border border-slate-700/50"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://drive.google.com/file/d/1_FBIDZO81aHfBx0rHF-ggQRAHajbUQQn/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-cyan-900/20"
          >
            <Download size={20} />
            <span>View Resume</span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mx-20 -my-20 group-hover:bg-cyan-400/20 transition-all duration-700"></div>
        <h2 className="text-3xl mb-6">About Me</h2>
        <p className="text-slate-300 text-lg leading-relaxed relative z-10">
          I'm a passionate <strong className="text-white">Mobile Developer</strong> with more than 3 years of programming experience and over 2 years specializing in <span className="text-cyan-400 font-medium">Flutter-based application development</span>. I enjoy building smooth, responsive, and highly optimized mobile experiences. My work spans health and financial applications — including a major app currently live on the Play Store and App Store.
        </p>
      </section>

      {/* Work Experience */}
      <section className="space-y-8">
        <h2 className="text-3xl flex items-center gap-3">
          <Briefcase className="text-cyan-500" size={28} />
          Work Experience
        </h2>
        <div className="space-y-6">
          {/* Job 1 */}
          <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-cyan-500">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">PT. Wide Technology Indonesia</h3>
                <p className="text-cyan-400/80 font-medium mt-1">Mobile Developer</p>
              </div>
              <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">
                Feb 2023 – Present
              </span>
            </div>
            <ul className="space-y-2 text-slate-400 list-disc ml-4 marker:text-cyan-600">
              <li>Built scalable, high-performance mobile UIs using Flutter.</li>
              <li>Collaborating on a continuous modern fintech application.</li>
              <li>Involved in rigorous code reviews, debugging, and system optimization.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-blue-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">PT. Widea Kalya Teknologi</h3>
                <p className="text-cyan-400/80 font-medium mt-1">Mobile Developer</p>
              </div>
              <span className="px-3 py-1 bg-slate-800 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">
                Aug 2022 – Jan 2023
              </span>
            </div>
            <ul className="space-y-2 text-slate-400 list-disc ml-4 marker:text-blue-600">
              <li>Developed and successfully launched the IZENHO health app.</li>
              <li>Integrated complex third-party tools like Google Fit and various AI services.</li>
              <li>Handled end-to-end UI development and connected backend logics seamlessly.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl flex items-center gap-3">
          <Smartphone className="text-cyan-500" size={28} />
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="glass-card p-7 rounded-2xl flex flex-col h-full group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                {project.private ? (
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-800 text-slate-400 rounded-md border border-slate-700/50">Private</span>
                ) : (
                  <a href={project.link!} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <p className="text-slate-400 flex-grow mb-6 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-2.5 py-1 bg-cyan-950/30 text-cyan-300 border border-cyan-800/30 rounded-lg text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-8">
        <h2 className="text-3xl flex items-center gap-3">
          <Code2 className="text-cyan-500" size={28} />
          Skills & Tools
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="glass-card flex items-center gap-2 px-4 py-3 rounded-xl hover:-translate-y-1 hover:border-cyan-500/50 transition-all cursor-default"
            >
              {typeof skill.icon === 'string' ? (
                <img src={skill.icon} alt={skill.name} className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity" />
              ) : (
                <skill.icon size={20} className="text-cyan-400" />
              )}
              <span className="font-medium text-slate-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="pt-8 pb-12 border-t border-slate-800 text-center">
        <h2 className="text-2xl font-bold mb-4">Let's build something beautiful together.</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Need a dedicated mobile developer for your next big project? I'm always open to discussing new opportunities.
        </p>
        <a
          href="mailto:randisihombing15@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-cyan-50 transition-colors shadow-xl shadow-white/5"
        >
          <Mail size={20} />
          Say Hello
        </a>
      </footer>
    </main>
  );
}
