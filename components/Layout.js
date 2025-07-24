import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Layout({ children, darkTheme, setDarkTheme,gradientClass,textColor }) {
    
  return (
    <div className="min-h-screen w-full">
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} textColor={textColor} gradientClass={gradientClass} />
      {children}
        <Footer darkTheme={darkTheme} textColor={textColor} />
    </div>
  );
}
