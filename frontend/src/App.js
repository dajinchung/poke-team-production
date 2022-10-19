import { Routes, Route, HashRouter } from 'react-router-dom';
import { useState } from 'react'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CreateTeamPage from './pages/CreateTeamPage';
import YourTeamPage from './pages/YourTeamPage';
import MainHeader  from './components/MainHeader';

function App() {
  
  //state value
  const [username, setUsername] = useState("")


  return (
    <div className="App">
      <HashRouter>
        <MainHeader title="PokeTeam" username={ username } setUsername={ setUsername } />

      <Routes>
        <Route path="/" element={<HomePage username= { username }/>} />
        <Route path="/login" element={<LoginPage setUsername={ setUsername } />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/create-team" element={<CreateTeamPage /> } />
        <Route path="/your-team" element={<YourTeamPage />} />
      </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
