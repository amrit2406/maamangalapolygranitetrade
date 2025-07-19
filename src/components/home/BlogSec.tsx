import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCard {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  slug: string;
}

interface BlogsSectionProps {
  hideHeading?: boolean;
}

const BlogsSection: React.FC<BlogsSectionProps> = ({ hideHeading = false }) => {
  const blogPosts: BlogCard[] = [
    {
      id: 1,
      image: 'https://image.made-in-china.com/202f0j00jsTiWUcKEbRJ/Polygranite-Marble-UV-WPC-Spc-Board-PVC-Marble-Sheet-High-Glossy-2-4m-X-1m-Artificial-Stone-WPC-Board-4mm-PVC-Marble-Wall-Panel-for-Home-Decoration.webp',
      title: 'Latest Trends in Polygranite Surfaces',
      excerpt: 'Discover the newest design trends and applications for polygranite in modern architecture.',
      slug: 'polygranite-trends'
    },
    {
      id: 2,
      image: 'https://www.onsungroup.com/wp-content/uploads/2024/08/10003-3.jpg',
      title: 'Why WPC Panels Outperform Traditional Materials',
      excerpt: 'Learn how WPC panels provide better durability and maintenance benefits for your projects.',
      slug: 'wpc-durability'
    },
    {
      id: 3,
      image: 'https://delbypvcpanels.com/wp-content/uploads/2025/02/image-13.png',
      title: '5 Interior Design Tips with PVC Panels',
      excerpt: 'Professional tips to transform your spaces using PVC wall panels creatively.',
      slug: 'interior-tips'
    }
  ];

  return (
    <section className="py-12 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-white">
      <div className="container mx-auto">
        {/* Conditional Section Heading */}
        {!hideHeading && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Blogs
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
        )}

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group">
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Blog Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="text-primary font-medium inline-flex items-center">
                      Read More
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;