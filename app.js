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

player = {
    name: "최현정",
    sayHello: function(otherPersonName) {
        console.log("안녕하십니까? " + otherPersonName);
    },
}
console.log(player.name);
player.sayHello("Lee");