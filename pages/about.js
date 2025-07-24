import Myinfo from "@/components/Myinfo";

export default function About({  gradientClass, textColor ,darkTheme}) {
    return (
        <div className={`w-full min-h-screen ${gradientClass} gap-2 ${textColor} p-4`}>
           <Myinfo gradientClass={gradientClass} textColor={textColor} darkTheme={darkTheme} />
        </div>
    )
}