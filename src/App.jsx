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
        path: 'shinpad',
        element: <Shinpad />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
