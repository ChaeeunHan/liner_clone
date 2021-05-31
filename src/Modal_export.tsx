import React, { useState } from 'react';

const Modal_export = () => {
  return (
    <span>
      <div className='gap'></div>
      <div className='text'>Export Your Highlights</div>
      <div className='circular-button-container'>
        <div className='button-container'>
          <button className='circular-button word'>
            <span className='export-button-hover'></span>
          </button>
          <span className='button-title'>Word</span>
        </div>
        <div className='button-container'>
          <button className='circular-button onenote'>
            <span className='export-button-hover'></span>
          </button>
          <span className='button-title'>Onenote</span>
        </div>
        <div className='button-container'>
          <button className='circular-button evernote'>
            <span className='export-button-hover'></span>
          </button>
          <span className='button-title'>Evernote</span>
        </div>
        <div className='button-container'>
          <button className='circular-button plain-text'>
            <span className='export-button-hover'></span>
          </button>
          <span className='button-title'>Text</span>
        </div>
      </div>
  </span>
  );
};

export default Modal_export;