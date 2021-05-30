import React, { useState } from 'react';
import Lottie from 'react-lottie';
import infoAnimation from './lotties/home_signal.json';
import './Foryou.css';
import RightMenu_FY from './RightMenu_FY';
import { NavLink } from 'react-router-dom';

interface Language{
  lang: string;
  clicked: boolean;
}

interface Content{
  id: string;
  title: string;
  highlight: string;
  url: string;
  tags?: string[];
  img?: string;
  description?: string;
  sourceImg: string;
  authors?: string;
}

const Foryou = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: infoAnimation,
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
  const mainContents: Content[] =[
    {
      id: '2004',
      title: "Manacher 알고리즘 | ialy's blog - 문자열 매칭 알고리즘",
      highlight: '위 결과만 보면 이 알고리즘에는 두 가지 문제점이 있는데, 첫 번째는 어떤 위치를 중심으로만 고려하므로 길이가 홀수인 회문만 구할 수 있다는 점이고, 두 번째는 여기서 구한 결과가 회문의 한쪽 길이만 구하기 때문에 결과 숫자가 직관적이지 않을 수 있다는 점이다. 그러나 하나의 트릭으로 이 두 문제점을 모두 해결할 수 있다. 바로 각 문자 앞뒤에 특수 문자를 끼워넣는 것이다. 예를 들어 원래 문자열이 bananaabananaa bananaa 였다면 @b@a@n@a@n@a@a@@b@a@n@a@n@a@a@ @b@a@n@a@n@a@a@ 에 위 알고리즘을 적용하면 된다. 그러면 결과가 [0,1,0,1,0,3,0,5,0,3,0,1,2,1,0][0,1,0,1,0,3,0,5,0,3,0,1,2,1,0] [0, 1, 0, 1, 0, 3, 0, 5, 0, 3, 0, 1, 2, 1, 0] 으로, 끼워둔 특수 문자에서는 짝수 회문의 길이를, 원래 문자에서는 홀수 회문의 길이를 구할 수 있다',
      url: 'https://ialy1595.github.io/post/manacher',
      img: 'https://ialy1595.github.io/images/logo-og.png',
      description: '2020. 11. 10. — 여기에 Manacher 알고리즘을 통해 문자열의 모든 위치에 대해서 그 위치를 중심으로 하는 최대 회문의 한쪽 길이를 O(n) 안에 구할 수 있다.',
      sourceImg:'https://ialy1595.github.io/favicon.ico',
    },
    {
      id: '2486',
      title: "[Python] __str__와 __repr__의 차이 살펴보기",
      highlight: '__str__의 본질적인 목적은 객체를 ‘표현’하는 것(representation)에 있다기보다는 추가적인 가공이나 다른 데이터와 호환될 수 있도록 문자열화하는 데 있다고 하겠다',
      url: 'https://shoark7.github.io/programming/python/difference-between-__repr__-vs-__str__',
      img: 'https://shoark7.github.io/assets/img/python/str-repr-difference.jpg',
      description: '이 장에서는 __str__, __repr__ 두 메소드에 대해 각각 알아본다. ... 이를 극적으로 보여주는 사례가 바로 그 누구나 아는 print라는 함수이다.',
      sourceImg:'https://shoark7.github.io/assets/img/favicon/apple-touch-icon-144x144.png',
      authors: 'https://shoark7.github.io/about/',
      tags: ['#str vs repr']
    }
  ]
  return (
    <div className='home-right-side'>
      <div className='page'>
        <div className='page-content'>
          <div className='page-header-container'>
            <div className='sticky-header'>
              <div className='page-header'>
                For You
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
                          <div className='info-title'>For You</div>
                          <div className='info-content'>We recommend you pages you'll love and need. The more you highlight, the smarter our algorithm gets.</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ):(//info closed
                  <button className='information-button' onClick={e => handleInfo()}/>
                )}
                
                <div className='language-container'>
                  {languageClicked ? (
                    //language dropdown open
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
                  ):( //language dropdown closed
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
          </div>
          <div className='page-subtitle'>Picked by LINER, just for you</div>
          <div className='main-contents'>
            {mainContents.map((item)=>{
              return(
                <div className='main-content-container'>
                  {item.tags!==undefined && 
                    <div className='main-content-tags-container'>
                      {item.tags.map((tag)=>{
                          return(<div className='main-content-tag'>{tag}</div>)
                      })}
                    </div>
                  }
                  <div className='main-content-upside'>
                    <div className='main-content-text'>
                      <NavLink to={`detail/${item.id}`}><div className='main-content-title'>{item.title}</div></NavLink>
                      <div className='main-content-highlight'>{item.highlight}</div>
                    </div>
                    {item.img!==undefined &&
                      <img className='main-content-img' src={item.img}/>
                    }
                  </div>
                  <div className='main-content-downside'>
                    <div className='main-content-source-container'>
                      <img className='main-content-srcImg' src={item.sourceImg}/>
                      <a className='main-content-url' href={item.url}>{item.url.split('/')[2]}</a>
                    </div>
                    <div className='main-content-button-container'>
                      <div className='main-content-button'><button className='save'/></div>
                      <div className='main-content-button'><button className='share'/></div>
                      <div className='main-content-button'><button className='more'/></div>
                    </div>
                  </div>
                  <div className='main-content-seperator'/>
                </div>
          )})}
          </div>
        </div>
      </div>
      <div className='right-menu'>
        <RightMenu_FY/>
      </div>
    </div>
  );
};

export default Foryou;