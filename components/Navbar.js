import { Home, LogIn, Newspaper, SunMoon } from "lucide-react";
import Link from "next/link";
export default function Navbar({ darkTheme, setDarkTheme,textColor ,gradientClass}) {
 
const borderColor = darkTheme ? "border-gray-700" : "border-gray-300";
   
  return (
    <nav className={` p-4 flex flex-row justify-between items-center border-b fixed w-full top-0 h-[75px] ${gradientClass} ${borderColor} ${textColor}`}>
      <h1 className="text-2xl font-bold ml-4 md:ml-8 lg:ml-16 ">MQBlog</h1>
      <div className="flex flex-row gap-4 mr-4 md:gap-8 lg:gap-16 xl:gap-24">
        <Link href="/">
          <span className="flex flex-row gap-2 items-center ">
            <Home className={`h-6 w-6 ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`} />
            <h1 className={`hidden md:flex ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`}>Home</h1>
          
        </span>
        </Link>
        <Link href="/about">
        <span className="flex flex-row gap-2 items-center">
           <Newspaper className={`h-6 w-6 ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`} />
           <h1 className={`hidden md:flex ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`}>About</h1>
        </span>
        </Link>
        <Link href="/login">
        <span className="flex flex-row gap-2 items-center">
          <LogIn className={`h-6 w-6 ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`} />
          <h1 className={`hidden md:flex ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`}>Login</h1>
        </span>
        </Link>
        <span className="flex flex-row gap-2 items-center" onClick={() => setDarkTheme(!darkTheme)} style={{ cursor: 'pointer' }}>
          <SunMoon className={`h-6 w-6 ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`} />
          <h1 className={`hidden md:flex ${textColor} ${darkTheme ? "hover:text-[#a0e9ff]" : ""}`}>Toggle Theme</h1>
        </span>
      </div>
    </nav>
  );
}
