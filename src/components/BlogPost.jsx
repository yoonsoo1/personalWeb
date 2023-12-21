import React from 'react';
import { useNavigate } from 'react-router-dom';

function BlogPost({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/${post.id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer p-4 border border-gray-200 rounded-md">
      <h2 className="font-bold text-white text-lg mb-2">{post.title}</h2>
      <div className='text-white'>{post.date}</div>
      <p className='text-white'>{post.summary}</p>
    </div>
  );
}

export default BlogPost;
