import React, { useState } from 'react';
import FromIdeaToLaunch from '../assets/blogs/From Idea to Launch.pdf';
import InnovativeBusinessIdeas from '../assets/blogs/Innovative Business Ideas.pdf';
import TheRiseOfStudentEntrepreneurs from '../assets/blogs/The Rise of Student Entrepreneurs.pdf';
import Top10MistakesForEntrepreneurs from '../assets/blogs/Top 10 Mistakes for Entrepreneurs.pdf';

const blogs = [
  { title: 'From Idea to Launch', file: FromIdeaToLaunch },
  { title: 'Innovative Business Ideas', file: InnovativeBusinessIdeas },
  { title: 'The Rise of Student Entrepreneurs', file: TheRiseOfStudentEntrepreneurs },
  { title: 'Top 10 Mistakes for Entrepreneurs', file: Top10MistakesForEntrepreneurs },
];

const Blogs = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const openPdf = (pdf, title) => {
    setSelectedPdf(pdf);
    setSelectedTitle(title);
  };

  const closePdf = () => {
    setSelectedPdf(null);
    setSelectedTitle(null);
  };

  return (
    <div className="container py-5 fade-in">
      <h2 className="mb-4">Our Blogs</h2>
      <div className="list-group">
        {blogs.map((blog, index) => (
          <button key={index} type="button" className="list-group-item list-group-item-action" onClick={() => openPdf(blog.file, blog.title)}>
            {blog.title}
          </button>
        ))}
      </div>

      {selectedPdf && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedTitle}</h5>
                <button type="button" className="btn-close" onClick={closePdf}></button>
              </div>
              <div className="modal-body" style={{ height: '80vh' }}>
                <iframe src={selectedPdf} width="100%" height="100%"></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
