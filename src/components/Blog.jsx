import art1 from '../assets/images/article-1.jpeg';
import art2 from '../assets/images/article-2.jpeg';
import art3 from '../assets/images/article-3.jpeg';
import art4 from '../assets/images/article-4.jpeg';
import art5 from '../assets/images/article-5.jpeg';
import art6 from '../assets/images/article-6.jpeg';

const Blog = () => {
  const articles = [
    {
      category: "BRANDING",
      title: "What is the branding, and what we need it?",
      description: "On the other hand, we denounce with righteous indignation and...",
      image: {art1}
    },
    {
      category: "TIKTOK",
      title: "What is the branding, and what we need it?",
      description: "On the other hand, we denounce with righteous indignation and...",
      image: {art2}
    },
    {
      category: "LOGO DESIGN",
      title: "What is the branding, and what we need it?",
      description: "On the other hand, we denounce with righteous indignation and...",
      image: {art3}
    },
    {
      category: "FB",
      title: "What is the branding, and what we need it?",
      description: "On the other hand, we denounce with righteous indignation and...",
      image: {art4}
    },
    {
      category: "AI",
      title: "What is the branding, and what we need it?",
      description: "On the other hand, we denounce with righteous indignation and...",
      image: {art5}
    },
    {
      category: "NFT",
      title: "What is the branding, and what we need it?",
      description: "On the other hand, we denounce with righteous indignation and...",
      image: {art6}
    }
  ];

  return (
    <div className="bg-black text-white p-8">
      <div className="text-center mb-12">
        <p className="text-lime-400 mb-2">BLOGS</p>
        <h2 className="text-4xl font-bold mb-4">News & Articles</h2>
        <p className="text-gray-400">Best Articles to get started</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden flex">
            <img src={article.image} alt={article.title} className="w-1/3 object-cover" />
            <div className="p-4 flex flex-col justify-between w-2/3">
              <div>
                <p className="text-lime-400 text-sm mb-2">{article.category}</p>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-400 text-sm">{article.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-lime-400 text-lime-400 rounded hover:bg-lime-400 hover:text-black transition">
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default Blog;