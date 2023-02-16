import React, { useState } from 'react';
import axios from 'axios';

export default function SignUpPage() {
  const [error, setError] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);

    // if (!(pass && formData.passRepeat && name)) {
    //   return setError({ message: 'Заполнены не все поля' });
    // }
    if (formData.pass !== formData.passRepeat) {
      return setError({ message: 'Пароли не совпадают' });
    }
    axios.post('/api/user/signup', formData)
      .then((res) => {
        // window.location = '/';
      })
      .catch((err) => {
        console.log(err.response.data);
        setError({ message: `Такая почта уже существует` });
      });
  };

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Ваше ФИО
            <input spellCheck="true" type="text" name="username" className="form-control" id="user" />
          </label>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Ваш email
              <input type="email" name="email" className="form-control" id="email" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Ваш пароль
              <input type="password" name="pass" className="form-control" id="pass" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Повторите пароль
              <input type="password" name="passRepeat" className="form-control" id="pass" />
            </label>
          </div>

        </div>

        <button type="submit" className="btn btn-dark">Зарегистрироваться</button>
        {error.message && <div style={{ color: 'red' }}>{error.message}</div>}
      </form>
    </div>
  );
}
