import ItemList from '../components/ItemList';
import { DUMMY_ITEMS } from '../util/data';

export default function HomePage() {
  return <ItemList items={DUMMY_ITEMS} />;
}
