import { Github, Linkedin, Mail } from "lucide-react";



export default function Footer({ darkTheme, textColor }) {

    const footerBg = darkTheme
  ? "bg-gradient-to-r from-[#232946] via-[#1e3a8a] to-[#18122B]"
  : "bg-gradient-to-r from-[#b2d6f3] via-[#89c4f4] to-[#74c0fc]";

    const borderColor = darkTheme ? "border-[#232946]" : "border-[#74c0fc]";
  const iconBg = darkTheme
  ? "bg-gradient-to-r from-[#232946] via-[#1e3a8a] to-[#2563eb] border border-[#232946] hover:from-[#2563eb] hover:to-[#1e40af]"
  : "bg-gradient-to-r from-[#b2d6f3] via-[#89c4f4] to-[#74c0fc] border border-[#74c0fc] hover:from-[#74c0fc] hover:to-[#2563eb]";
  return (
    <footer className={`w-full ${footerBg} py-4 border-t ${borderColor}`}>
      <div className="max-w-6xl mx-auto flex flex-row md:flex-row items-center justify-between px-6">
        
      <span className={`inline-block ${textColor} text-lg font-bold`}>
        MQBlog
      </span>
        
      
        <div className="hidden md:flex flex-row gap-4 mb-2 md:mb-0 ">
          <a
            href="mailto:moh.qasim1214@gmail.com"
            className={`p-2 rounded-full ${iconBg}`}
          >
            <Mail className={`w-5 h-5 ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`} />
          </a>
          <a
            href="https://github.com/Syed-Muhammad-Qasim"
            className={`p-2 rounded-full ${iconBg}`}
          >
            <Github className={`w-5 h-5 ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`} />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-muhammad-qasim-69374a360/"
            className={`p-2 rounded-full ${iconBg}`}
          >
            <Linkedin className={`w-5 h-5 ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`} />
          </a>
        </div>
       
        <div className={`${textColor} text-sm text-center md:text-right`}>
          &copy; {new Date().getFullYear()} Muhammad Qasim. All rights reserved.
        </div>
      </div>
    </footer>
  );
}