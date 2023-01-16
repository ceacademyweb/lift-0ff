import { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import Header from './components/Header';
import Index from './pages/Index';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Trading from './pages/Trading';
import Management from './pages/Management';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registro from './pages/registro';
import Test from './pages/Test';
import Media2 from './pages/Media2.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import Video from './pages/Video';

function App() {
  // JSON.parse(sessionStorage.getItem('user')) || nul
  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState(false);
  const [token, setToken] = useState(null);

  const setUserFn = (currentUser, currentToken) => {
    setUser(currentUser);
    setToken(currentToken);
  };
  const setVideosFn = (videosObj) => {
    // console.log(videosObj);
    setVideos(videosObj);
    // console.log(`videos ${videos}`);
  };
  useEffect(() => {
    AOS.init({
      startEvent: 'load',
      easing: 'ease-out-back',
      duration: 850,
      // startEvent: 'DOMContentLoaded',
      useClassNames: true,
      // once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route
            path="/login"
            element={<Login user={user} setUserFn={setUserFn} />}
          />
          {/* <Route path="/media">
            {isLogged ? <Media1 /> : navigate('/login')}
          </Route> */}
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Media2 videos={videos} setVideosFn={setVideosFn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fase/1/:id"
            element={
              <ProtectedRoute user={user}>
                <Video user={user} videos={videos} />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/logout">{setUser(null);}</Route> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
