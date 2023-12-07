import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

export default function MainNavigation() {
  const [showSidebar, setShowSidebar] = useState();

  function handleToggle() {
    setShowSidebar(prevState => !prevState);
    console.log('clicked');
  }

  return (
    <>
      <header className='header'>
        <h1>
          <Link className='title'>Sale Store</Link>
        </h1>
        <NavLinks />
        <button className='menu-toggle' onClick={handleToggle}>
          &#9776;
        </button>
      </header>
    </>
  );
}
