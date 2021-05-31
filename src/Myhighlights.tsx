import React, { useState, CSSProperties } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
import Lottie from 'react-lottie';
import infoAnimation from './lotties/myhighlights.json';
import './Myhighlights.css';
import RightMenu_HL from './RightMenu_HL';
import Modal from './Modal';
import Modal_export from './Modal_export';

interface MyContent{
  id: string,
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
  let highlightColor={borderColor: 'rgb(0, 0, 0)'};
  const mainContents: MyContent[] =[
    {
      id: '1000',
      title: "CSS: 선택자(Selector) 이해",
      highlight: [{color:'rgb(255, 255, 131)',content:'한 페이지 내에서 여러 번 반복될 필요가 있는 스타일은 클래스 선택자를 사용하고, 단 한번 유일하게 적용될 스타일은 ID선택자를 사용하는 것이 좋습니다'},{color:'rgb(255, 255, 131)',content:'ID선택자의 우선순위가 클래스 선택자의 우선순위보다 높습니다.'}],
      url: 'https://www.nextree.co.kr/p8468/',
      tags: ['css'],
      savedDate: new Date('2021-05-28'),
    },
  ]
  let highlightSum: number = 0;
  mainContents.map((item)=>{//calculate the num of my highlights
    highlightSum += item.highlight.length;
  })
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [shareClicked, setShareClicked] = useState<boolean>(false);
  const handleShare = () => {
    setShareClicked(!shareClicked);
  }
  const [moreClicked, setMoreClicked] = useState<boolean>(false);
  const handleMore = () => {
    setMoreClicked(!moreClicked);
  }
  //filter modal
  const [ filterModalOpen, setFilterModalOpen ] = useState(false);
  const openFilterModal = () => {
      setFilterModalOpen(true);
  }
  const closeFilterModal = () => {
      setFilterModalOpen(false);
  }
  //export modal
  const [ exportModalOpen, setExportModalOpen ] = useState(false);
  const openExportModal = () => {
      setExportModalOpen(true);
  }
  const closeExportModal = () => {
      setExportModalOpen(false);
  }
  //searchbox focus
  const [searchFocus, setSearchFocus] = useState(false);
  const focusOnSearch = () =>{
    setSearchFocus(true);
  }
  const focusNotSearch = () =>{
    setSearchFocus(false);
  }
  //main content hover
  const [mainHover, setMainHover] = useState(false);
  const hoverOnMain = () =>{
    setMainHover(true);
  }
  const notHoverOnMain = () =>{
    setMainHover(false);
  }
  //check hover
  const [checkHover, setCheckHover] = useState(false);
  const hoverOnCheck = () =>{
    setCheckHover(true);
  }
  const notHoverOnCheck = () =>{
    setCheckHover(false);
  }
  // page check
  const [pageCheck, setPageCheck] = useState(false);
  const checkPage = () =>{
    setPageCheck(!pageCheck);
    console.log(pageCheck);
  }
  return (
    <div className='home-right-side'>
      <div className='page'>
        <div className='page-content'>
          <Modal open={ filterModalOpen } close={ closeFilterModal } header="Filter">
            <div className='filter-title'>
              Tags
            </div>
            <div className='tags-section'>
              <div className='input-outer-container'>
                <div className='input-inner-container'>
                  <div className='tag-small-icon'></div>
                  <div className='saved-tags-filter'>
                    <input className='tag-search' type='text' placeholder='Search tags'/>
                  </div>
                </div>
              </div>
              <div className='filter-sections'>
                <ul className='color-list'>
                  <div className='filter-title'>
                    Color Filter
                  </div>
                  <li className='color-container'>
                    <span className='pallete yellow'></span>
                    <span className='name'>Yellow</span>
                  </li>
                  <li className='color-container'>
                    <span className='pallete mint'></span>
                    <span className='name'>Mint</span>
                  </li>
                </ul>
                <ul className='color-list'>
                  <div className='filter-title'>
                    Page Type
                  </div>
                  <li className='color-container'>
                    <span className='web-filter selected'></span>
                    <span className='name selected'>Web</span>
                    <div className='button-icon-container'>
                      <span className='type selected'></span>
                    </div>
                  </li>
                  <li className='color-container'>
                    <span className='pdf-filter selected'></span>
                    <span className='name selected'>PDF</span>
                    <div className='button-icon-container'>
                      <span className='type selected'></span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='seperator'></div>
              <div className='modal-footer'>
                <button className='reset disabled'>Reset</button>
                <button className='apply' onClick={closeFilterModal}>Apply</button>
              </div>
            </div>
          </Modal>
          <Modal open={ exportModalOpen } close={ closeExportModal } header="Export">
            <Modal_export/>
          </Modal>
          <div className='myhighlight-header-container'>
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
                <button className='PDF-button'>
                  <img src='https://getliner.com/src/images/add-highlights.svg'/>
                  <span className='PDF'>PDF</span>
                </button>
              </div>
            </div>
            <div className='summary'>
              <div className='pages'>
                {mainContents.length} Pages
              </div>
              <div className='middleDot'/>
              <div className='highlights'>
                {highlightSum} Highlights
              </div>
            </div>
          </div>
          {searchFocus?(
            <span>
              <div className='myhighlights-header'>
                <div className='search-focus-container'>
                  <div className='search-option-container'>
                    <div className='dropdown-container'>
                      <button className='search-option-button'>
                        <span className='search-option'>Search Option</span>
                        <span className='filter-icon'></span>
                      </button>
                    </div>
                  </div>
                  <div className='search-container'>
                    <div className='input-container'>
                      <input className='search-bar' autoFocus={true} placeholder='Search my highlights' type='text' onFocus={focusOnSearch} />
                      <button className='cancel-search-button circular-button' onClick={focusNotSearch}/>
                    </div>
                  </div>
                </div>
              </div>
              <span className='search-message'>
                Search results from my highlights
              </span>
            </span>
          ):(
            pageCheck?(
              <div className="page-selected">
                
              </div>
            ):(
              <div className='myhighlights-header'>
                <div className='tab-container'>
                  <button className='highlight-button'>Highlights</button>
                  <button className='tags-button'>Tags</button>
                </div>
                <div className='filter-container'>
                  <div className='filter-button-container'>
                    <button className='filter-button' onClick={openFilterModal}/>
                  </div>
                  <div className='search-container'>
                    <div className='input-container'>
                      <input className='search-bar' placeholder='Search my highlights' type='text' onFocus={focusOnSearch}/>
                      <span className='search-img'/>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
          <div className='main-contents'>
            {mainContents.map((item)=>{
              const year: number = item.savedDate.getFullYear();
              const month: number = item.savedDate.getMonth();
              const date: number = item.savedDate.getDate();
              return(
                <div className={pageCheck?('main-content-container selected'):('main-content-container')} onMouseEnter={hoverOnMain} onMouseLeave={notHoverOnMain}>
                  <div className='main-content-upside'>
                    <div className='main-content-text'>
                      <NavLink to={`detail/${item.id}`}><div className='main-content-title'>{item.title}</div></NavLink>
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
                  </div>
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
                  <div className='main-content-downside'>
                    <div className='main-content-source-container'>
                      <img className='main-content-srcImg' src={item.sourceImg!==undefined?(item.sourceImg):('https://getliner.com/src/images/favicon.svg')}/>
                      <a className='main-content-url' href={item.url}>{item.url.split('/')[2]}</a>
                      <div className='vertical-line'/>
                      <div className='saved-date'>{monthNames[month]} {date}, {year}</div>
                      
                    </div>
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
                        <div className='main-content-button'>
                        {moreClicked ? (
                          //more dropdown open
                          <div>
                            <button className='more' onClick={e => handleMore()}/>
                            <div className='more-dropdown'>
                              <ul className='dropdown'>
                                <li className='dropdown-content'>
                                  <span className='dropdown-icon edit-title'/>
                                  Edit a Title
                                </li>
                                <li className='dropdown-content'>
                                  <span className='dropdown-icon view-origin'/>
                                  View Original
                                </li>
                                <li className='dropdown-content'>
                                  <span className='dropdown-icon move-trash'/>
                                  Move to Trash
                                </li>
                              </ul>
                            </div>
                          </div>
                        ):( //moredropdown closed
                          <div>
                            <button className='more' onClick={e => handleMore()}/>
                          </div>
                        )}
                        </div>
                    </div>
                  </div>
                  <div className='main-content-seperator'/>
                  {mainHover && !pageCheck &&
                    <button 
                    className='page-select default' 
                    style={{backgroundColor:checkHover?('rgb(198, 203, 211)'):('rgb(211, 218, 227)')}}
                    onClick={checkPage}
                    />
                  }
                  {pageCheck &&
                    <button 
                    className='page-select default' 
                    style={{backgroundColor:'rgb(0, 189, 184)'}}
                    onClick={checkPage}
                    />
                  }
                </div>
            )})}
          </div>
        </div>
      </div>
      <div className='right-menu'>
        <RightMenu_HL url_id='3'/>
      </div>
    </div>
  );
};

export default Myhighlights;