import React, { useState } from 'react';
import './RightMenu.css';

interface RecommendList{
  id: string;
  alsoRead: AlsoRead[];
}
interface AlsoRead{
  id: number;
  tags?: string[];
  title: string;
  source: string;
}
interface Props{
  url_id: string;
}
const RightMenu_HL = ({url_id}:Props) => {
  const recommendList: RecommendList[] = [{
    id: '3',
    alsoRead:[
      { id: 0, title:'CSS Multiple Backgrounds', source:'www.w3schools.com'},
      { id: 1, title:'HTML button tag - W3Schools', source:'www.w3schools.com'},
      { id: 2, title:'text-overflow - CSS: Cascading Style Sheets | MDN', source:'deeloper.mozilla.org'},
      { id: 3, title:'CSS Animations - W3Schools', source:'www.w3schools.com'},
      { id: 4, title:'jQuery css() Method - W3Schools', source:'www.w3schools.com'},
      { id: 5, title:'HTML Styles CSS - W3Schools', source:'www.w3schools.com'},
      { id: 6, title:'Inline elements - HTML: HyperText Markup Language | MDN', source:'deeloper.mozilla.org'},
    ]
  },
  {
    id: '2004',
    alsoRead:[
      { id: 7, title:'2013년 전자책과 디지털 퍼블리싱 시장의 10대 전망 (북미지역 중심)', source:'bookerslab.tistory.com'},
      { id: 8, tags:['#hp'], title:'HP와 오라클, 이혼법정으로 향하다 - Korea Real Time Korean - WSJ', source:'realtime.wsj.com'},
      { id: 9, title:'CD36 - Wikipedia', source:'en.wikipedia.org'},
      { id: 10, title:'Java Optional 바르게 쓰기 - 뒤태지존의 끄적거림', source:'homoefficio.github.io'},
      { id: 11, title:'KR100384795B1 - 분광 광도계를 이용한 키네틱 타입 잔류 농약 분석 방법 - Google Patents', source:'patents.google.com'},
      { id: 12, tags:['#algorithm'], title:"[Python] 2차원 배열 회전 알고리즘 - Parkito's on the way", source:'shoark7.github.io'},
      { id: 13, title:'ごみ焼却施設の脱炭素化に向けた取り組み | チャレンジ・ゼロ', source:'www.challenge-zero.jp'},
    ]
  },
  {
    id: '2486',
    alsoRead:[
      { id: 14, title:'youknowone.text — 목차 - 스위프트 프로그래밍 언어', source:'text.youknowone.org'},
      { id: 15, title:'Pretty-print an entire Pandas Series / DataFrame - Stack ...', source:'stackoverflow.com'},
      { id: 16, title:'Python 3 Flask Rest Api: "request.get_json()" gives TypeError: \'NoneType\' object is not subscriptabl', source:'www.javaer101.com'},
      { id: 17, title:'Array - JavaScript | MDN - Mozilla', source:'developer.mozilla.org'},
      { id: 18, title:'Writing a list to a file with Python - Stack Overflow', source:'stackoverflow.com'},
      { id: 19, title:"sql - Multiple Updates in MySQL - Stack Overflow", source:'stackoverflow.com'},
      { id: 20, title:'c++ - Performance difference of getline operating with istream and FILE* - Stack Overflow', source:'stackoverflow.com'},
    ]
  },
  ]
  let thisPage: string = window.location.href.split('/')[3];
  return (
    <div className='rightmenu-container'>
      <div className='highlights-rightmenu'>
        <div className='trending-container'>
          <div className='trending-title'>People Also Read</div>
          <div className='border'/>
          <div className='trending-content'>
            {recommendList.map((item)=>{
              console.log(item.id === url_id)
              if(item.id === url_id){
                return(
                  item.alsoRead.map((read)=>{
                    if(read.tags !== undefined){
                      return(
                        <div className='pages-content'>
                          <div className='pages-tag-list'>
                            {read.tags?.map((t)=>{
                              return(
                                <div className='tag'>{t}</div>
                            )})}
                          </div>
                          <div className='title'>{read.title}</div>
                          <div className='source'>{read.source}</div>
                        </div>
                    )} else{
                      console.log(read.title)
                      return(
                        <div className='pages-content'>
                          <div className='title'>{read.title}</div>
                          <div className='source'>{read.source}</div>
                        </div>
                    )}
                  })
                )
              }
            })}
            <div className='show-more'>
              Show More
              <img src='https://getliner.com/src/images/expand.svg'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMenu_HL;