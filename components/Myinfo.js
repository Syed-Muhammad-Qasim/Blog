export default function Myinfo ({  gradientClass, textColor, darkTheme }) {
    const cardbg = darkTheme
    ? "bg-gradient-to-br from-[#232946] via-[#1e3a8a] to-[#18122B] shadow-lg shadow-indigo-900/20"
  : "bg-gradient-to-br from-[#f0f9ff] via-[#dbeafe] to-[#bae6fd] shadow-lg";


     return (
    <div className={`mt-[75px] w-full min-h-screen flex flex-col items-center gap-2 overflow-y-auto md:h-[600px] `}>
      <h1 className={`${textColor} font-bold text-4xl mt-6 mb-4 `}>
        About Blog
      </h1>
      <div className="flex flex-col w-full items-center gap-6 md:flex-row md:justify-center">
        <div className={`items-center h-[450px] ${cardbg}  shadow-xl rounded-3xl flex flex-col p-8 max-w-md w-full md:h-[490px] lg:h-[510px] xl:h-[490px] hover:scale-105 `}>
          <h2 className={`${textColor} font-bold text-3xl my-4 md:text-2xl lg:text-3xl xl:text-4xl`}>
            Who I Am
          </h2>
          <p className={`${textColor} text-md md:text-sm lg:text-lg xl:text-xl text-center`}>
            {`I’m Muhammad Qasim — a passionate and self-driven frontend developer
            who learns best by doing. I enjoy creating user-friendly web
            interfaces and transforming ideas into real digital experiences.
            With a strong curiosity and a problem-solving mindset, I
            continuously seek opportunities to grow as a developer and improve
            my craft.`}
          </p>
          
        </div>
        <div className={`items-center h-[450px] ${cardbg}  shadow-xl rounded-3xl flex flex-col p-8 max-w-md w-full md:h-[490px] lg:h-[510px] xl:h-[490px] hover:scale-105`}>
          <h2 className={`${textColor} font-bold text-3xl my-4 md:text-2xl lg:text-3xl xl:text-4xl`}>
            What Its About
          </h2>
          <p className={`${textColor} text-md md:text-sm lg:text-lg xl:text-xl text-center`}>
            {`This blog is a collection of ideas, experiences, and explorations across multiple fields—ranging from technology and personal development to creativity, learning, and beyond. Each post dives into a unique topic, offering thoughtful insights, tips, and inspiration to spark curiosity and add value to your daily life. Whether you're here to learn something new, find motivation, or simply explore fresh perspectives, there's something here for everyone.`}
          </p>
          
        </div>
        <div className={`items-center h-[450px] ${cardbg}  shadow-xl rounded-3xl flex flex-col p-8 max-w-md w-full md:h-[490px] lg:h-[510px] xl:h-[490px] hover:scale-105`}>
          <h2 className={`${textColor} font-bold text-3xl my-4 md:text-2xl lg:text-3xl xl:text-4xl`}>
           A Space to Explore
          </h2>
          <p className={`${textColor} text-md md:text-sm lg:text-lg xl:text-xl text-center`}>
            {`This blog doesn’t follow one strict theme—because neither do I. Sometimes I write about tech and coding, other times about creativity, self-improvement, or things that simply catch my interest. It’s a space where I can explore different ideas without limits—and if you enjoy reading them or take away something useful, that’s a bonus I deeply value.`}
          </p>
          
        </div>
      </div>
      </div>
     )
}