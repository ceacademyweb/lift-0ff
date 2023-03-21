import { useState, useRef, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import api from './api/api';
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
import Journal from "./pages/Journal.jsx";
import JournalShow from "./pages/JournalShow.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import JornalAdmin from "./pages/JournalAdmin.jsx";
import JournalAdmin from "./pages/JournalAdmin.jsx";

function App() {
  // JSON.parse(sessionStorage.getItem('user')) || nul
  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState(false);
  const [token, setToken] = useState(null);
  const Logout = () => {
    alert('Logout');
  };

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
    api.get('/videos').then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <Header user={user} setUserFn={setUserFn} />
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
                <Media2
                  videos={videos}
                  setVideosFn={setVideosFn}
                  user={user}
                  setUserFn={setUserFn}
                />

              </ProtectedRoute>
            }
          />
          <Route
            path="/fase/:fase/:id"
            element={
              <ProtectedRoute user={user}>
                <Video user={user} videos={videos} setUserFn={setUserFn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/journal"
            element={
              <ProtectedRoute user={user}>
                <Journal videos={videos}
                         setVideosFn={setVideosFn}
                         user={user}
                         setUserFn={setUserFn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/journal/:id"
            element={
              <ProtectedRoute user={user}>
                <JournalShow
                         user={user}
                         setUserFn={setUserFn} />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/journal"
            element={
              <AdminRoute user={user}>
                <JournalAdmin user={user} setUserFn={setUserFn} />
              </AdminRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
