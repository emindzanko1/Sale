import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/Root';
import HomePage from './pages/Home';
import Shinpad from './pages/Shinpad';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'logout',
        element: <Shinpad />,
      },
      {
        path: 'shinpad/:id',
        element: <Shinpad />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
