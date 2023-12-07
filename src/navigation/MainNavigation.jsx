import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideDrawer from './SideDrawer';
import NavLinks from './NavLinks';

export default function MainNavigation() {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleToggle() {
    setShowSidebar(prevState => !prevState);
  }

  return (
    <>
      {showSidebar && <SideDrawer />}
      <header className='header'>
        <h1>
          <Link className='title'>Sale Store</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
        <button className='menu-toggle' onClick={handleToggle}>
          {!showSidebar ? <>&#9776;</> : 'X'}
        </button>
      </header>
    </>
  );
}
