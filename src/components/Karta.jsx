import React, { useEffect } from 'react';

export default function MapNew() {
  useEffect(() => {
    ymaps.ready(init);
    function init() {
      const myMap = new ymaps.Map('map', {
        center: [55.753994, 37.622093],
        zoom: 9,
        controls: [],
      });
      // Построим мультимаршрут.
      const multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: [
          ],
          params: {
            // Тип маршрута: на общественном транспорте.
            routingMode: 'bicycle',
          },
        },
        {
          // Автоматически устанавливать границы карты так,
          // чтобы маршрут был виден целиком.
          boundsAutoApply: true,
        },
        {
          // Опция editorDrawOver запрещает ставить точки поверх объектов карты.
          // Это нужно для того, чтобы пользователи могли
          // создавать промежуточные точки.
          editorDrawOver: true,
          // Опция editorMidPointsType задает тип промежуточных точек,
          // которые будут создаваться на маршруте.
          // "via" - будут создаваться транзитные точки;
          // "way" - путевые точки.
          editorMidPointsType: 'via',
        },
      );
      multiRoute.editor.start({
        // При включении опции addWayPoints пользователи смогут создавать
        // путевые точки по клику на карте.
        addWayPoints: true,
        // При включении опции removeWayPoints пользователи смогут удалять
        // путевые точки.
        // Для удаления точки нужно дважды кликнуть по ней.
        removeWayPoints: true,
        // При включении опции addMidPoints пользователи смогут создавать
        // новые промежуточные точки.
        // Чтобы создать промежуточную точку, нужно кликнуть по линии маршрута и,
        // удерживая кнопку, переместить точку в нужную позицию на карте.
        // Тип промежуточной точки (путевая или транзитная) задается в опции
        // editorMidPointsType
        addMidPoints: true,
      });
      // Отобразим мультимаршрут на карте.
      myMap.geoObjects.add(multiRoute);
      // Подпишемся на событие построения мультимаршрута.
      multiRoute.model.events.add('requestsuccess', () => {
        // Коллекция путевых точек маршрута.
        const wayPoints = multiRoute.getWayPoints();
        // console.log('=================', wayPoints);
        // Проход по коллекции путевых точек.
        // Для каждой точки зададим содержимое меток.
        const arrPoints = [];
        wayPoints.each((point) => {
          arrPoints.push(point.geometry);
          point.options.set({
            iconContentLayout: ymaps.templateLayoutFactory.createClass('{{ properties.request|raw }}'),
          });
        });
        console.log('=======================', arrPoints);
        setCoordinates(arrPoints);
      });
      // Добавление маршрута на карту.
      myMap.geoObjects.add(multiRoute);
    }
  }, []);
  return (
    <div id="map" style={{ width: '1200px', height: '500px' }} />
  );
}
