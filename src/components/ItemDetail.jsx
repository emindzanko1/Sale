import { Link } from "react-router-dom";
import Button from "../UI/Button";

export default function ItemDetail({ item }) {
  return (
    <li className='item'>
      <Link to={`shinpad/${item.id}`} className="item-link">
        <img src={item.image} alt='kostobran' />
        <div>
          <h3>{item.name}</h3>
          <p className='item-price'>{item.price}</p>
          <p className='item-description'>{item.description}</p>
        </div>
        <p className='item-actions'>
          <Button>Delete</Button>
        </p>
      </Link>
    </li>
  );
}
