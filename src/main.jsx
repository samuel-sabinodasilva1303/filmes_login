import React, { useContext} from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import App from './App';
import LoginPage from "./pages/Login";
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';

import { AuthProvider, AuthContext } from './contexts/auth';

import './mobile.css'
import './index.css';

const AppRoutes = () => {
  const Private = ({ children }) => {
  

    const { authenticated, loading } = useContext(AuthContext);

    if(loading) {
      return <div className="loading">Carregando, aguarde ....</div>
    }

    if(!authenticated) {
      return <Navigate to="/LoginPage" />
    }
    return children;

  };

  return (
    <Router>
      <AuthProvider>
       <Routes>
        <Route element={<App />}>
  
          <Route exact path="/LoginPage" element={<LoginPage />}/>
          <Route exact path="/" element={<Private><Home /></Private> } />
          <Route path="movie/:id" element={<Private><Movie /></Private>} />
          <Route path="search" element={<Private><Search /></Private>} />
        </Route>
        </Routes>
      </AuthProvider>
    </Router>

  );

};


ReactDOM.createRoot(document.getElementById("root")).render(
  <AppRoutes />

);

export default AppRoutes;