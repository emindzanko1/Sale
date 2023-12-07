// NavLinks.js
import { Link } from 'react-router-dom';

export default function NavLinks() {
  return (
    <ul className='nav-links'>
      <li>
        <Link to='/'>HOME</Link>
      </li>
      <li>
        <Link to='/'>ADD ITEM</Link>
      </li>
      <li>
        <Link to='/logout'>LOGOUT</Link>
      </li>
    </ul>
  );
}
