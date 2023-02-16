import React from 'react';

export default function OneCardList() {
  return (
    <div className="card" style={{ width: '56rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">Название маршрута</h3>
        <h5 className="card-autor">Автор маршрута</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">длина</li>
        <li className="list-group-item">насёленный пункт</li>
        <li className="list-group-item">автор</li>

      </ul>
      <div className="card-body">
        <a href="/details" className="card-link">Детальная информация</a>
      </div>
    </div>
  );
}
