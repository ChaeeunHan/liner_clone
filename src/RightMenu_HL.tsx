import React, { useState } from 'react';
import './RightMenu.css';

interface AlsoRead{
  id: number;
  tags?: string[];
  title: string;
  source: string;
}

const RightMenu_HL = () => {
  const alsoRead: AlsoRead[] = [
    { id: 0, title:'CSS Multiple Backgrounds', source:'www.w3schools.com'},
    { id: 1, title:'HTML button tag - W3Schools', source:'www.w3schools.com'},
    { id: 2, title:'text-overflow - CSS: Cascading Style Sheets | MDN', source:'deeloper.mozilla.org'},
    { id: 3, title:'CSS Animations - W3Schools', source:'www.w3schools.com'},
    { id: 4, title:'jQuery css() Method - W3Schools', source:'www.w3schools.com'},
    { id: 5, title:'HTML Styles CSS - W3Schools', source:'www.w3schools.com'},
    { id: 6, title:'Inline elements - HTML: HyperText Markup Language | MDN', source:'deeloper.mozilla.org'},
  ]
  let thisPage: string = window.location.href.split('/')[3];
  return (
    <div className='rightmenu-container'>
      <div className='highlights-rightmenu'>
        <div className='trending-container'>
          <div className='trending-title'>People Also Read</div>
          <div className='border'/>
          <div className='trending-content'>
            {alsoRead.map((item)=>{
              if(item.tags !== undefined){
                return(
                <div className='pages-content'>
                  <div className='pages-tag-list'>
                    {item.tags?.map((t)=>{
                      return(
                        <div className='tag'>{t}</div>
                    )})}
                  </div>
                  <div className='title'>{item.title}</div>
                  <div className='source'>{item.source}</div>
                </div>
              )} else{
                return(
                  <div className='pages-content'>
                    <div className='title'>{item.title}</div>
                    <div className='source'>{item.source}</div>
                  </div>
                )}
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