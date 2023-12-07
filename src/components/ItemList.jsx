import ItemDetail from './ItemDetail';

export default function ItemList({ items }) {
  return (
    <div className='item-container'>
      <h2 className='items-title'>Featured Products</h2>
      <ul className='items'>
        {items.map(item => (
          <ItemDetail key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
