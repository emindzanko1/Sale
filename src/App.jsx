import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/Root';
import HomePage from './pages/Home';
import Shinpad from './pages/Shinpad';
import NewItem from './components/NewItem';

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
      },
      {
        path: 'items/new',
        element: <NewItem />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
