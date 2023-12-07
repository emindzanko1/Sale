import NavLinks from './NavLinks';

export default function SideDrawer({ children }) {
  return (
    <aside className='side-drawer'>
      <nav className='main-navigation__drawer-nav'>
        <NavLinks />
      </nav>
    </aside>
  );
}
