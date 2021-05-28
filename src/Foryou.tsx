import React, { useState } from 'react';
import Lottie from 'react-lottie';
import infoAnimation from './lotties/home_signal.json';
import './Foryou.css';

interface Language{
  lang: string;
  clicked: boolean;
}

const Foryou = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: infoAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const [infoClicked, setInfoClicked] = useState<boolean>(false);
  const handleInfo = () => {
    setInfoClicked(!infoClicked);
  }

  const [languageClicked, setLanguageClicked] = useState<boolean>(false);
  const handleLang = () => {
    setLanguageClicked(!languageClicked);
  }

  const [languagesChecked, setLanguagesChecked] = useState<Language[]>([
    {lang: 'English', clicked: false},
    {lang: '한국어', clicked: false},
    {lang: '简体字', clicked: false},
    {lang: '繁體字', clicked: false},
    {lang: '日本語', clicked: false},
    {lang: 'Others', clicked: false}
  ]);
  const handleLangCheck = (language:string) =>{
    let tmp:Language[] = [];
    languagesChecked.map((item)=>{
      if(item.lang !== language){
        tmp.push(item)
      }else{
        tmp.push({lang: item.lang, clicked: !item.clicked})
        console.log(tmp)
      }
    })
    setLanguagesChecked(tmp);
  }
  return (
    <div>
      <div className='page-header-container'>
        <div className='page-header'>
          For You
          {infoClicked ? (
            //info 열려있을 때
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
                    <div className='info-title'>For You</div>
                    <div className='info-content'>We recommend you pages you'll love and need. The more you highlight, the smarter our algorithm gets.</div>
                  </div>
                </div>
                
              </div>
            </div>
          ):(//info 닫혔을 때
            <button className='information-button' onClick={e => handleInfo()}/>
          )}
          <div className='language-container'>
            {languageClicked ? (
              //language dropdown 열려있을 때
              <div>
                <button className='language-button button' onClick={e => handleLang()}>
                  Language
                  <div className='set-language-button close'></div>
                </button>
                <div className='language-dropdown'>
                  <ul className='dropdown'>
                    <div className='dropdown-header'>Select for feed</div>
                    {languagesChecked.map((item)=>{
                      if(item.clicked){
                        return(
                          <li className='dropdown-content checked' onClick={() => handleLangCheck(item.lang)}>
                            {item.lang}
                            <div className='checked-img'></div>
                          </li>
                        )
                      }else{
                        return(
                          <li className='dropdown-content' onClick={() => handleLangCheck(item.lang)}>
                            {item.lang}
                          </li>
                        )}
                    })}
                  </ul>
                </div>
              </div>
            ):( //language dropdown 닫혀있을 때
              <div>
                <button className='language-button button' onClick={e => handleLang()}>
                  Language
                  <div className='set-language-button open'></div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='page-subtitle'>Picked by LINER, just for you</div>
    </div>
  );
};

export default Foryou;