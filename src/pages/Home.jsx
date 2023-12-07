import ItemList from '../components/ItemList';

export const DUMMY_ITEMS = [
  {
    id: 'i1',
    name: 'Kostobrani 1',
    description: 'Random opis',
    price: 100,
    image: 'https://www.sportsdirect.com/images/products/81808746_h.jpg',
  },
  {
    id: 'i2',
    name: 'Kostobrani 2',
    description: 'Random opis',
    price: 100,
    image: 'https://www.sportsdirect.com/images/products/81808730_h.jpg',
  },
  {
    id: 'i3',
    name: 'Kostobrani 3',
    description: 'Random opis',
    price: 100,
    image: 'https://www.sportsdirect.com/images/products/81806140_h.jpg',
  },
  {
    id: 'i4',
    name: 'Kostobrani 4',
    description: 'Random opis',
    price: 100,
    image: 'https://www.sportsdirect.com/images/products/81801440_h.jpg',
  },
  {
    id: 'i5',
    name: 'Kostobrani 5',
    description: 'Random opis',
    price: 100,
    image: 'https://www.sportsdirect.com/images/products/81808746_h.jpg',
  },
  {
    id: 'i6',
    name: 'Kostobrani 6',
    description: 'Random opis',
    price: 100,
    image: 'https://www.sportsdirect.com/images/products/81808730_h.jpg',
  },
  {
    id: 'i7',
    name: 'Kostobrani 7',
    description: 'Random opis',
    price: 100,
    image: 'https://www.sportsdirect.com/images/products/81806140_h.jpg',
  },
  {
    id: 'i8',
    name: 'Kostobrani 8',
    description: 'Random opis',
    price: 100,
    image: 'https://www.sportsdirect.com/images/products/81801440_h.jpg',
  },
];

export default function HomePage() {
  return <ItemList items={DUMMY_ITEMS} />;
}
