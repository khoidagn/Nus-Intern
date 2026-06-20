import { Link } from 'react-router-dom';

export default function PhotoCard() {
  return (
    <div className="flex bg-white border border-gray-200 rounded-md overflow-hidden shadow-2xs hover:shadow-sm transition-shadow">
      
      <div className="w-1/2 min-h-45 cursor-pointer relative group">
        <img 
          src="./dog.jpg" 
          alt="Cute Dog" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-1.5 mb-2">
            <span className="w-5 h-5 rounded-full bg-blue-900 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
              KV
            </span>
            <Link to="#" className="text-xs font-semibold text-blue-900 hover:underline text-decoration-none">
              Kho Voi
            </Link>
          </div>
          
          <h3 className="text-xs font-bold text-gray-900 mb-1 leading-tight truncate">
            Cute Kiki
          </h3>
          <p className="text-[11px] text-gray-500 line-clamp-4 leading-relaxed">
            This is a picture of some cute dogs that I found on the internet.
          </p>
        </div>

        <div className="flex items-center justify-between text-[10px] text-gray-400 mt-2">
          <span className="flex items-center cursor-pointer hover:text-red-500">
            <svg className="w-3 h-3 mr-1 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.5 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            100
          </span>
          <span>4:56pm 20/06/2026</span>
        </div>
      </div>

    </div>
  );
}