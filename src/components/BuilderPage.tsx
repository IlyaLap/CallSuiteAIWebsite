
import React, { useEffect, useState } from 'react';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { builder } from '@builder.io/sdk';
import { useLocation } from 'react-router-dom';
import { BUILDER_MODELS } from '../lib/builder';

export default function BuilderPage() {
  const location = useLocation();
  const [content, setContent] = useState<any>(null);
  const isPreviewing = useIsPreviewing();
  
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get(BUILDER_MODELS.PAGE, {
          url: location.pathname,
          options: { includeRefs: true },
        })
        .promise();
      
      setContent(content);
    }
    
    fetchContent();
  }, [location.pathname]);
  
  // Show loading while content is being fetched
  if (!content && !isPreviewing) {
    return <div>Loading...</div>;
  }
  
  return <BuilderComponent model={BUILDER_MODELS.PAGE} content={content} />;
}
