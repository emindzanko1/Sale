import { Link } from 'react-router-dom';

export default function NavLinks() {
  return (
    <>
      <ul className='nav-links'>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/items/new'>ADD ITEM</Link>
        </li>
        <li>
          <Link to='/'>LOGOUT</Link>
        </li>
      </ul>
    </>
  );
}
