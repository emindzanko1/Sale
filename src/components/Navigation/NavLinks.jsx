import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <nav className='nav-links'>
      <Link to='/shinpad'>Link1</Link>
      <Link to='/shinpad'>Link2</Link>
      <Link to='/shinpad'>Link3</Link>
    </nav>
  );
}
