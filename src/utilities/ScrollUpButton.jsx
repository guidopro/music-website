import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="group flex flex-row justify-center">
      <button
        onClick={handleClick}
        className="relative m-10 rounded-full bg-white px-4 py-2 text-black shadow-lg transition-opacity duration-300 hover:cursor-pointer"
      >
        ↑
      </button>
    </div>
  );
}
