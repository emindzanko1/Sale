import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/ItemModal';

export default function NavLinks() {
  const modal = useRef();
  function handleAddItem() {
    modal.current.open();
  }
  return (
    <>
      <Modal ref={modal} />
      <ul className='nav-links'>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/' onClick={handleAddItem}>
            ADD ITEM
          </Link>
        </li>
        <li>
          <Link to='/logout'>LOGOUT</Link>
        </li>
      </ul>
    </>
  );
}
