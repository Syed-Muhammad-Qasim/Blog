import Image from "next/image";
import Link from "next/link";
export default function Hero({ darkTheme , textColor}) {

   const heroBg = darkTheme
  ? "bg-gradient-to-br from-[#232946] via-[#1e3a8a] to-[#18122B]"
  : "bg-gradient-to-b from-[#a0e9ff] to-[#89c4f4]";

  const buttoncolor = darkTheme
  ? "bg-[#2563eb] text-[#a0e9ff] hover:bg-[#1e40af] hover:text-white shadow-lg transition-all duration-200"
  : "bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-lg transition-all duration-200";

   
  return (
    <div className="w-full p-2 mx-auto mt-[75px]">
      <div className={`${heroBg} w-full h-[525px] p-2 shadow-xl flex flex-col   md:flex-row md:h-[300px] items-center `}>
        <Image
          src="/mainblogpic.jpg"
          alt="Hero Image"
          width={600}          
          height={300}         
          className=" h-[300px] md:w-1/2 md:h-full"
        />
        <div className="flex flex-col p-4 items-center justify-center mx-auto">
          <h1 className={`text-2xl sm:text-3xl font-bold ${textColor}`}>Welcome to My Dev Blog</h1>
          <p className={`mt-2 ${textColor} text-md`}>
            Discover the latest articles and insights on various topics.
          </p>
          <span className="flex flex-row gap-2">
            <Link href="/about">
            <button className={`mt-4 px-6 py-2 rounded-lg ${buttoncolor} ${textColor} `}>
              About Me
            </button>
            </Link>
            <Link href="/login">
              <button className={`mt-4 px-6 py-2 rounded-lg ${buttoncolor} ${textColor}`}>
                Login
              </button>
            </Link>
           
          </span>
        </div>
      </div>
    </div>
  );
}
