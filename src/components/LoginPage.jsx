import axios from 'axios';
import React, { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState({});
  const loginHandler = (e) => {
    e.preventDefault();
    axios.post('/api/user/login', Object.fromEntries(new FormData(e.target)))
      .then(() => window.location = '/')
      .catch((err) => setError({ message: 'Неверный логин или пароль' }));
  };

  return (
    <div
      style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
      }}
    >
      <form onSubmit={loginHandler} >
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Ваш email
            <input type="email" name="email" className="form-control" id="email" />
          </label>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Ваш пароль
              <input type="password" name="pass" className="form-control" id="pass" />
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark">Войти</button>
        {error.message && <div style={{ color: 'red' }}>{error.message}</div>}

        <p>Не зарегистрированы?</p>
        <a href="/signup" type="button" className="btn btn-dark">Регистрация</a>
      </form>
    </div>
  );
}
