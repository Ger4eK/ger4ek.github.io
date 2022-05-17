import React, { useState } from 'react';
import AddAnnouncement from '../AddAnnouncement/AddAnnouncement';
import Announcement from '../Announcement/Announcement';
import '../Announcements/Announcements.css';
import EditAnnouncement from '../EditAnnouncement/EditAnnouncement';

const Announcements = ({ data }) => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState('');

  const openingAddModalHandler = () => {
    return setAddModal(true);
  };
  const openingEditModalHandler = () => {
    return setEditModal(true);
  };

  const addCloseModalHandler = () => {
    setAddModal(false);
  };
  const editCloseModalHandler = () => {
    setEditModal(false);
  };

  const EditData = (data) => {
    return setEditData(data);
  };

  return (
    <div className='announcements'>
      <div className='add__announcement'>
        <button
          onClick={openingAddModalHandler}
          className='announcement__button button_add'
        >
          + Add announcement
        </button>

        <AddAnnouncement active={addModal} onClose={addCloseModalHandler} />
        <EditAnnouncement
          active={editModal}
          onClose={editCloseModalHandler}
          editDataId={editData}
        />
      </div>
      {data.map((announcement) => {
        return (
          <div key={announcement.id}>
            <Announcement
              data={announcement}
              editDataId={EditData}
              onOpen={openingEditModalHandler}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Announcements;
