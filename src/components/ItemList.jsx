import { motion } from 'framer-motion';
import ItemDetail from './ItemDetail';

export default function ItemList({ items }) {
  return (
    <div className='item-container'>
      <h2 className='items-title'>Featured Products</h2>
      <motion.ul
        className='items'
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden" 
        animate="visible" 
      >
        {items.map(item => (
          <ItemDetail key={item.id} item={item} />
        ))}
      </motion.ul>
    </div>
  );
}