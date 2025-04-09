
import React from 'react';
import { TinaEditProvider } from 'tinacms/dist/edit-state';

interface TinaProviderProps {
  children: React.ReactNode;
}

export const TinaProvider: React.FC<TinaProviderProps> = ({ children }) => {
  const editMode = window.location.pathname.startsWith('/admin');
  
  return (
    <TinaEditProvider editMode={editMode}>
      {children}
    </TinaEditProvider>
  );
};

export default TinaProvider;
