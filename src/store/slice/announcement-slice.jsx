import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'announcements',
  initialState: {
    announcements: [
      {
        id: 0,
        title: 'Shop #0',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem dolor sit amet ipsum dolor sit amet consectetur adipisicing elit.Lorem dolor sit amet ipsum dolor sit amet consectetur adipisicing elit.Lorem dolor sit amet ipsum dolor sit amet consectetur adipisicing elit. wdwdwwww wwwwwww wwwwwww',
        date: '2022-05-18',
      },
      {
        id: 1,
        title: 'Meeting #1',
        description: 'Lorem ipsum dolor .',
        date: '2022-05-18',
      },
      {
        id: 2,
        title: 'Book #2',
        description:
          'Lorem  dolor sit amet ipsum dolor sit amet consectetur adipisicing elit.',
        date: '2022-05-18',
      },
      {
        id: 3,
        title: 'Game #3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem  dolor sit amet ipsum dolor sit amet consectetur adipisicing elit.Lorem  dolor sit amet ipsum dolor sit amet consectetur adipisicing elit.Lorem  dolor sit amet ipsum dolor sit amet consectetur adipisicing elit.',
        date: '2022-05-18',
      },
      {
        id: 5,
        title:
          'Lorem ipsum dolor sit amet consectetur  sit amet consecteturadipisicing elit.',
        description:
          'Lorem ipsum dolor sit amet consectetur  sit amet consecteturadipisicing elit.',
        date: '2022-05-18',
      },
      {
        id: 6,
        title: 'Car',
        description: 'Bus',
        date: '2022-05-18',
      },
      {
        id: 7,
        title: 'Bus',
        description: 'llllllll',
        date: '2022-05-18',
      },
      {
        id: 8,
        title: 'Similar',
        description: 'blablablabla',
        date: '2022-05-18',
      },
      {
        id: 9,
        title: 'qfqwfqwf',
        description: 'Similar',
        date: '2022-05-18',
      },
    ],
    similarAnnouncements: [],
  },
  reducers: {
    addAnnouncements: (state, action) => {
      state.announcements.unshift(action.payload);
    },
    updateAnnouncements: (state, action) => {
      const updateState = state.announcements.map((announcements) =>
        announcements.id === action.payload.id ? action.payload : announcements
      );
      state.announcements = updateState;
    },
    deleteAnnouncements: (state, action) => {
      state.announcements = state.announcements.filter(
        (announcements) => announcements.id !== action.payload.id
      );
    },
    similarAnnouncement: (state, action) => {
      const { title, id } = action.payload;
      const similarLetter = title.charAt(0);
      const currentState = current(state.announcements);
      const filteredAnnouncements = currentState.filter(
        (announcement) => announcement.id !== id
      );

      const similar = filteredAnnouncements.filter(
        (announcement) =>
          announcement.title.search(similarLetter) !== -1 ||
          announcement.description.search(similarLetter) !== -1
      );

      state.similarAnnouncements = similar.slice(0, 3);
      //console.log('state.similarAnnouncements', state.similarAnnouncements);
    },
  },
});

export const {
  addAnnouncements,
  updateAnnouncements,
  deleteAnnouncements,
  similarAnnouncement,
} = contactsSlice.actions;
export default contactsSlice.reducer;
