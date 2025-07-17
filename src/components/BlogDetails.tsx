import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, CalendarDays, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogDetails: React.FC = () => {
  // Blog posts data (same as in BlogsSection but expanded)
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'polygranite-trends',
      title: 'Latest Trends in Polygranite Surfaces',
      excerpt: 'Discover the newest design trends and applications for polygranite in modern architecture.',
      image: 'https://image.made-in-china.com/202f0j00jsTiWUcKEbRJ/Polygranite-Marble-UV-WPC-Spc-Board-PVC-Marble-Sheet-High-Glossy-2-4m-X-1m-Artificial-Stone-WPC-Board-4mm-PVC-Marble-Wall-Panel-for-Home-Decoration.webp',
      content: `
        <p>Polygranite surfaces have revolutionized modern architecture with their versatility and durability. In 2023, we're seeing several exciting trends emerge:</p>
        
        <h3>1. Matte Finishes</h3>
        <p>The demand for matte-finished polygranite has grown by 40% compared to last year. These non-reflective surfaces provide a sophisticated look while being easier to maintain.</p>
        
        <h3>2. Larger Format Sheets</h3>
        <p>Architects are increasingly specifying 5' x 10' sheets to minimize visible seams in commercial applications. This creates cleaner lines and more expansive visual spaces.</p>
        
        <h3>3. Textured Surfaces</h3>
        <p>New manufacturing techniques allow for realistic stone textures that provide both visual and tactile interest, perfect for feature walls and reception areas.</p>
        
        <p>At Maa Mangala Polygranite, we stock over 50 varieties of these trending surfaces, with custom solutions available for large projects.</p>
      `,
      author: 'Rahul Sharma',
      date: 'June 15, 2023',
      readTime: '4 min read',
      category: 'Materials'
    },
    {
      id: 2,
      slug: 'wpc-durability',
      title: 'Why WPC Panels Outperform Traditional Materials',
      excerpt: 'Learn how WPC panels provide better durability and maintenance benefits for your projects.',
      image: 'https://www.onsungroup.com/wp-content/uploads/2024/08/10003-3.jpg',
      content: `
        <p>Wood Plastic Composite (WPC) panels have become the material of choice for architects and homeowners alike. Here's why they outperform traditional materials:</p>
        
        <h3>Superior Weather Resistance</h3>
        <p>Our tests show WPC maintains structural integrity after 5000+ hours of UV exposure, compared to wood's 800-hour lifespan in similar conditions.</p>
        
        <h3>Low Maintenance</h3>
        <p>Unlike wood that requires annual sealing, WPC only needs occasional cleaning with mild soap and water. No polishing or special treatments needed.</p>
        
        <h3>Eco-Friendly Advantage</h3>
        <p>Made from 60% recycled materials, our WPC panels reduce deforestation while offering better performance than virgin wood products.</p>
        
        <p>Recent installations at the Seaside Resorts project demonstrate how WPC can withstand coastal conditions where traditional materials fail within 2-3 years.</p>
      `,
      author: 'Priya Patel',
      date: 'May 28, 2023',
      readTime: '5 min read',
      category: 'Innovation'
    },
    {
      id: 3,
      slug: 'interior-tips',
      title: '5 Interior Design Tips with PVC Panels',
      excerpt: 'Professional tips to transform your spaces using PVC wall panels creatively.',
      image: 'https://delbypvcpanels.com/wp-content/uploads/2025/02/image-13.png',
      content: `
        <p>PVC wall panels offer incredible design flexibility. Here are 5 professional tips to maximize their potential:</p>
        
        <h3>1. Create Feature Walls</h3>
        <p>Use patterned PVC panels on one wall to create a focal point without overwhelming the space. Our digital print collection offers hundreds of options.</p>
        
        <h3>2. Mix Textures</h3>
        <p>Combine smooth and textured PVC panels in the same room for visual interest. The contrast works particularly well in living rooms and bedrooms.</p>
        
        <h3>3. Vertical vs. Horizontal</h3>
        <p>Vertical installation makes rooms appear taller, while horizontal layouts can make narrow spaces feel wider.</p>
        
        <h3>4. Lighting Effects</h3>
        <p>Pair glossy PVC panels with strategic lighting to create stunning reflective effects in commercial spaces.</p>
        
        <h3>5. Easy Updates</h3>
        <p>The lightweight nature of PVC makes it perfect for seasonal updates. Change your look without structural changes.</p>
      `,
      author: 'Anika Verma',
      date: 'April 12, 2023',
      readTime: '6 min read',
      category: 'Design'
    }
  ];

  // Get the slug from URL params
  const { slug } = useParams<{ slug: string }>();
  
  // Find the blog post matching the slug
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold">Blog post not found</h2>
        <Link to="/blogs" className="text-primary mt-4 inline-block">
          Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="py-12 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/blogs" 
          className="inline-flex items-center text-primary mb-8 hover:underline"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back to Blogs
        </Link>

        {/* Blog Header */}
        <div className="mb-8">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-500 space-x-6">
            <div className="flex items-center">
              <CalendarDays size={18} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-10 rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>

        {/* Blog Content */}
        <article 
          className="prose max-w-none prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold mr-6">
              {post.author.charAt(0)}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{post.author}</h4>
              <p className="text-gray-600">Maa Mangala Polygranite Expert</p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;