import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shinpad from './components/Pages/Shinpad';
import HomePage from './components/Pages/Home';
import RootPage from './components/Pages/Root';

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
