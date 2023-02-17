import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import NavBar from './NavBar';
import ListForm from './ListForm';
import OneCardList from './OneCardList';
import MainPage from './MainPage';
import DetailCard from './DetailCard';
// import Karta from './Karta';
// import AccountPage from './AccountPage';

function App({ user, allRoutes, route }) {
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        {/* <Route path="/" element={<Karta />} /> */}
        <Route path="/" element={<MainPage user={user} allRoutes={allRoutes} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/addlist" element={<ListForm />} />
        <Route path="/list" element={<OneCardList />} />
        <Route path="/details" element={<DetailCard />} />
        <Route path="/account" element={<OneCardList user={user} route={route} allRoutes={allRoutes} />} />

      </Routes>
    </div>
  );
}
export default App;
