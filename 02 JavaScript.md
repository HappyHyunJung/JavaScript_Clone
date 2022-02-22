데이터 타입
  - 자바스크립트에는 type 이 있고 그걸 알아서 이해한다.
  - 숫자 : integer

  -자바스크립트에 문자를 입력
  콘솔에 "hello"라고 입력  
  -문자열 더하기
  "hello" + "my name is **"
  
  - boolean - true or false - ""를 쓰면 문자가 돼버림
  "" 없이 그냥 true or false 사용
  null - 값이 없고 비었다
  undefined - 변수에 값이 저장되지 않았다

console.log
  app.js 에서 브라우저 콘솔로 숫자를 보낼 수 있다
  console.log(2.16)
  console.log("Data Analist")

variable (변수)
  변수를 지정할 때 항상 const
  가끔 업데이트 필요하면 let
  var는 안 쓰는 게 좋다, 쓸 수는 있지만,
  const a = 5; - const(상수, 변하지 않는다)
  주민등록번호 처럼 바뀌는 않는 변수는 const로 변수지정
  let
  이름처럼 바뀔 수 있는 변수는 let으로 변수 지정

배열
  - 컴퓨터 과학에서 '데이터를 정리하는 방법'이 중요
  - 그 중 하나가 배열.
object
  - 게임플레이어 - 플레이어의 속성 = {} 사용
  - 배열은 구매물건 (속성과 다름)
  - Update object item
  player.points = player.points + 15;
  - Add new item to object
  player.myBirthDay = "89/03/25";

함수 function
  - 함수로 변수를 넘겨주고 더하기 나누기 기능 수행

조건문 - 2.13
prompt("message") - 브라우저에 message 를 보여주고 사용자에게 입력값을 받음
변수의 데이터 타입 확인 - typeof 변수명
변수 타입 변경 - parseInt("string") : string을 number로 변경.
isNaN("**") - **가 스트링이면 is Not a Number - True
- **가 15 숫자라면 not a number가 아니니까 - False