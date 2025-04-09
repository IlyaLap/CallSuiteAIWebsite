
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add TinaCMS client initialization if needed
// import { TinaEditProvider } from "tinacms/dist/edit-state";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* Wrap with TinaEditProvider if needed for visual editing */}
    <App />
  </React.StrictMode>
);

// Console message to remind about TinaCMS setup
console.log("Remember to run 'npx tinacms dev -c \"npm run dev\"' to start TinaCMS");
