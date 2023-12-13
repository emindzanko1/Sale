import { Outlet } from 'react-router-dom';
import MainNavigation from '../navigation/MainNavigation';
import Footer from '../navigation/Footer';

export default function RootPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
