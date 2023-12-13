import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useState } from 'react';
import SideDrawer from './SideDrawer';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleToggle() {
    setShowSidebar(prevState => !prevState);
  }
  return (
    <>
      {showSidebar && <SideDrawer />}
      <header className='header'>
        <h1>
          <Link className='title'>Sportska oprema Sale</Link>
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
