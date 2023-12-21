import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import BlogPostDetail from './components/BlogPostDetail'; // Import the new component
import './App.css';

function App() {
  const blogPosts = [
    {
      id: 1,
      title: 'Video Summary Comparison',
      date: 'Dec 11, 2023',
      content: [
        'The evaluation of summarization in the domain of text is very subjective. One user may find summary A, which fits their preference better, over summary B. What happens when we have multiple summaries? The difference can be BIG because an individual’s preference is rather hard to control. Citing <a href= https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1090460/>Hripcsak et al.</a>, which showed that average of agreement among experts is numerically identical to average F-measure, TVSum assumes that by getting the average F-measures amongst many annotators, we can evaluate the model’s performance.',
        'In this blog post, I wanted to demonstrate how difficult this process actually is. An interesting paper from TMLR, <a href=https://openreview.net/pdf?id=Uj6MRfR1P5>Chhabra et al.</a>, this month showed how intricate this process is. It turns out, the annotator’s preference can be attributable to their identity such as race and gender. Such fairness has not been reflected in previous video summary datasets. Even accounting for these background information, it is still very hard to measure the “soundness” or “goodness” of a video summary.',
        'With this background information in mind, I want to show some examples comparing 3 ground truth annotations and our model from our <a href=https://arxiv.org/abs/2309.09405>ICASSP ’24 paper</a>, LMVS, generated summary. The first video shows the original video. The summaries are of 15% or less in terms of its length compared to the original video. Please take a look and see what you think of a “good” summary of the original video is!'
      ],
      youtubeVideos: {
        "Original Video: ": 'GsAD1KT1xo8',
        "LMVS (Ours) Generated Summary: ": 'cpVHYQB8RFw',
        "Ground Truth from Annotator #4": 'YzY-TzlSBM0',
        "Ground Truth from Annotator #8": 'iNGy7A5Miz0',
        "Ground Truth from Annotator #20": 'nWagbUTz-Ac',
      }
    },
    // Add to Blogs.jsx as well with a summary of the blog
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs posts={blogPosts} />} />
          <Route path="/blogs/:id" element={<BlogPostDetail posts={blogPosts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
