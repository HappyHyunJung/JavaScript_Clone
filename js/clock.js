const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

// 몇 초 간건으로 계속 발생하게 하는 기능
// setInterval(function_name, interval_milliseconds)
// 5000(ms) = 5초
// setInterval(sayHello, 5000);

//5.1 timeOut
//함수를 몇 초 뒤에 실행하게 하는 기능
//setTimeout(function_name, coming_ms)
// setTimeout(sayHello, 5000);

// 1초마다 시간 출력하는 함수 실행
function getClock() {
    const date = new Date();
    // 숫자를 string 형태로 변환
    const hours = String(date.getHours()).padStart(2,"0");
    const minites = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // 시간을 콘솔에서 화면에 나오게 하는 방법
    clock.innerText = `${hours}:${minites}:${seconds}`
}

//웹 사이트가 실행되자마자 getClock() 실행하고 매초마다 다시 실행
getClock();
setInterval(getClock, 1000)