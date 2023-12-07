import { Outlet } from 'react-router-dom';
import MainNavigation from '../navigation/MainNavigation';

export default function RootPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
