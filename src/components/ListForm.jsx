import React, { useState } from 'react';

export default function ListForm({  }) {
  const [input, setInput] = useState({
    title: '', img: '', desc: '', price: '',
  });

  const handlerInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const changeHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('api/addlist', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(input),
    });
    // console.log('after f/etch', response);
    window.location.href = '/';
    setAllItems((prev) => [input, ...prev]);
    setInput({
      title: '', img: '', desc: '', price: '',
    });
  };
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh',
    }}
    >
      <form onSubmit={changeHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Длина маршрута
            <input
              name="title"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="..."
              onChange={handlerInput}
              value={input.title}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Населённый пункт
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
          <label htmlFor="desc" className="form-label">
            Название маршрута
            <input
              name="desc"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="..."
              onChange={handlerInput}
              value={input.desc}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Автор маршрута
            <input
              name="price"
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="..."
              onChange={handlerInput}
              value={input.price}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-dark">Добавить маршрут</button>
      </form>
    </div>
  );
}
