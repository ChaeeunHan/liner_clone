import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import RightMenu_HL from './RightMenu_HL';
import Detail_HL from './Detail_HL';
import Detail_FY from './Detail_FY';
import './Detail.css'

const Detail = (props: RouteComponentProps<{ id: string;}>,) => {
  return (
    <div className='home-right-side'>
      <div className='page'>
        {props.match.params.id[0]=='1'?(//detail for 'My Highlights'
          <Detail_HL url_id={props.match.params.id}/>
        ):( ///detail for 'For You'
          <Detail_FY url_id={props.match.params.id}/>
        )}
      </div>
      <div className='right-menu'>
        <RightMenu_HL url_id={props.match.params.id}/>
      </div>
    </div>
  );
};

export default Detail;