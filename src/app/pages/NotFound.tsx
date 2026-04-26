import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative mb-8">
          <div className="text-[12rem] font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent opacity-20">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
