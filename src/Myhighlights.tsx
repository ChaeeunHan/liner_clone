import React, { useState } from 'react';
import Lottie from 'react-lottie';
import infoAnimation from './lotties/myhighlights.json';

const Myhighlights = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: infoAnimation,
  };
  const [infoClicked, setInfoClicked] = useState<boolean>(false);
  const handleInfo = () => {
    setInfoClicked(!infoClicked);
  }
  return (
    <div className='page-content'>
      <div className='page-header-container'>
        <div className='sticky-header'>
          <div className='page-header'>
            My Highlights
            {infoClicked ? (
              //info open
              <div>
                <button className='information-button' onClick={e => handleInfo()}/>
                <div className='info-popup'>
                  <div className='info-triangle'/>
                  <div className='info-rectangle'>
                    <button className='close-button' onClick={e=>handleInfo()}/>
                    <div className='lottie-container'>
                      <Lottie 
                        options={defaultOptions}
                      />
                    </div>
                    <div className='info-text-container'>
                      <div className='info-title'>My Highlights</div>
                      <div className='info-content'>All your work, including highlights and comments will be safely stored on this page.</div>
                    </div>
                  </div>
                  
                </div>
              </div>
            ):(//info closed
              <button className='information-button' onClick={e => handleInfo()}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myhighlights;