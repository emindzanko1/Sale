import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Modal from '../UI/Modal';
import { DUMMY_ITEMS } from '../util/data';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [itemImages, setItemImages] = useState([]);

  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  useEffect(() => {
    const selectedItem = DUMMY_ITEMS.find(item => item.id === id);

    if (selectedItem) {
      setItemImages(selectedItem.image);
    }
  }, [id]);

  const totalImages = itemImages.length;

  const nextSlide = () => {
    setCurrent(current => (current === totalImages - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrent(current => (current === 0 ? totalImages - 1 : current - 1));
  };

  if (totalImages === 0) {
    return null;
  }

  function handleClose() {
    navigate('/');
  }

  return (
    <Modal onClose={() => Navigate('/')}>
      <section className='slider'>
        <motion.div
          className='slide-container'
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {itemImages.map((image, index) => (
            <motion.div className='slide' key={index} custom={index} animate={{ opacity: current === index ? 1 : 0 }}>
              {current === index && <img src={image} alt='travel image' />}
            </motion.div>
          ))}
        </motion.div>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        <button onClick={handleClose}>Close</button>
        <div className='dots'>
          {itemImages.map((_, index) => (
            <span
              key={index}
              className={index === current ? 'dot active-dot' : 'dot'}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </section>
    </Modal>
  );
};

export default ImageSlider;
