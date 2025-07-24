
import { useRouter } from "next/router";
import blogPosts from "@/data";
 
import Image from "next/image";

export default function BlogDetails ({gradientClass, textColor, darkTheme}) {
    const router = useRouter();
    const { id } = router.query;
    const post = blogPosts.find(p=>p.id === Number(id));

    if (!post) return <div>Blog not found</div>;
   const cardbg = darkTheme
    ? "bg-gradient-to-br from-[#232946] via-[#1e3a8a] to-[#18122B] shadow-lg shadow-indigo-900/20"
  : "bg-gradient-to-b from-[#a0e9ff] to-[#89c4f4] ";

   const buttoncolor = darkTheme
  ? "bg-[#3b82f6] text-white hover:bg-[#60a5fa] hover:shadow-lg hover:scale-105 transition-all duration-200"
  : "bg-[#60b5f8] text-white hover:bg-[#4ca3ec]";
    return (
        <div className={`w-full min-h-screen mt-[75px] ${gradientClass} gap-2 ${textColor} p-4`}>
            
            <div className={`max-w-2xl mx-auto p-6 ${cardbg} p-2 rounded-lg shadow-md`}>
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <Image src={post.image} alt={post.title} 
                    width={600} height={400} 
                    priority
                    className="rounded mb-4 w-full max-h-[400px] object-cover" />
                 
                <p className="text-lg mb-2"><strong>Category:</strong> {post.category}</p>
                <p className="text-md gap-2">{post.article}</p>
                 <button className={`mt-4 px-6 py-2 rounded-lg ${buttoncolor} ${textColor} `}
                 onClick={() => router.push('/')}>
              Back to Blog
            </button>
                

            </div>
            
        </div>
    );
}