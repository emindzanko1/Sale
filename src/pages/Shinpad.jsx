import { useParams } from 'react-router-dom';
import { DUMMY_ITEMS } from '../util/data';

export default function Shinpad() {
  const params = useParams();
  const shinpadId = params.id;
  const shinpad = DUMMY_ITEMS.find(item => item.id === shinpadId);
  
  return (
    <>{shinpad ? <p>{shinpad.title}</p> : <p>Emin</p>}</>
  );
}
