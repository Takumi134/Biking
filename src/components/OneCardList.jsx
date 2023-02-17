import React from 'react';

export default function OneCardList({ route }) {
  return (
    <div className="card" style={{ width: '20rem' }}>
      <img src={route?.img} style={{ width: '20', heigth: '20' }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{route?.name_way}</h3>
        <h5 className="card-autor">{route?.user?.id}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{route?.length_way} км.</li>
        <li className="list-group-item">{route?.location}</li>

      </ul>
      <div className="card-body">
        <a href={`/details/${route?.id}`} className="card-link">Детальная информация</a>
      </div>
    </div>
  );
}
