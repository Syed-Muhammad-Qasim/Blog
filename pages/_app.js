import "@/styles/globals.css";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(false);
  
  const gradientClass = darkTheme
      ?  "bg-gradient-to-b from-[#0a0c23] via-[#10173c] to-[#050d1a]"
      : "bg-gradient-to-b from-[#c2f0ea] via-[#bce0fd] to-[#85b4f2]";
    
     const textColor = darkTheme
      ? "text-gray-100"
      : "text-gray-900";

  return (
    <Layout darkTheme={darkTheme} setDarkTheme={setDarkTheme} gradientClass={gradientClass} textColor={textColor}>
      <Component {...pageProps} darkTheme={darkTheme} gradientClass={gradientClass} textColor={textColor} />
    </Layout>
  );
}
