import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import Modal from './Modal';
import Modal_export from './Modal_export';
import MoreLikeThis from './MoreLikeThis';

interface Props{
  url_id: string;
}

interface MyContent{
  id: string;
  title: string;
  highlight: Highlight[];
  url: string;
  tags?: string[];
  img?: string;
  sourceImg?: string;
  savedDate: Date;
}
interface Highlight{
  color: string;
  content: string;
}

const Detail_HL = ({url_id}:Props) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const myContents: MyContent[] =[
    {
      id: '1000',
      title: "CSS: 선택자(Selector) 이해",
      highlight: [{color:'rgb(255, 255, 131)',content:'한 페이지 내에서 여러 번 반복될 필요가 있는 스타일은 클래스 선택자를 사용하고, 단 한번 유일하게 적용될 스타일은 ID선택자를 사용하는 것이 좋습니다'},{color:'rgb(255, 255, 131)',content:'ID선택자의 우선순위가 클래스 선택자의 우선순위보다 높습니다.'}],
      url: 'https://www.nextree.co.kr/p8468/',
      tags: ['css'],
      savedDate: new Date('2021-05-28'),
    },
  ]
  
  const [shareClicked, setShareClicked] = useState<boolean>(false);
  const handleShare = () => {
    setShareClicked(!shareClicked);
  }

  const [moreClicked, setMoreClicked] = useState<boolean>(false);
  const handleMore = () => {
    setMoreClicked(!moreClicked);
  }

  //export modal
  const [ exportModalOpen, setExportModalOpen ] = useState(false);
  const openExportModal = () => {
      setExportModalOpen(true);
  }
  const closeExportModal = () => {
      setExportModalOpen(false);
  }
  //trash modal
  const [ trashModalOpen, setTrashModalOpen ] = useState(false);
  const openTrashModal = () => {
      setTrashModalOpen(true);
  }
  const closeTrashModal = () => {
      setTrashModalOpen(false);
  }

  let highlightColor={borderColor: 'rgb(0, 0, 0)'};
  return (
    <div>
      <Modal open={ exportModalOpen } close={ closeExportModal } header="Export">
        <Modal_export/>
      </Modal>
      <Modal open={trashModalOpen} close={closeTrashModal} header="Move 1 page to trash">
        <div className='trash-gap'></div>
        <div className='text'>You can restore it in the trash.</div>
        <div className='trash-modal-footer'>
          <div className='action-button-container delete'>
            <button className='action-button default'>Cancel</button>
            <button className='action-button negative'>Delete</button>
          </div>
        </div>
      </Modal>
      <div className='detail-header'>
        <NavLink className='shrink-container' to={'/highlights'}>
          <button className='back circular-button'></button>
        </NavLink>
        <div className='main-content-button-container'>
          <div className='main-content-button'>
            {shareClicked ? (
              //share dropdown open
              <div>
                <button className='share' onClick={e => handleShare()}/>
                <div className='share-dropdown'>
                  <ul className='dropdown'>
                    <li className='dropdown-content'>
                      <span className='dropdown-icon full-text'/>
                      Full text with highlights
                    </li>
                    <li className='dropdown-content'>
                      <span className='dropdown-icon highlight-summary'/>
                      Highlight Summary
                    </li>
                  </ul>
                </div>
              </div>
            ):( //share dropdown closed
              <div>
                <button className='share' onClick={e => handleShare()}/>
              </div>
            )}
            </div>
          <div className='main-content-button'><button className='export' onClick={openExportModal}/></div>
          <div className='main-content-button'><button className='trash' onClick={openTrashModal}/></div>
        </div>
      </div>
     
      {myContents.map((item)=>{
        const year: number = item.savedDate.getFullYear();
        const month: number = item.savedDate.getMonth();
        const date: number = item.savedDate.getDate();
        if(item.id === url_id){
          return(
            <div className='detail-page-container'>
              {item.img!==undefined &&
                <img className='detail-img' src={item.img}/>
              }
              <div className='page-contents'>
                <div className='page-abstract'>
                  <div className='title'>{item.title}</div>
                  <div className='myhighlight-tags'>
                    <div className='tag-icon'/>
                    <div className='saved-tags'>
                      {item.tags?.map((tag)=>{
                        return(
                        <div className='saved-tag'>
                          <a className='saved-tag-link'>{tag}</a>
                        </div>
                      )})}
                    </div>
                    <button className='add-tags'>Edit Tag</button>
                  </div>
                  <div className='main-content-source-container'>
                    <img className='main-content-srcImg' src={item.sourceImg!==undefined?(item.sourceImg):('https://getliner.com/src/images/favicon.svg')}/>
                    <a className='main-content-url' href={item.url}>{item.url.split('/')[2]}</a>
                    <div className='vertical-line'/>
                    <div className='saved-date'>{monthNames[month]} {date}, {year}</div>
                  </div>
                </div>
                <div className='page-detail'>
                  {item.highlight.map((highlight)=>{
                    highlightColor={borderColor: highlight.color};
                    return(
                    <div className='myhighlight-container'>
                      <div className='highlight'>
                        <div className='highlight-index' style={highlightColor}/>
                        <div className='highlight-content'>
                          {highlight.content}
                        </div>
                      </div>
                    </div>
                  );})}
                </div>
                <a target="_blank" className='view-original-button grey-border-button' href={item.url}>View Original</a>
              </div>
            </div>
          )
        }
      })}
      <MoreLikeThis url_id={url_id}/>
    </div>
  );
};

export default Detail_HL;