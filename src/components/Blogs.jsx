import React from 'react';
import BlogPost from './BlogPost';

function Blogs() {
  const blogPosts = [
    { id: 1, title: 'Video Summary Comparison', date:'2023/12/11', summary: 'Comparison of video summary between model generated and ground truths' },
  ];

  return (
    <div className="p-4">
      <h1 className="font-bold text-white text-2xl mb-8 mt-12 md:mt-24">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;