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
  return (
    <div className='home-right-side'>
      <div className='page'>
        <div className='page-content'>
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
          <div className='myhighlights-buttons-container'>
            <div className='tab-container'>
              <button className='highlight-button'>Highlights</button>
              <button className='tags-button'>Tags</button>
            </div>
            <div className='filter-container'>
              <div className='filter-button-container'>
                <button className='filter-button'/>
              </div>
              <div className='search-container'>
                <div className='input-container'>
                  <input className='search-bar' placeholder='Search my highlights' type='text'/>
                  <span className='search-img'/>
                </div>
              </div>
            </div>
          </div>
          <div className='main-contents'>
            {mainContents.map((item)=>{
              const year: number = item.savedDate.getFullYear();
              const month: number = item.savedDate.getMonth();
              const date: number = item.savedDate.getDate();
              return(
                <div className='main-content-container'>
                  <div className='main-content-upside'>
                    <div className='main-content-text'>
                      <div className='main-content-title'>{item.title}</div>
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
                      <div className='main-content-button'><button className='export'/></div>
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