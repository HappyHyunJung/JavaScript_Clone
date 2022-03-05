clock.js 파일에 clock 변수 선언

5.0
//clock default - 00:00
//interval - 매번 일어나야 하는 것
// 몇 초 간건으로 계속 발생하게 하는 기능

5.1 timeOut
//함수를 몇 초 뒤에 실행하게 하는 기능
// 시간 보여 주는 기능 - Date Object
브라우저에 new Date() 입력 엔터
(예시)  const date = new Date();
        date.getDate() - 날짜의 일 출력
        date.getDay(); - 요일의 매칭 숫자 출력
// 매초마다 함수 실행
// 시간을 콘솔에서 화면에 나오게 하는 방법
clock변수명.innerText = ``

5.2 시분초 한 자리를 0* 형태로 두 글자로 출력
String.padStart(자릿수, "빈자리에채울숫자");
"1".padStart(2,"0"); - '01'로 출력
"11".padStart(2,"0"); - '11'
"11".padStart(3,"0"); - '011'
"1".padEnd(2,"0"); - '10'
"hello".padStart(10,"!"); - '!!!!!hello'
// 숫자를 string 형태로 변환

5.3

