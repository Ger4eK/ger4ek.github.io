import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AnnouncementPage from './pages/AnnouncementPage/AnnouncementPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<AnnouncementPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
