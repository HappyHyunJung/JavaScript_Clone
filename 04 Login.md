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