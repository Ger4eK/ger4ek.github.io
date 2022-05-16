import React, { useState } from 'react';
import Announcements from '../../components/Announcements/Announcements';
import '../../pages/HomePage/HomePage.css';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const announcements = useSelector(
    (state) => state.announcements.announcements
  );

  const changeHandle = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = announcements.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className='homePage'>
        <div className='homePage__search'>
          <input
            onChange={changeHandle}
            type='text'
            placeholder='Type to search...'
          />
        </div>
      </div>
      <Announcements data={filteredData} searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
