import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ItemModal = forwardRef(function Modal(props, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
    close: () => {
      dialog.current.close();
    },
  }));

  return createPortal(
    <dialog ref={dialog}>
      <h2>Proba</h2>
      <form>
        <label>Label</label>
        <input placeholder="Input" />
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ItemModal;
