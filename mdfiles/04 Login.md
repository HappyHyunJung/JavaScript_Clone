4.0 - 입력창을 만들고 입력한 내용을 콘솔에 출력.
// user의 이름이나 정보를 입력받아서 기억
html에 input 태그 사용
// html에 있는 login-form  input, button 태그를 가져옴
// input 변수명.value = input의 내용
4.1 - username 유효성 검사
// username 길이가 15자보다 크면
// html input 태그에 maxlength = "15" 추가.
  -> 단 input 태그가 form 태그 안에 포함되어 있어야 한다

4.2
// button을 눌렀을 때 자동으로 페이지가 새로고침이 되지 않게 하기
//submit 함수 인자.preventDefault();
 -> submit event 로 브라우저가 새로고침 되는 동작을 멈춤

4.3
// 링크를 클릭하면 연결된 페이지로 이동 - 클릭 감지
// 링크 함수 인자명.preventDefault()
 -> 링크 기본 동작 - 연결된 페이지로 이동을 차단.

 4.4  유저가 이름을 제출할면 입력창 자체가 없어지게 구현
 // css에 .hidden 클래스 이름을 만들고 display:none
  -> hidden 클래스를 html 입력창 form 태그에 클래스 추가
// 유저이름 submit 하고나서 입력창이 없어짐 - loginForm.classList.add("hidden");
// 백틱 기호로 문자열 안에 변수 넣기

 4.5 입력한 value 저장
 //local storage - 브라우저 내용을 저장
  -> 개발자 도구 - Application - 좌측 storage
  -> 브라우저 콘솔에 
  localStorage.setItem("username", "CHJ")
  -> 저장된 값을 읽어올 때
  localStorage.getItem("username")
  -> delete
  localStorage.removeItem("username")

 4.6 입력한 value loading
 // local storage 에 유저이름이 있으면 form부터 보여주면 안 됨
 // local storage 에 유저이름이 있는지 유무확인
 

 4.7 복습 영상