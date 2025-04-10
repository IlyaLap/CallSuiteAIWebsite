
import React, { useEffect, useState } from 'react';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { builder } from '@builder.io/sdk';
import { useParams } from 'react-router-dom';
import { BUILDER_MODELS } from '../lib/builder';

export default function BuilderResource() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<any>(null);
  const isPreviewing = useIsPreviewing();
  
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get(BUILDER_MODELS.RESOURCE, {
          query: {
            'data.slug': slug
          },
          options: { includeRefs: true },
        })
        .promise();
      
      setContent(content);
    }
    
    fetchContent();
  }, [slug]);
  
  if (!content && !isPreviewing) {
    return <div>Resource not found</div>;
  }
  
  return <BuilderComponent model={BUILDER_MODELS.RESOURCE} content={content} />;
}
