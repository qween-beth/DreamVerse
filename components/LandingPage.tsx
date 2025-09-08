import React from 'react';

const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.672-2.672L11.25 18l1.938-.648a3.375 3.375 0 002.672-2.672L16.75 13.5l.648 1.938a3.375 3.375 0 002.672 2.672L21.75 18l-1.938.648a3.375 3.375 0 00-2.672 2.672z" />
  </svg>
);

const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
  </svg>
);

const UserIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <div className="relative z-50 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <SparklesIcon />
          </div>
          <span className="font-bold text-xl">DreamVerse</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#" className="text-gray-600 hover:text-black">Use Cases</a>
          <a href="#" className="text-gray-600 hover:text-black">Features</a>
          <a href="#" className="text-gray-600 hover:text-black">Pricing</a>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black leading-none">
                <span className="block">Visualize</span>
                <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Your Space
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Discover what's happening near you or anywhere in the world. Join millions creating stunning experience with AI.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={onStart}
                className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
              >
                Create Your Space
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
             
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">⌘K</kbd>
              </div>
            </div>
          </div>

          {/* Dynamic Cards Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* AI Users Card */}
            <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-3xl p-6 text-white relative overflow-hidden col-span-1">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <UserIcon />
                </div>
                <div className="text-3xl font-bold mb-1">4.9M</div>
                <div className="text-sm opacity-90">AI Users</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/10 rounded-full"></div>
            </div>

            {/* Interface Preview */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white relative col-span-1 row-span-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                  <div>
                    <div className="w-16 h-2 bg-white/30 rounded mb-1"></div>
                    <div className="w-12 h-1.5 bg-white/20 rounded"></div>
                  </div>
                </div>
                <div className="w-full h-3 bg-white/20 rounded"></div>
                <div className="w-3/4 h-3 bg-white/20 rounded"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 h-12 bg-white/10 rounded-xl backdrop-blur-sm"></div>
              <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Video Preview */}
            <div className="bg-black rounded-3xl p-6 text-white relative overflow-hidden">
              <div className="flex items-center justify-center h-20">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <PlayIcon />
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-2">Preview Demo</div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-6 text-white relative">
              <div className="text-4xl font-bold mb-1">3K</div>
              <div className="text-sm opacity-90">Spaces created daily</div>
              <div className="absolute -top-2 -right-2 w-16 h-16 border-4 border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Three Ways to
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Create Your DreamVerse
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your workflow and let AI handle the complex stuff
            </p>
          </div>

          {/* Bento Grid Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Upload Feature */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <UploadIcon />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Upload & Drop
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Drag your product and scene images. Our AI instantly understands lighting and perspective to create perfect compositions.
                  </p>

                  <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                    Perfect for existing assets →
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Feature */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl text-white mb-6 group-hover:-rotate-12 transition-transform duration-300">
                    <SparklesIcon />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">
                    Generate with AI
                  </h3>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    Just describe what you want. "Modern sofa in minimalist living room" becomes photorealistic imagery in seconds.
                  </p>

                  <div className="text-white font-semibold text-sm uppercase tracking-wide">
                    Pure imagination mode →
                  </div>
                </div>
              </div>
            </div>

            {/* Results Feature */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-green-100 to-emerald-200 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl text-white mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <CameraIcon />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Studio Results
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Professional-grade outputs with perfect shadows, reflections, and material properties that fool the human eye.
                  </p>

                  <div className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                    Gallery-ready quality →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-6">
            Ready to Transform
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Your Space?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands who've revolutionized their shopping experience with DreamVerse.
          </p>
          <button 
            onClick={onStart}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-full text-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
          >
            Start Visualizing Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;