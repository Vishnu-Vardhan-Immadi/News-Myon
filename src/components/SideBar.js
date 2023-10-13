import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import CategoryList from './CategoryList';


const SidebarCarousel = () => {
  const carouselData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      category: 'General',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      category: 'Business',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW50ZXJ0YWlubWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      category: 'Entertainment',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      category: 'Health',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      category: 'Science',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1907&q=80',
      category: 'Sports',
    },
    {
      id: 7,
      image: 'https://media.istockphoto.com/id/1449084209/photo/concentrated-black-female-engineer-writing-code-developing-software-for-modern-drone-control.webp?b=1&s=170667a&w=0&k=20&c=-qAKVS8_DqTxLKQVYr7rq7txAOq0C5RwSP4iiefwclE=',
      category: 'Technology',
    },
  ];

  const navigate = useNavigate();

  const handleButtonClick = (category) => {
    // Update the route to match the path you defined in your routes
    navigate(`/category/${category.toLowerCase()}`);
  };
  
  
  return (
    
    <div className="sidebar-carousel-container"  style={{ backgroundColor: '#000' }}>
      <div className="sidebar">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          {carouselData.map((item) => (
            <div key={item.id}>
              <div
                className="carousel-image-container"
                style={{
                  paddingBottom: '56.25%', // 16:9 aspect ratio (adjust as needed)
                  position: 'relative',
                }}
              >
                <img
                  src={item.image}
                  alt={`Slide ${item.id}`}
                  style={{
                    objectFit: 'cover', // Cover the container
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
              <p className="legend">
                <button
                  onClick={() => handleButtonClick(item.category)}
                  className="read-more-button"
                >
                  <b>{item.category}</b>
                </button>
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <CategoryList/>
    </div>
    
  );
};

export default SidebarCarousel;




