import React, { useState } from 'react';
import axios from 'axios';

export default function ListForm({ setRoutes }) {
  const [input, setInput] = useState({
    length_way: '', img: '', location: '', name_way: '',
  });

  const handlerInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // const response = await fetch('api/addlist', {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(input),
    // });

    // // console.log('after f/etch', response);
    // window.location.href = '/';
    // setAllRoute((prev) => [input, ...prev]);
    // setInput({
    //   length_way: '', img: '', location: '', name_way: '',
    // });
    axios.post('/addlist', Object.fromEntries(new FormData(e.target)))
      .then((res) => setRoutes((prev) => [...prev, res.data]))
      .catch(console.log);
    setInput({
      length_way: '', img: '', location: '', name_way: '',
    });
  };
  return (
    <div style={{
      display: 'flex', justifyContent: 'left', alignItems: 'center', height: '80vh',
    }}
    >
      <form onSubmit={submitHandler}>
        <h3>Создание нового маршрута</h3>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Изображение
            <input
              name="img"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="..."
              onChange={handlerInput}
              value={input.img}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Название маршрута
            <input
              name="name_way"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="..."
              onChange={handlerInput}
              value={input.name_way}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="length_way" className="form-label">
            Длина маршрута
            <input
              name="length_way"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="..."
              onChange={handlerInput}
              value={input.length_way}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Населённый пункт
            <input
              name="location"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="..."
              onChange={handlerInput}
              value={input.location}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-dark">Добавить маршрут</button>
      </form>
    </div>
  );
}
