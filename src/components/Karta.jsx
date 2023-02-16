import React from 'react';

import {
  YMaps, Map, Placemark, GeoObject, Panorama, GeolocationControl, RouteButton, RulerControl,
  SearchControl, TypeSelector,
} from '@pbe/react-yandex-maps';

export default function Karta() {
  // const defaultState = {
  //   center: [55.75, 37.57],
  //   zoom: 5,
  // };

  return (

    <div id="map" style={{ width: '600px', height: '400px' }}>
      <YMaps>
        <Map
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark geometry={[55.751574, 37.573856]} />
          <RouteButton options={{ float: 'right' }} />
          <RulerControl options={{ float: 'right' }} />
          <SearchControl options={{ float: 'right' }} />
          <TypeSelector options={{ float: 'right' }} />
          <GeolocationControl options={{ float: 'left' }} />
        </Map>
      </YMaps>
    </div>

  );
}

// const [zoom, setZoom] = React.useState(9);
// const mapState = React.useMemo(
//   () => ({ center: [55.75, 37.57], zoom }),
//   [zoom],
// );
