import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import NavBar from './NavBar';
import ListForm from './ListForm';
import OneCardList from './OneCardList';
import MainPage from './MainPage';
import DetailCard from './DetailCard';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/addlist" element={<ListForm />} />
        <Route path="/list" element={<OneCardList />} />
        <Route path="/details" element={<DetailCard />} />

      </Routes>
    </div>
  );
}
export default App;
