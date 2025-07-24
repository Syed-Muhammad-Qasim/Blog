import Hero from '@/components/Hero';


import BlogCard from '@/components/Blogcard';
import Footer from '@/components/Footer';

export default function Home({gradientClass,textColor,darkTheme}) {

 

  
  return (
    
    <div className={`w-full min-h-screen ${gradientClass} gap-2`}>
      
        <Hero darkTheme={darkTheme} textColor={textColor} />
        <BlogCard darkTheme={darkTheme} textColor={textColor} />
     
    </div>
   
  );
}
