import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: index => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function ItemDetail({ item, index }) {
  return (
    <motion.li
      variants={fadeInAnimationVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
      custom={index}
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
