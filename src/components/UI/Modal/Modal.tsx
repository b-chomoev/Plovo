import BackDrop from '../BackDrop/BackDrop.tsx';
import React from 'react';

interface Props extends React.PropsWithChildren{
  show: boolean;
  title: string;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({show, title, closeModal, children}) => {

  return (
      <>
        <BackDrop show={show} />
        <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={closeModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{title}</h1>
              </div>
              <div className='p-4'>
                {children}
              </div>
              <div>
                <div className='modal-footer'>
                  <button onClick={closeModal} className='btn btn-dark'>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Modal;