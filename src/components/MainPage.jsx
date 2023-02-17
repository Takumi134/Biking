import React, { useState } from 'react';
import ListForm from './ListForm';
import OneCardList from './OneCardList';

export default function MainPage({ allRoutes, user }) {
  const [routes, setRoutes] = useState(allRoutes || []);
  return (
    <>
      <div className="row" />
      <div className="row">
        {routes.map((route) => <OneCardList setRoutes={setRoutes} user={user} route={route} key={route?.id} />)}
      </div>
    </>
  );
}
