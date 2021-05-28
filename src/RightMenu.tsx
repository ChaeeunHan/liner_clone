import React, { useState } from 'react';
import './RightMenu.css';

interface KeywordTag{
  id: number;
  tag: string;
}
interface TrendPage{
  id: number;
  tags?: Tag[];
  title: string;
  source: string;
}
interface Tag{
  id: number;
  tag: string;
}

const RightMenu = () => {
  const keywordTags : KeywordTag[] = [
    { id: 0, tag: '#sharing'},
    { id: 1, tag: '#free'},
    { id: 2, tag: '#news'},
    { id: 3, tag: '#technology'},
    { id: 4, tag: '#video'},
    { id: 5, tag: '#education'},
    { id: 6, tag: '#ncbi'},
    { id: 7, tag: '#nlm'},
    { id: 8, tag: '#health'},
  ]
  const trendPages: TrendPage[] = [
    { id: 0, tags: [{id:9, tag:'#david foster wallace'}, {id: 10, tag:'#education'}], title:'How to Remember What You Read - Farnam Street', source:'fs.blog'},
    { id: 1, tags: [{id:11, tag:'#google'}, {id: 12, tag:'#google search'}, {id: 13, tag:'#list'}, {id: 14, tag:'#tips'}], title:'20 Google Search Tips to Use Google More Efficiently - Lifehack', source:'www.lifehack.org'},
    { id: 2, title:'Feed | LinkedIn', source:'www.linkedin.com'},
    { id: 3, title:'Times Tables Rock Stars: Play', source:'play.ttrockstars.com'},
    { id: 4, title:'ongMaker - Chrome Music Lab', source:'musiclab.chromeexperiments.com'},
  ]
  return (
    <div className='rightmenu-container'>
      <div className='trending-container'>
        <div className='trending-title'>Trending Keywords</div>
        <div className='border'/>
        <div className='trending-content'>
          <div className='keyword-tag-list'>
            {keywordTags.map((item)=>{
              return(
                <button className='tag'>{item.tag}</button>
              )
            })}
          </div>
        </div>
      </div>
      <div className='trending-container'>
        <div className='trending-title'>Trending Pages</div>
        <div className='border'/>
        <div className='trending-content'>
          {trendPages.map((item)=>{
            console.log(item.tags)
            if(item.tags !== undefined){
              return(
              <div className='pages-content'>
                <div className='pages-tag-list'>
                  {item.tags?.map((t)=>{
                    return(
                      <div className='tag'>{t.tag}</div>
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
  );
};

export default RightMenu;