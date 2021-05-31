import React, { useState } from 'react';
import Modal from './Modal';

interface Props{
  url: string;
}

const ButtonContainer_FY = ({url}:Props) => {
  const [saveClicked, setSaveClicked] = useState<boolean>(false);
  const handleSave = () =>{
    setSaveClicked(!saveClicked);
  }
  //share modal
  const [ shareModalOpen, setShareModalOpen ] = useState(false);
  const openShareModal = () => {
      setShareModalOpen(true);
  }
  const closeShareModal = () => {
      setShareModalOpen(false);
  }

  const [moreClicked, setMoreClicked] = useState<boolean>(false);
  const handleMore = () => {
    setMoreClicked(!moreClicked);
  }
  return (
    <div className='main-content-button-container'>
      <Modal open={shareModalOpen} close={closeShareModal} header="Share Original Page">
        <span>
          <div className="circular-button-container sns">
            <a target="_blank" rel="noopener noreferrer" className="circular-button facebook">
              <span className="sns-button-hover"></span>
            </a>
            <a target="_blank" rel="noopener noreferrer" className="circular-button twitter">
              <span className="sns-button-hover"></span>
            </a>
            <a target="_blank" rel="noopener noreferrer" className="circular-button linkedin">
              <span className="sns-button-hover"></span>
            </a>
            <a target="_blank" rel="noopener noreferrer" className="circular-button messenger">
              <span className="sns-button-hover"></span>
            </a>
            <a target="_blank" rel="noopener noreferrer" className="circular-button line">
              <span className="sns-button-hover"></span>
            </a>
            <a className="circular-button mail" target="_blank" rel="noopener noreferrer">
              <span className="sns-button-hover"></span>
            </a>
          </div>
          <div className='share-modal-footer'>
            <div className='link-container'>
              <input className='link-input' value={url}></input>
              <div className='copy-button-container'>
                <button className='copy-to-clipboard'>Copy</button>
              </div>
            </div>
          </div>
        </span>
      </Modal>

      {saveClicked && //save icon clicked
        <div className='tags-dropdown-container'>
          <button className='add-tags'>+ Add tags</button>
        </div>
      }
      <div className='main-content-button'><button className={saveClicked?('save clicked'):('save')} onClick={handleSave}/></div>
      <div className='main-content-button'><button className='share' onClick={openShareModal}/></div>
      <div className='main-content-button'>
        {moreClicked ?( //more icon clicked
          <div>
            <button className='more' onClick={handleMore}/>
            <div className='share-dropdown'>
              <ul className='dropdown'>
                <li className='dropdown-content'>
                  <span className='dropdown-icon more-like'/>
                  More pages like this
                </li>
                <li className='dropdown-content'>
                  <span className='dropdown-icon fewer-like'/>
                  Fewer pages like this
                </li>
              </ul>
            </div>
          </div>
        ):(//more icon not clicked
          <button className='more' onClick={handleMore}/>
        )}
      </div>
    </div>
  );
};

export default ButtonContainer_FY;