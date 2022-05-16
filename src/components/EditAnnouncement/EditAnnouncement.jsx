import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAnnouncements } from '../../store/slice/announcement-slice';
import Modal from '../Modal/Modal';

const EditAnnouncement = ({ active, onClose, editDataId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();
  const announcements = useSelector(
    (state) => state.announcements.announcements
  );

  const currentAnnouncements = announcements.find(
    (announcement) => announcement.id === editDataId.id
  );

  useEffect(() => {
    if (currentAnnouncements) {
      setTitle(currentAnnouncements.title);
      setDescription(currentAnnouncements.description);
      setDate(currentAnnouncements.date);
    }
  }, [currentAnnouncements]);

  const submitHandle = (event) => {
    event.preventDefault();
    const data = {
      id: currentAnnouncements.id,
      title,
      description,
      date,
    };

    dispatch(updateAnnouncements(data));
    onClose();
  };

  return (
    <div>
      <Modal active={active} onClose={onClose}>
        <form className='add__announcement-form' onSubmit={submitHandle}>
          <label htmlFor='title'>Title:</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            type='text'
            id='title'
          />
          <label htmlFor='description'>Description:</label>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            type='text'
            id='description'
            rows='7'
            cols='30'
            maxLength='300'
          ></textarea>
          <label htmlFor='date'>Date:</label>
          <input
            onChange={(event) => setDate(event.target.value)}
            value={date}
            type='date'
            id='date'
          />
          <button type='submit'>Edit announcement</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditAnnouncement;
