
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPageData } from '@/lib/tina-client';
import TinaContent from '@/components/TinaContent';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TinaPage: React.FC = () => {
  const { slug = 'home' } = useParams<{ slug?: string }>();
  const relativePath = `${slug}.mdx`;
  
  // Fetch the page data using Tina client
  const { data, isLoading, error } = useQuery({
    queryKey: ['page', relativePath],
    queryFn: () => fetchPageData(relativePath),
  });

  if (isLoading) {
    return <div className="container mx-auto py-20 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-20 text-center">Error loading page</div>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto py-10 px-4">
        <TinaContent 
          query={`
            query PageQuery($relativePath: String!) {
              page(relativePath: $relativePath) {
                title
                body
              }
            }
          `}
          variables={{ relativePath }}
          data={data}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TinaPage;
