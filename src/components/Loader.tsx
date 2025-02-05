import { useEffect, useState } from "react";
import Monogram from "./Monogram";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500">
      <div className="animate-[spin_2s_linear_infinite]">
        <Monogram className="w-24 h-24" />
      </div>
    </div>
  );
};

export default Loader;
