import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // TODO: Settare IsHome in base alla pagina in cui sono

  useEffect(() => {
    setIsHome(window.location.pathname === "/");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      // setto lo stato di isScrolled anche per tutte le altre pagine oltre alla home page
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", text: "Chi Siamo" },
    { href: "#mission", text: "Mission" },
    { href: "#vision", text: "Vision" },
    // { href: "#philosophy", text: "Filosofia" },
    // { href: "#methodology", text: "Metodologia" },
    { href: "#services", text: "Servizi" },
    { href: "#partners", text: "Partner" },
    { href: "#contact", text: "Contatti" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        (isScrolled && isHome) || !isHome ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a
            href="#"
            title="Home"
            className={`h-8 transition-all duration-300 ${
              !isScrolled && isHome ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            }`}>
            <Logo className="h-full w-auto" />
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-primary dark:hover:text-primary-light transition-colors ${
                  isScrolled && isHome ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}>
                {link.text}
              </a>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className={`w-6 h-6 ${isScrolled && isHome ? "text-gray-700 dark:text-gray-300" : "text-white"}`} />
              ) : (
                <Menu
                  className={`w-6 h-6 ${isScrolled && isHome ? "text-gray-700 dark:text-gray-300" : "text-white"}`}
                />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                  onClick={() => setIsOpen(false)}>
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
