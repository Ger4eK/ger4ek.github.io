import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnnouncements } from '../../store/slice/announcement-slice';
import Modal from '../Modal/Modal';
import './AddAnnouncement.css';

const AddAnnouncement = ({ active, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

  const submitHandle = (event) => {
    event.preventDefault();
    if (title.trim().length === 0) {
      return;
    }
    const data = {
      id: Math.floor(Math.random() * 1000000000),
      title,
      description,
      date,
    };
    dispatch(addAnnouncements(data));
    setTitle('');
    setDescription('');
    setDate('');
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
            maxLength='70'
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
          <button type='submit'>Add announcement</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddAnnouncement;
