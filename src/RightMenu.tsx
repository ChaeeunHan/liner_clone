import React from 'react';
import './RightMenu.css';

const RightMenu = () => {
  return (
    <div className='rightmenu-container'>
      <div className='trending-container'>
        <div className='trending-title'>Trending Keywords</div>
        <div className='border'/>
        <div className='trending-content'>
          <div className='keyword-tag-list'>
            <div className='tag'>#sharing</div>
            <div className='tag'>#free</div>
            <div className='tag'>#news</div>
            <div className='tag'>#technology</div>
            <div className='tag'>#video</div>
            <div className='tag'>#education</div>
            <div className='tag'>#ncbi</div>
            <div className='tag'>#medline</div>
            <div className='tag'>#nlm</div>
            <div className='tag'>#health</div>
          </div>
        </div>
      </div>
      <div className='trending-container'>
        <div className='trending-title'>Trending Pages</div>
        <div className='border'/>
        <div className='trending-content'>
          <div className='pages-content'>
            <div className='pages-tag-list'>
              <div className='tag'>#david foster wallace</div>
              <div className='tag'>#education</div>
            </div>
            <div className='title'>How to Remember What You Read - Farnam Street</div>
            <div className='source'>fs.blog</div>
          </div>

          <div className='pages-content'>
            <div className='pages-tag-list'>
              <div className='tag'>#google</div>
              <div className='tag'>#google search</div>
              <div className='tag'>#list</div>
              <div className='tag'>#tips</div>
            </div>
            <div className='title'>20 Google Search Tips to Use Google More Efficiently - ...</div>
            <div className='source'>www.lifehack.org</div>
          </div>

          <div className='pages-content'>
            <div className='title'>Feed | LinkedIn</div>
            <div className='source'>www.linkedin.com</div>
          </div>

          <div className='pages-content'>
            <div className='title'>Times Tables Rock Stars: Play</div>
            <div className='source'>play.ttrockstars.com</div>
          </div>

          <div className='pages-content'>
            <div className='title'>SongMaker - Chrome Music Lab</div>
            <div className='source'>musiclab.chromeexperiments.com</div>
          </div>

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