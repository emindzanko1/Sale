// NavLinks.js
import { Link } from 'react-router-dom';

export default function NavLinks() {
  return (
    <ul className='nav-links'>
      <li>
        <Link to='/shinpad'>ADD ITEM</Link>
      </li>
      <li>
        <Link to='/shinpad'>DELETE ITEM</Link>
      </li>
      <li>
        <Link to='/shinpad'>PROBA</Link>
      </li>
    </ul>
  );
}
