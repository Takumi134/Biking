import React from 'react';
import OneCardList from './OneCardList';

export default function AccountPage({
  allRoutes, user, setRoutes, routes,
}) {
  return (
    <div className="row">
      {routes.map((route) => <OneCardList setRoutes={setRoutes} user={user} route={route} key={route?.id} />)}
    </div>
  );
}
