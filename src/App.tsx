import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import HomePage from './pages/home/home.component';
import LoginPage from './pages/login/login.component';
import RegisterPage from './pages/login/register.component';
import Auth from './types/auth';
import AuthContext from './hooks/auth-context';
import NewLocationPage from './pages/new-location/new-location.component';
import LocationPage from './pages/location/location.component';
import LocationNewAdventurePage from './pages/location-new-adventure/location-new-adventure.component';
import UserPage from './pages/user/user.component';

const AUTH_LOCALSTORAGE_KEY = "auth";

const App = () => {
  const [auth,setAuth] = useState<Auth|null>(null);

  useEffect(() => {
    const storedString:string|null = localStorage.getItem(AUTH_LOCALSTORAGE_KEY);
    if (storedString == null || storedString === "") return;
    try {
      const storedAuth:Auth|null = JSON.parse(storedString);
      setAuth(storedAuth);
    }
    catch(err) { /* nbd just log in again */ }
  }, []);

  const login = (auth:Auth) => {
    console.log(auth);
    localStorage.setItem(AUTH_LOCALSTORAGE_KEY, JSON.stringify(auth));
    setAuth(auth);
  };

  return (
    <AuthContext.Provider value={auth}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage login={login} />} />
            <Route path="/register" element={<RegisterPage login={login} />} />
            <Route path="/new-location" element={<NewLocationPage />} />
            <Route path="/location/:locationId/new-adventure" element={<LocationNewAdventurePage />} />
            <Route path="/location/:locationId" element={<LocationPage />} />
            <Route path="/user/:userId" element={<UserPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
