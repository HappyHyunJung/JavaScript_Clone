// 데이터 타입
// const a = 200;
// let myName = "최현정"
// console.log(a + 2);
// console.log(a * 2);
// console.log(a / 2);
// console.log("ello, "+myName);

// myName = "현"
// console.log("Hi~, " + myName);

// array

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// console.log(daysOfWeek);

// // Get Item from Array - Get "fri"
// console.log(daysOfWeek[4]);

// // Add one more day to the array - 추가
// daysOfWeek.push("sun")

// console.log(daysOfWeek);

//object
// const player = {
//     name : "최현정",
//     points : 10,
//     fat : true
// };

// console.log(player);
// // Update object item
// player.points = player.points + 15; 
// // Add new item to object
// player.myBirthDay = "89/03/25";
// console.log(player);

// function
// function sayHello(nameOfPerson, age) {
//     // console.log("Hello my name is ");
//     console.log(nameOfPerson, age);
// }

// sayHello("최현정", 27);
// sayHello("nick", 25);
// sayHello("kao", 32);

// function plus(firstnum, secondnum) {
//     console.log(firstnum + secondnum);
// }

// function divide(a, b) {
//     console.log(a / b);
// }

// plus(60, 8);
// divide(98, 20);

// player = {
//     name: "최현정",
//     sayHello: function(otherPersonName) {
//         console.log("안녕하십니까? " + otherPersonName);
//     },
// }
// console.log(player.name);
// player.sayHello("Lee");
// // 계산기 구현
// calculate = {
//     add:function(a, b) {
//         return(a + b);
//     },
//     minus:function(a, b) {
//         return(a - b);
//     },
//     divide:function(a, b) {
//         return(a / b);
//     },
//     multiple:function(a, b) {
//         return(a * b);
//     },
//     power:function(a, b) {
//         return(a ** b);
//     }
// }
// 각 함수의 반환값이 다른 함수에 영향을 줌 - 변수 간 의존적
// const plusResult = calculate.add(2, 3);
// const minusResult = calculate.minus(plusResult, 10);
// const timeResult = calculate.multiple(10, minusResult);
// const divideResult = calculate.divide(timeResult, plusResult);
// const powerResult = calculate.power(divideResult, minusResult);

// calculate.add(1, 100);
// calculate.power(2, 3);
// calculate.divide(10, 2);

// 한국 나이 계산
// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age)) {
//     console.log("Please write a number");
// } else if (age < 18){
//     console.log("You are too young");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink");
// } else {
//     console.log("You can't drink");
// }

// innerText - 내용 변경
// const title =document.getElementById('title');

// change innertext by Id
// title.innerText = "Got you!!!"

//아이디 불러오기
//클래스네임 불러오기
// console.log(title.id);
// console.log(title.className);

// change something by className
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title)

// const title = document.querySelector(".hello h1");

// function handleTitleClick() {
//     title.style.color = "blue";
// }
// title.addEventListener("click", handleTitleClick);

// video 3.4
// const title = document.querySelector(".hello h1");
// console.dir(title);

// function handleMouseEnter() {
//     title.innerText = "mouse is here";
// }

// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!";
// }
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

//video 3.5

// function handleTitleClick() {
//     title.style.color = "blue";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }
// // offline 시키기 - console 옆에 network 클릭
// // 바래 아래 'Fast 3G 아래방향화살표' 클릭 - offline
// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//     alert("All Goood!!!")
// }
// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;

// // window 창 크기 사이즈 바꾸면 event 감지
// window.addEventListener("resize", handleWindowResize);
// // window 에서 ctrl + c
// window.addEventListener("copy", handleWindowCopy);
// // 브라우저 wifi offline - console 옆 network - 아래화살표
// window.addEventListener("offline", handleWindowOffline);
// // 브라우저 wifi online 상태가 되면 event 감지
// window.addEventListener("online", handleWindowOnline);

// video 3.7
// (1) element를 찾아라
//const title = document.querySelector(".hello h1");

// 색깔이 파랑이면 빨강으로 변환하고
// 색깔이 파랑이 아니면 파랑으로 변환
// (3) 이벤트에 반응하게 만들어라
// function handleTitleClick() {
//     const currentColor = title.style.color;

    // 색깔을 바꿀 때마다 title.style.color 번거로움
    // 갱신할 수 있는 새 변수 생성
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     title.style.color = newColor;
// }

// (2) eventListner 사용해서 이벤트 감지
//title.addEventListener("click", handleTitleClick);

// video 3.8
// css 파일의 클래스를 javascript에 가져오기
// video 3.9
// classList
// const title = document.querySelector(".hello h1");

// 클릭했을 때, className === active 이면 className 없에고
// 클릭했을 때, className 이 없으면 className = active 저장
// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (title.classList.contains(clickedClass)) {
//         title.classList.remove(clickedClass)
//     } else {
//         title.classList.add(clickedClass)
//     }
// }

// title.addEventListener("click", handleTitleClick);

// video 3.9
// classList.toggle()
// const title = document.querySelector(".hello h1");

// function handleTitleClick() {
//     title.classList.toggle("clicked")    
// }

// title.addEventListener("click", handleTitleClick);

//4.0
const loginForm = document.querySelector(".login-form");
// html에 있는 login-form  input, button 태그를 가져옴
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// 4.3
const link = document.querySelector("a");
// 4.4 아이디 greeting 찾기
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// 버튼을 클릭하면 클릭을 감지
function onLoginBtnClick() {
    // 4.1 변수를 만들어 입락한 내용 저장
    // 저장된 내용으로 유효성 검사
    const username = loginInput.value;
    // 내용이 없다면
    // if (username === "") {
    //     alert("Please write your name");
    // } 
    // username 길이가 15자보다 크면
    // else if (username.length > 15) {
    //     alert("Your name is too long.");
    // }
    //console.log(username);
}

// loginButton.addEventListener("click", onLoginBtnClick);

// button을 눌렀을 때 자동으로 페이지가 새로고침이 되지 않게 하기
// submit 되지 않게 하기
// 유저이름 submit 하고나서 입력창이 없어짐 - loginForm.classList.add("hidden");
// 입력창이 없어지고 나면 h1 의 innerText가 출력됨
function onLoginSubmit(cake) {
    cake.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    // 4.5 local Storage 에 입력받은 유저네임 저장
    localStorage.setItem(USERNAME_KEY, username);
    //4.4 greeting에 innerText 추가 - greeting은 h1을 가리킴
    // greeting.innerText 는 h1에 들어감
    // 백틱 기호로 문자열 안에 변수 넣기
    paintGreetings()
}

// 4.5
function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello, ${username}`;
}

// 4.5
// local storage 에 유저이름이 있는지 유무확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    // form, h1 모두 숨긴 상태에서 시작 - html form 태그 hidden 추가
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings()
}
// 4.3
// 링크를 클릭하면 연결된 페이지로 이동 - 클릭 감지
// function handleLinkClick(cake) {
//     cake.preventDefault();
//     console.dir(cake);
// }
// link.addEventListener("click", handleLinkClick)