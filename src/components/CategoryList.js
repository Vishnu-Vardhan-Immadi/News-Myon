import React from 'react';
import { Link } from "react-router-dom";

const CategoryList = () => {
  const scrollToNews = (category) => {
    // Find the news component by its id
    const newsComponent = document.getElementById('news-component');

    if (newsComponent) {
      // Scroll to the news component smoothly
      newsComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    
    <div className="category-list"  style={{ backgroundColor: '#000' }}>
      <h1 className='heading'>Related Links</h1>
      <ul>
        <li><Link to="/category/general" onClick={() => scrollToNews('general')}>General News</Link></li>
        <li><Link to="/category/business" onClick={() => scrollToNews('business')}>Business News</Link></li>
        <li><Link to="/category/entertainment" onClick={() => scrollToNews('entertainment')}>Entertainment News</Link></li>
        <li><Link to="/category/health" onClick={() => scrollToNews('health')}>Health News</Link></li>
        <li><Link to="/category/sports" onClick={() => scrollToNews('sports')}>Sports News</Link></li>
        <li><Link to="/category/science" onClick={() => scrollToNews('science')}>Science News</Link></li>
        <li><Link to="/category/technology" onClick={() => scrollToNews('technology')}>Technology News</Link></li>        
      </ul>
    </div>
                      
  );
};

export default CategoryList;
