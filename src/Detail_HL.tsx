import React from 'react';

interface Props{
  url_id: string;
}

interface MyContent{
  id: string;
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

const Detail_HL = ({url_id}:Props) => {
  const myContents: MyContent[] =[
    {
      id: '1000',
      title: "CSS: 선택자(Selector) 이해",
      highlight: [{color:'rgb(255, 255, 131)',content:'한 페이지 내에서 여러 번 반복될 필요가 있는 스타일은 클래스 선택자를 사용하고, 단 한번 유일하게 적용될 스타일은 ID선택자를 사용하는 것이 좋습니다'},{color:'rgb(255, 255, 131)',content:'ID선택자의 우선순위가 클래스 선택자의 우선순위보다 높습니다.'}],
      url: 'https://www.nextree.co.kr/p8468/',
      tags: ['css'],
      savedDate: new Date('2021-05-28'),
    },
  ]
  return (
    <div>
      Detail_HL
    </div>
  );
};

export default Detail_HL;