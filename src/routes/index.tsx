import MapWrapper from 'views/MapWrapper';
import App from 'App';
import mirage from 'assets/maps/mirage.svg';

import { createBrowserRouter } from 'react-router-dom';
import { mirageNadesMockData } from 'services/api';
import News from 'views/News';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'mirage',
        element: <MapWrapper map={mirage} />,
      },
      {
        path: '/',
        element: <News />,
      },
    ],
  },

  // {
  //   path: 'anubis',
  //   element: <MapWrapper map={anubis} />,
  // },
  // {
  //   path: 'ancient',
  //   element: <MapWrapper map={ancient} />,
  // },
  // {
  //   path: 'inferno',
  //   element: <MapWrapper map={inferno} />,
  // },
  // {
  //   path: 'overpass',
  //   element: <MapWrapper map={overpass} />,
  // },
  // {
  //   path: 'vertigo',
  //   element: <MapWrapper map={vertigo} />,
  // },
]);
