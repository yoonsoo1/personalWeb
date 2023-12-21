import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

function BlogPostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => p.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  const renderContentWithLinks = (content) => {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <div className='mt-24'>
      <div className='text-white font-bold text-2xl'>{post.title}</div>
      <div className='text-white mb-4'>{post.date}</div>

        {post.content.map((content, index) => (
            <div key={index} className="text-white text-left text-base mb-4 px-12">
            {renderContentWithLinks(content)}
            </div>
        ))}

        {Object.entries(post.youtubeVideos).map(([title, videoId], index) => (
            <div className='mb-8'>
                <div className="text-white font-bold mb-4">{title}</div>
                <div key={index} className="video-responsive">
                    <YouTube videoId={videoId} />
                </div>
            </div>
            
        ))}

    </div>
  );
}

export default BlogPostDetail;
