import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-6 py-2 grid grid-cols-[120px_1fr_120px] gap-6 items-center shadow-sm sticky top-0 z-50">      
      <div className="min-w-0">
        <Link to="/" className="text-xl font-bold tracking-wide text-white text-right text-decoration-none block truncate">
          Fotobook
        </Link>
      </div>

      <div className="flex items-center justify-between w-full min-w-0">
        <div className="w-full max-w-xl hidden sm:block">
          <input 
            type="text" 
            placeholder="Search Photo / Album" 
            className="w-full bg-white text-gray-800 px-4 py-1.5 rounded-xs text-sm focus:outline-none placeholder-gray-400"
          />
        </div>

        <Link to="#" className="flex items-center space-x-2 text-white text-decoration-none shrink-0 ml-4">
          <div className="w-8 h-8 rounded-full bg-white text-blue-900 font-bold flex items-center justify-center text-xs shrink-0">
            KV
          </div>
          <span className="font-medium hover:underline hidden md:inline">
            Kho Voi
          </span>
        </Link>

      </div>

      <div className="text-center min-w-0">
        <Link to="#" className="text-gray-200 hover:text-white hover:underline transition-colors text-decoration-none text-sm font-medium">
          Logout
        </Link>
      </div>
    </nav>
  );
}