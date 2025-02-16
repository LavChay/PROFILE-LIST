import './App.css';
import ProfilesList  from './components/ProfilesListComponent';
import CreateProfile from './components/CreateProfileComponent';
import ViewProfile from './components/ViewProfileComponent';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProfilesList />} />
        <Route path="/create" element={<CreateProfile />} />
        <Route path="/view" element={<ViewProfile />} />
      </Routes>
    </div>
  );
}

export default App;
