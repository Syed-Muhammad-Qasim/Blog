import { useState } from "react";
import Image from "next/image";
export default function BlogForm({ darkTheme, textColor }) {
  const cardbg = darkTheme
    ? "bg-gradient-to-br from-[#232946] via-[#1e3a8a] to-[#18122B] shadow-lg shadow-indigo-900/20 border border-[#232946]"
    : "bg-gradient-to-br from-[#d2ecfb] via-[#c2e1f7] to-[#b2d6f3] shadow-lg";

  const txtcolor = darkTheme ? "text-[#a0e9ff]" : "text-[#232946]";

  const inputBg = darkTheme
    ? "bg-[#232946] text-[#a0e9ff] placeholder-[#6b7280] border border-[#1e3a8a] focus:border-[#3b82f6] focus:ring-[#3b82f6]"
    : "bg-white text-[#232946] placeholder-[#94a3b8] border border-[#bce0fd] focus:border-[#2563eb] focus:ring-[#2563eb]";

  const buttonBg = darkTheme
    ? "bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-[#a0e9ff] hover:from-[#2563eb] hover:to-[#1e40af] hover:text-white"
    : "bg-gradient-to-r from-[#74c0fc] to-[#4dabf7] text-white hover:from-[#4dabf7] hover:to-[#2563eb]";

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className={`${cardbg} mt-[100px] flex flex-col justify-center w-full max-w-2xl min-h-[750px] rounded-2xl shadow-2xl px-12 gap-2  mx-auto pt-4 mb-8 pb-4`}>
      <h2 className={`text-3xl font-bold mb-8 text-center ${txtcolor}`}>Submit New Blog Post</h2>
      <form className="flex flex-col gap-6">
        <input
          type="text"
          name="Blog Title"
          placeholder="Blog Title"
          className={` ${inputBg} px-4 py-3 w-full rounded-xl transition-all duration-200`}
        />
        <input
          type="text"
          name="Category"
          placeholder="Category"
          className={` ${inputBg} px-4 py-3 w-full rounded-xl transition-all duration-200`}
        />
        <textarea
          name="content"
          placeholder="Content"
          rows={6}
          className={` ${inputBg} px-4 py-3 w-full rounded-xl resize-none transition-all duration-200`}
        />
        <label className={`font-semibold ${txtcolor}`}>Upload Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#2563eb] file:text-white file:cursor-pointer"
        />
        {imagePreview && (
          <Image 
            width={500}
            height={300}
            src={imagePreview}
            alt="Preview"
            className="mt-4 rounded-xl w-full max-h-64 object-cover border"
          />
        )}
        <button
          type="button"
          className={`${buttonBg} py-3 w-full rounded-xl font-semibold shadow-md transition-all duration-200`}
          style={{ cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
