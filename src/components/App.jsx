import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import NavBar from './NavBar';
import ListForm from './ListForm';
import OneCardList from './OneCardList';
import MainPage from './MainPage';
import DetailCard from './DetailCard';
import AccountPage from './AccountPage';
// import Karta from './Karta';
// import AccountPage from './AccountPage';

function App({ user, allRoutes, route }) {
  const [routes, setRoutes] = useState(allRoutes || []);

  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        {/* <Route path="/" element={<Karta />} /> */}
        <Route path="/" element={<MainPage user={user} allRoutes={allRoutes} routes={routes} setRoutes={setRoutes} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/addlist" element={<ListForm />} />
        <Route path="/list" element={<OneCardList />} />
        <Route path="/details/:id" element={<DetailCard route={route} />} />
        <Route path="/account" element={<AccountPage user={user} allRoutes={allRoutes} routes={routes} setRoutes={setRoutes} />} />

      </Routes>
    </div>
  );
}
export default App;
