import React, { useState } from 'react';
import ListForm from './ListForm';
import OneCardList from './OneCardList';

export default function MainPage({
  allRoutes, user, setRoutes, routes,
}) {
  return (
    <div className="row">
      {routes.map((route) => <OneCardList setRoutes={setRoutes} user={user} route={route} key={route?.id} />)}
    </div>
  );
}
