import React from 'react';

interface Props{
  open: boolean;
  close: () => void;
  header: string;
}

const Modal: React.FC<Props> = ({open, close, header, children}) => {
  return (
    <div className={open? ('open-modal'):('closed-modal')}>
      {open?( //modal open
        <div className={header==='Share Original Page'?'modal share':'modal'}>
          <div className='modal-header'>
            <div className='modal-title'>{header}</div>
            <button className='close' onClick={close}></button>
          </div>
          <div className='modal-detail'>
            <div>{children}</div>
          </div>
        </div>
      ):null}
    </div>
  );
};

export default Modal;