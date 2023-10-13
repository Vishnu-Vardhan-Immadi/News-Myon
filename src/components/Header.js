import React, { useEffect, useState } from 'react';

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      const formattedDateTime = now.toLocaleDateString(undefined, options);
      setCurrentDateTime(formattedDateTime);
    };

    // Initial call to set the date and time
    updateDateTime();

    // You can remove the scroll event listener here since we don't need it anymore
    // Cleanup the scroll event listener when the component unmounts
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header-content">
      <header className="app-header">
        <h1>News -|- Myon</h1>
        <p className="current-date-time">{currentDateTime}</p>
      </header>
    </div>
  );
}

export default Header;



