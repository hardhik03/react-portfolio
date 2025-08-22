import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Mail className="text-purple-500 w-4 h-4" />
            <span>pvvhardhik@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-purple-500 w-4 h-4" />
            <span>Fort Collins, Colorado, USA</span>
          </div>
        </div>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Hardhik Pyla. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
