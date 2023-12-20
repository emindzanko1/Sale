import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { motion } from 'framer-motion';

export default function ItemDetail({ item }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
      exit={{ opacity: 1, scale: 1}}
      transition={{ type: 'spring'}}
      className='item'
    >
      <Link to={`shinpad/${item.id}`} className='item-link'>
        <img src={item.image[0]} alt='kostobran' />
        <div>
          <h3>{item.name}</h3>
          <p className='item-price'>{item.price} KM</p>
          <p className='item-description'>{item.description}</p>
        </div>
        <p className='item-actions'>
          <Button>Delete</Button>
        </p>
      </Link>
    </motion.li>
  );
}
