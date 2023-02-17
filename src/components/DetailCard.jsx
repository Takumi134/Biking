import React from 'react';

export default function DetailCard({ route }) {
  return (
    <div className="card" style={{ width: '30rem' }}>
      <img src={route?.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{route?.name_way}</h3>
        <h5 className="card-autor">{route?.user?.id}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{route?.length_way} км.</li>
        <li className="list-group-item">{route?.location}</li>

      </ul>
    </div>
  );
}
