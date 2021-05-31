# Clone coding Liner's web page

아우름 플래닛의 LINER 홈페이지 [https://getliner.com/home] 를 간단히 클론 코딩하였습니다.

파일의 디렉토리에서 `yarn start` 를 통해 실행 가능합니다.


## Files description
파일명|설명|추가 설명|
---|---|---|
App.tsx|Header + Menu + Route(Foryou, Myhighlights, Detail)||
ButtonContainer_FY.tsx|For You 페이지에서 이용되는 세 개의 버튼|<img width="91" alt="스크린샷 2021-05-31 오후 4 59 43" src="https://user-images.githubusercontent.com/67953109/120161180-fedcc780-c231-11eb-8aa7-7871f032ee81.png"><br/> 여러 페이지에서 이용되어 하나의 컴포넌트로 제작
Detail_FY.tsx|For You 페이지에서 글의 title을 누르면 뜨는 상세 페이지| 각 글마다 고유 ID를 가지고 있다고 가정하여 적절한 글의 detail 출력
Detail_HL.tsx|My Highlights 페이지에서 글의 titled을 누르면 뜨는 상세 페이지| 각 글마다 고유 ID를 가지고 있다고 가정하여 적절한 글의 detail 출력
Detail.tsx|상황에 맞춰 Detail_FY과 Detail_HL 중 하나 + RightMenu_HL|
Foryou.tsx|첫 화면, 메뉴에서 For you 선택시 뜨는 페이지|
Header.tsx|LINER 페이지의 header|
Menu.tsx|좌측의 메뉴|
Modal_export.tsx|export 버튼 클릭시 나오는 모달창|<img width="28" alt="스크린샷 2021-05-31 오후 5 13 23" src="https://user-images.githubusercontent.com/67953109/120162601-8545d900-c233-11eb-80da-a5f44583417e.png"> (export 버튼)
Modal.tsx|modal창의 header와 닫는 버튼. Props children으로 content가 정해짐|
MoreLikeThis.tsx|각 글의 Detail 페이지 하단에 뜨는 추천 글|
Myhighlights.tsx|메뉴에서 My Highlights 선택시 뜨는 페이지|
RightMenu_FY.tsx|For You 페이제에서 우측에 뜨는 'Trending Keywords', 'Trending Pages'|
RightMenu_HL.tsx|My Highlihgt 페이지, 각 글의 Detail 페이지에서 우측에 뜨는 'People Also Read'|

## More
package.json에 dependency가 적혀있습니다.
