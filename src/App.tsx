import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element= {<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path ='/details' element = {<Details/>} />
          <Route path = '/profile' element = {<Profile/>} />
        </Routes>  
      </Router>
    </>
  );
}

export default App;
