import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../Modal/Modal.css';

const Modal = ({ active, onClose, children }) => {
  const [domReady, setDomReady] = React.useState(false);

  useEffect(() => {
    setDomReady(true);
  }, [setDomReady]);

  return domReady
    ? createPortal(
        <div className={active ? 'modal active' : 'modal'} onClick={onClose}>
          <div
            className={active ? 'modal__content active' : 'modal__content'}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        document.getElementById('overlay-root')   
      )
    :null;
};

export default Modal;
