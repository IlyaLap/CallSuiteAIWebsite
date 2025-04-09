
import React from 'react';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface TinaContentProps {
  query: any;
  variables: Record<string, any>;
  data: any;
}

const TinaContent: React.FC<TinaContentProps> = ({ query, variables, data }) => {
  // Use the useTina hook to process the data from TinaCMS
  const tinaData = useTina({
    query,
    variables,
    data,
  });

  // Access the content data
  const content = tinaData?.data?.page || tinaData?.data?.post;

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tina-content">
      <h1>{content.title}</h1>
      <TinaMarkdown content={content.body} />
    </div>
  );
};

export default TinaContent;
