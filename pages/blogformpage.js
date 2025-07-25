import BlogForm from "@/components/Blogform";

export default function BlogFormPage({ darkTheme, textColor ,gradientClass}) {
     return (
                <div className={`w-full min-h-screen ${gradientClass} gap-4 ${textColor}  flex items-center justify-center`}>
                  <BlogForm darkTheme={darkTheme} textColor={textColor} />
                </div>
            )
}