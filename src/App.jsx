import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/Root';
import HomePage from './pages/Home';
import Shinpad from './pages/Shinpad';
import NewItem from './components/NewItem';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './util/sliderData';
import Login from './components/Login';

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
        element: <ImageSlider slides={SliderData} />,
      },
      {
        path: 'items/new',
        element: <NewItem />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import ImageSlider from './components/ImageSlider';

// function App() {
//   return <ImageSlider slides={SliderData} />;
// }

// export default App;
