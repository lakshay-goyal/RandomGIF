import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 
    py-8 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
      
      <div className="relative">
        <h1 className="text-center text-6xl font-extrabold mb-12 tracking-wider">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-violet-300
          drop-shadow-lg">
            GIF Generator
          </span>
        </h1>
        <div className="max-w-6xl mx-auto space-y-8">
          <Random />
          <Tag />
        </div>
      </div>
    </div>
  );
}
