import React, { useState } from 'react';
import Lottie from 'react-lottie';
import infoAnimation from './lotties/myhighlights.json';
import './Myhighlights.css';

interface MyContent{
  title: string;
  highlight: string[];
  url: string;
  tags?: string[];
  img?: string;
  sourceImg: string;
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
  const mainContents: MyContent[] =[
    {
      title: "CSS: 선택자(Selector) 이해",
      highlight: ['한 페이지 내에서 여러 번 반복될 필요가 있는 스타일은 클래스 선택자를 사용하고, 단 한번 유일하게 적용될 스타일은 ID선택자를 사용하는 것이 좋습니다','ID선택자의 우선순위가 클래스 선택자의 우선순위보다 높습니다.'],
      url: 'https://www.nextree.co.kr/p8468/',
      sourceImg:'https://getliner.com/src/images/favicon.svg',
      tags: ['css']
    },
  ]
  let highlightSum: number = 0;
  mainContents.map((item)=>{//calculate the num of my highlights
    highlightSum += item.highlight.length;
  })
  return (
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

        </div>
      </div>
    </div>
  );
};

export default Myhighlights;