import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/Root';
import HomePage from './pages/Home';
import Shinpad from './pages/Shinpad';
import NewItem from './components/NewItem';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './util/sliderData';
import Authentication, {action as authAction} from './pages/Authentication';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'logout',
        element: <Shinpad />,
      },
      {
        path: 'shinpad/:id',
        element: <ImageSlider slides={SliderData} />,
      },
      {
        path: 'items/new',
        element: <NewItem />,
      },
      {
        path: 'register',
        element: <Authentication />,
        action: authAction 
      },
      {
        path: 'login',
        element: <Authentication />,
        action: authAction 
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

