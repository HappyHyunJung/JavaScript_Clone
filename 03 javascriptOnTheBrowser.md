javascript 가 브라우저를 어떻게 움직이는가?

3.0
인터넷 브라우저의 검사창에서 'document'를 입력하면 html 코드를 불러온다
-> document.title : 다큐먼트 제목이 출력됨
-> javascript로 html 코드의 제목 변경 : 브라우저 콘솔 창에 'document.title = 'changed_title' '
-> 원본 파일 html 코드에 바뀐 제목이 적용되지 않는다.
-> 브라우저 에서 html 코드의 제목이 바뀐다

3.1
document.getElementById("title")
-> javascript로 id="title"인 h1 태그를 불러옴
-> "title" 은 스트링 타입

태그의 아이디 앞에 autofocus 라는 키워드를 쓰기만 하면 autofocus가 자동으로 true 상태가 된다

// innerText - 내용 변경
//아이디 불러오기
//클래스네임 불러오기

인강 3.2
// className을 찾음 - className으로 html 내용 수정
getElementsByClassName("className")
-> className, tagName으로 가져올 수 있는 것은 Array 형태
Array 만으로 html 코드를 가져오거나 수정할 수 없다
(id로 가져오면 object 형태이므로 가져올 수 있다)

//querySelector는  element를 CSS 방식으로 검색할 수 있다
querySelector(".클래스명hello 태그명h1")
-> 해당 클래스(.hello)의 해당 태그가 2개이상이면 첫번째 태그 한 개만 출력.
-> 모든 태그 출력하고 싶으면 querySelectorAll()

video 3.3
// click 해서 eventListner를 추가
addEventListneer("click", handleTitleClick)

video 3.4
// **에 적용할 수 있는 이벤트를 찾을 수 있다
console.dir(**) - on~으로 시작하면 이벤트
onmouse~ -> 마우스를 올려면 이벤트 생김

video 3.5
**.onclick = 함수명;
**.onmouseenter = 함수명;
**.onmouseleave = 함수명;
// event - listen
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// event reaction
function 함수() {}


