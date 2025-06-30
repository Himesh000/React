import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 300);
    });
  }, []);

  return (
    show && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 p-2 bg-orange-500 text-white rounded-full shadow-lg">
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
