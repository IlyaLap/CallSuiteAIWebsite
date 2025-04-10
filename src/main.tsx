
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BuilderProvider } from '@builder.io/react';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BuilderProvider apiKey="df576bc7e8a34227af099a4761da6b74">
      <App />
    </BuilderProvider>
  </React.StrictMode>
);
