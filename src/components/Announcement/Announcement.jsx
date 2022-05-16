import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAnnouncements } from '../../store/slice/announcement-slice';
import '../Announcement/Announcement.css';

const Announcement = ({ data, setEditActive, editDataId }) => {
  const [currentData, setCurrentData] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  const deleteHandle = () => {
    dispatch(deleteAnnouncements({ id: data.id }));
  };

  return (
    <div className='announcement__card'>
      <div className='announcement__info'>
        <Link to={`/${data.id}`} className='announcement__link'>
          <h2>{currentData.title}</h2>
        </Link>
      </div>
      <div className='announcement__action'>
        <button
          className='announcement__button button_edit'
          onClick={() => {
            setEditActive(true);
            editDataId(data);
          }}
        >
          Edit
        </button>
        <button
          className='announcement__button button_delete'
          onClick={deleteHandle}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Announcement;
