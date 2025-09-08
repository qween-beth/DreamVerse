/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.672-2.672L11.25 18l1.938-.648a3.375 3.375 0 002.672-2.672L16.75 13.5l.648 1.938a3.375 3.375 0 002.672 2.672L21.75 18l-1.938.648a3.375 3.375 0 00-2.672 2.672z" />
    </svg>
);

const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
);


interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-6xl mx-auto text-center animate-fade-in p-4 relative isolate">
      {/* Subtle background glow */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 leading-tight">
        Visualize Your Space, Instantly.
      </h2>
      <p className="mt-6 text-xl text-zinc-500 max-w-3xl mx-auto">
        Use the power of AI to see any product in your room. Upload your own photos or generate a complete scene from a simple text prompt.
      </p>
      <div className="mt-12">
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
        >
          Create Your Space
        </button>
      </div>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Feature 1 */}
        <div className="p-6 rounded-xl transition-all hover:bg-zinc-50">
          <div className="inline-block p-3 bg-blue-100 rounded-lg">
            <UploadIcon />
          </div>
          <h3 className="text-xl font-bold text-zinc-800 mt-4 mb-2">Upload & Place</h3>
          <p className="text-zinc-600">
            Have your own images? Upload a product and a scene, then simply drag and drop to create a perfect composite.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="p-6 rounded-xl transition-all hover:bg-zinc-50">
          <div className="inline-block p-3 bg-blue-100 rounded-lg">
            <SparklesIcon />
          </div>
          <h3 className="text-xl font-bold text-zinc-800 mt-4 mb-2">Generate with AI</h3>
          <p className="text-zinc-600">
            Start from scratch. Describe a product and a scene, and let our AI generate both images for you instantly.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="p-6 rounded-xl transition-all hover:bg-zinc-50">
           <div className="inline-block p-3 bg-blue-100 rounded-lg">
            <CameraIcon />
          </div>
          <h3 className="text-xl font-bold text-zinc-800 mt-4 mb-2">Photorealistic Results</h3>
          <p className="text-zinc-600">
            Gemini intelligently analyzes lighting, shadows, and perspective to blend your product seamlessly into the scene.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;