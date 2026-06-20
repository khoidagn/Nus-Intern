import PhotoCard from '../components/PhotoCard';

export default function Feeds() {
  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-100 pt-6 p-4 flex flex-col items-center w-full">
      <div className="flex border border-blue-900 rounded overflow-hidden mb-6 text-xs font-semibold">
        <button className="bg-blue-900 text-white px-4 py-2 uppercase tracking-wider focus:outline-none cursor-pointer">
          Photo
        </button>
        <button className="bg-white text-blue-900 px-4 py-2 uppercase tracking-wider hover:bg-gray-50 transition-colors focus:outline-none cursor-pointer">
          Album
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-10">
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
      </div>

      <div className="mb-4">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}