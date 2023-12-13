import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Modal from '../UI/Modal';
import { DUMMY_ITEMS } from '../util/data';
import { useParams } from 'react-router-dom';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [itemImages, setItemImages] = useState([]);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const selectedItem = DUMMY_ITEMS.find((item) => item.id === id);

    if (selectedItem) {
      setItemImages(selectedItem.image);
    }
  }, [id]);

  const totalImages = itemImages.length;

  const nextSlide = () => {
    setCurrent((current) => (current === totalImages - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? totalImages - 1 : current - 1));
  };

  if (totalImages === 0) {
    return null;
  }

  return (
    <Modal>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {itemImages.map((image, index) => (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && <img src={image} alt='travel image' />}
          </div>
        ))}
        <div className='dots'>
          {Array.from({ length: totalImages }).map((_, index) => (
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
