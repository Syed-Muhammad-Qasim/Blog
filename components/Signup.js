import Image from "next/image";


export default function Signup({ textColor, darkTheme }) {

    const cardbg = darkTheme
  ? "bg-gradient-to-br from-[#232946] via-[#1e3a8a] to-[#18122B] shadow-lg shadow-indigo-900/20 border border-[#232946]"
  : "bg-gradient-to-br from-[#d2ecfb] via-[#c2e1f7] to-[#b2d6f3] shadow-lg";

  const txtcolor = darkTheme
  ? "text-[#a0e9ff]" 
  : "text-[#232946]"; 

  const inputBg = darkTheme
  ? "bg-[#18122B] text-[#a0e9ff] placeholder-[#6b7280] border border-[#232946] focus:border-[#3b82f6] focus:ring-[#3b82f6]"
  : "bg-[#f0f9ff] text-[#232946] placeholder-[#94a3b8] border border-[#bce0fd] focus:border-[#2563eb] focus:ring-[#2563eb]"; 

  const buttonBg = darkTheme
  ? "bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-[#a0e9ff] hover:from-[#2563eb] hover:to-[#1e40af] hover:text-white"
  : "bg-gradient-to-r from-[#74c0fc] to-[#4dabf7] text-white hover:from-[#4dabf7] hover:to-[#2563eb]";
  return (
    <div className={`${cardbg} mt-[75px] flex flex-col  justify-center w-[400px] min-h-[500px] rounded-lg shadow-lg px-8 gap-4 mb-16 pb-12  md:w-[600px] lg:w-[800px]`}>
      <h2 className={`text-3xl font-bold mb-6 text-center ${txtcolor} `}>Sign In</h2>
      <form className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={` ${inputBg} px-4 py-2 w-full rounded-full`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={` ${inputBg} px-4 py-2 w-full rounded-full`}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={` ${inputBg} px-4 py-2 w-full rounded-full`}
        />
        <button
          type="button"
          className={`${buttonBg} text-white py-2   w-full rounded-full`}
          style={{ cursor: 'pointer' }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}