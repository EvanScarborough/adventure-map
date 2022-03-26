import React, { useEffect, useState } from 'react';
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

const AUTH_LOCALSTORAGE_KEY = "auth";

export const AuthContext = React.createContext<Auth|null>(null);

const App = () => {
  const [auth, setAuth] = useState<Auth|null>(null);

  useEffect(() => {
    const storedString:string|null = localStorage.getItem(AUTH_LOCALSTORAGE_KEY);
    if (storedString == null || storedString === "") return;
    try {
      const storedAuth:Auth|null = JSON.parse(storedString);
      console.log(storedAuth);
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
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
