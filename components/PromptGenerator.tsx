/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface PromptGeneratorProps {
    onGenerate: (prompt: string) => void;
    isLoading: boolean;
}

const PromptGenerator: React.FC<PromptGeneratorProps> = ({ onGenerate, isLoading }) => {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (prompt.trim() && !isLoading) {
            onGenerate(prompt);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto animate-fade-in">
            <div className="text-center mb-4">
                 <p className="text-xl font-bold text-zinc-700">Or... Create with AI</p>
                 <p className="text-zinc-500">Describe a scene and a product, and let Gemini generate them for you.</p>
            </div>
            <form onSubmit={handleSubmit} className="relative">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={isLoading}
                    placeholder="e.g., a sleek red chair in a minimalist living room"
                    className="w-full p-4 pr-32 border-2 border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none disabled:bg-zinc-100 shadow-sm"
                    rows={2}
                />
                <button
                    type="submit"
                    disabled={isLoading || !prompt.trim()}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-5 rounded-md flex items-center justify-center transition-all disabled:bg-zinc-400 disabled:cursor-not-allowed"
                    style={{ minWidth: '110px' }}
                >
                    {isLoading ? (
                        <>
                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                         </svg>
                         Generating...
                        </>
                    ) : (
                       'Generate'
                    )}
                </button>
            </form>
        </div>
    );
};

export default PromptGenerator;
