# DreamVerse 🚀

DreamVerse is an innovative web application that redefines **product visualization**, allowing users to instantly see **any item in their personal space**. Leveraging the powerful **multi-modal capabilities** of [Google's Gemini API](https://ai.google.dev/gemini-api), DreamVerse offers two intuitive workflows:

1. **Upload & Drag-Drop**: Upload a product photo and a scene, then drag-and-drop to generate a **photorealistic composite**.
2. **Text-to-Image**: Describe a product and scene in plain text, and let AI generate both from scratch.

## How It Works 🛠️

At its core, DreamVerse uses a **sophisticated chain of Gemini models** to deliver stunning visuals:

- **`gemini-2.5-flash`**: Analyzes the user's placement to create a **detailed semantic description** of the scene and product positioning.
- **`gemini-2.5-flash-image-preview`**: Uses the description to perform the **final composition**, intelligently adjusting for **lighting, shadows, and perspective**.
- **`imagen-4.0-generate-001`**: Powers the **text-to-image feature**, generating photorealistic product and scene images from text prompts.

The result? A seamless blend of **imagination and reality**, perfect for visualizing products in real-world contexts.

## Tech Stack 🖥️

Built with modern technologies for a **responsive and intuitive** user experience:

- **Frontend**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) for robust, typed development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for rapid, utility-first design
- **Backend**: [Google Gemini API](https://ai.google.dev/gemini-api) for multi-modal AI capabilities
- **Image Generation**: [Imagen 4.0](https://deepmind
