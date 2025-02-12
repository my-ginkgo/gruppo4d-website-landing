import packageJson from "../../package.json";
import Monogram from "./Monogram";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="group cursor-pointer">
            <Monogram className="w-16 h-16 group-hover:rotate-180 transition-all duration-700" />
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} <span className="uppercase brand font-bold text-lg">Gruppo4D</span> - Tutti i diritti
              riservati.
            </p>
            <p className="text-gray-800 dark:text-gray-300 text-sm pt-1">
              Registro Imprese <b className="hover:text-primary">IT03000790356</b>
            </p>
            <p className="text-gray-800 dark:text-gray-300 pt-2 text-xs">v{packageJson.version}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
