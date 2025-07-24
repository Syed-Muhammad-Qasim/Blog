import Signup from "@/components/Signup";

export default function Login({ gradientClass, textColor, darkTheme }) {
    return (
            <div className={`w-full min-h-screen ${gradientClass} gap-2 ${textColor}  flex items-center justify-center`}>
              <Signup darkTheme={darkTheme} textColor={textColor} />
            </div>
        )
}
