import blogPosts from "@/data";
import Image from "next/image";
import Link from "next/link";
export default function BlogCard({ darkTheme, textColor }) {
  const cardbg = darkTheme
    ? "bg-gradient-to-br from-[#232946] via-[#1e3a8a] to-[#18122B] shadow-lg shadow-indigo-900/20"
    : "bg-gradient-to-br from-[#d2ecfb] via-[#c2e1f7] to-[#b2d6f3] shadow-lg";

  return (
    <div className="w-full min-h-screen grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center px-4 py-4">
      {blogPosts.map((post) => {
        return(
            <Link href={`/blog/${post.id}`} key={post.id}>
           <div key={post.id}
        className={`${cardbg} flex flex-col w-full max-w-[375px] h-[420px] rounded-lg shadow-md overflow-hidden`}
      >
        <Image
          src={post.image}
          alt="Blog Post 1"
          width={340}
          height={250}
          className="w-full h-[250px] object-cover rounded-t-lg"
        />
        <div className="flex flex-col items-center px-4 mx-auto">
          <h1 className={`text-lg font-semibold p-2 ${textColor}`}>
            {post.title}
          </h1>
          <p className={`text-sm   ${textColor}`}>
            {post.description}
          </p>
          
        </div>
      </div>
      </Link>
        )
      })}
     
    </div>
  );
}
