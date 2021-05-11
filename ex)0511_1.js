/* Date객체 */
/* let dateA = new Date();
console.log(dateA);

let dateB = new Date(682281800000);
console.log(dateB);

let dateC = new Date("December 9, 1991 21:30:00");

let date = new Date()

// 메소드활용 //
let dateA = new Date();
let foo = (dateA.getHours());
console.log(dateA); */


/* let date = new Date();

console.log(date);

date.setFullYear(date.getFullYear() + 1);
date.setMonth(date.getMonth() + 1);
date.setDate(date.getDate() + 1);

console.log(date); */

//날짜계산//
/* let now = new Date();
let before = new Date('December 9, 2020');
//2020년 9월9일부터 현재까지 시간을 계산하려함//
let interval = now.getTime() - before.getTime();
                //getTime은 유닉스타임을 가져옴//

console.log(interval);

interval = Math.floor(interval/(1000*60*60*24));
//날짜로 환산
console.log(interval);
 */

/*
let foo = [
    {//key: value,
    name: '고구마',
    price: 1000
    },
    {
    name: '감자',
    price: 500
    }, 
    {
        name: '바나나',
        price: 1500
    },
]; */

//forEach()
/*  let foo = [1, 30, 40, 50 ,100];
foo.forEach((item, index) => {
    console.log(`${index} - ${item}`);
}); 

//map()
let bar = foo.map((item, index) => {
    return item;
});
console.log(bar);

//filter()
let foobar = foo.filter((item, index) => 
{
    return item % 2 == 0; //짝수
});
console.log(foobar);
 */

//예외처리//
function callTherrTimes(callback){
    for (let i=0; i<3; i++){
        callback();
    }
}
//정상적으로 작동
callTherrTimes(function() {console.log('안녕하세요');});

//오류발생
console.log('==================================');
callTherrTimes();

//예외처리
