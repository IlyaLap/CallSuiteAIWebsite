
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import TinaProvider from './components/TinaProvider';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <TinaProvider>
      <App />
    </TinaProvider>
  </React.StrictMode>
);

// Console message to remind about TinaCMS setup
console.log("Remember to run 'npx tinacms dev -c \"npm run dev\"' to start TinaCMS");
