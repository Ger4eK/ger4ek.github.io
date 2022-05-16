import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import EditAnnouncement from '../../components/EditAnnouncement/EditAnnouncement';
import { similarAnnouncement } from '../../store/slice/announcement-slice';
import './AnnouncementPage.css';

const AnnouncementPage = () => {
  const [editModal, setEditModal] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  const announcements = useSelector(
    (state) => state.announcements.announcements
  );

  const currentAnnouncement = announcements.find(
    (announcement) => announcement.id === parseInt(id)
  );

  useEffect(() => {
    dispatch(
      similarAnnouncement({
        title: currentAnnouncement.title,
        id: currentAnnouncement.id,
      })
    );
  }, [dispatch, currentAnnouncement.title, currentAnnouncement.id]);

  const similar = useSelector(
    (state) => state.announcements.similarAnnouncements
  );

  const addOpenModalHandler = () => {
    setEditModal(true);
  };
  const addCloseModalHandler = () => {
    setEditModal(false);
  };

  return (
    <div className='announcementPage'>
      <div className='announcementPage__info'>
        <h2>{currentAnnouncement.title}</h2>
        <p>
          <span>Description: </span> {currentAnnouncement.description}
        </p>
        <div className='announcementPage__data'>{currentAnnouncement.date}</div>

        <div>
          <button
            onClick={addOpenModalHandler}
            className='announcementPage__action'
          >
            Edit
          </button>
          <EditAnnouncement
            active={editModal}
            onClose={addCloseModalHandler}
            editDataId={currentAnnouncement}
          />
        </div>
      </div>
      <h1>Similar Announcements</h1>
      {similar.map((item) => (
        <div key={item.id} className='similar__announcements'>
          <Link to={`/${item.id}`} className='announcement__link'>
            <h2>{item.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementPage;
