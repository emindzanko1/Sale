import { Link, useNavigate } from 'react-router-dom';
import Modal from '../UI/Modal';
import ItemForm from './ItemForm';
import { DUMMY_ITEMS } from '../util/data';
import { useState } from 'react';

export default function NewItem() {
  const navigate = useNavigate();

  function handleSubmit(data) {
    const newItemData = {
      id: 'i' + DUMMY_ITEMS.length+1,
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
    };

    DUMMY_ITEMS.push(newItemData);

    navigate('/');
  }

  return (
    <Modal>
      <ItemForm onSubmit={handleSubmit}>
        <Link to='/' className='button-text'>
          Cancel
        </Link>
        <button type='submit' className='button'>
          Create
        </button>
      </ItemForm>
    </Modal>
  );
}
