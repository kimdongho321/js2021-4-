 //무명함수//
let a = function() { //이름없는 함수로 변환//
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};

a();
console.log(a);

//선언적 함수
function b () { 
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};
b();
console.log(b);

//화살표 함수
let c = () => { 
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};

c();
console.log(c);

//함수의 기본 형

//1,기본형
function power(x){ //x값을 입력받는다//
    return x*x; //x*x값을 power에 저장
}
console.log(power(10));
console.log(power(20));

function foo(x){
    bar = x*x;
    return bar;
}
console.log(foo(10));

//2,매개변수가 여려개
function multiply(x,y){ //x,y값을 입력받는다//
    return x*y; //x*y값을 multyply에 저장
}
console.log(multiply(10,20));


function print(x){//문자열을 입력받는다
    console.log(`"${x}"이라고말했습니다"`)
}

print("안녕");

//3,리턴하는 함수의 기본 형태

function sum(q,w){//q,w값 입력받음
    let output = 0;
    for (let i = q;i<=w;i++){//q부터w까지 더함
        output += i;
    }
    return output;
}

    console.log (sum(0,100));

//함수 매개 변수 초기화

function print(name,count){
    console.log(`${name}이 ${count}개 있습니다.`);
}
print("사과",10);


function print(name,count){
    if(!count){//count 에 값이 없을때
        count =1;
    }
    console.log(`${name}이 ${count}개 있습니다.`);
}
print("사과",10);
print ("사과");

//콜백 함수

function callTenTimes(e){
    for (let i=0;i<10;i++){
        e();
    }
    callTenTimes(function(){console.log("함수호출");
})
}

//표준 내장 함수

let inputA = "52";
let inputB = "52.273";
let inputC = "1401동";
let inputD = "1A동입니다";


console.log(parseInt(inputA)); //o
console.log(parseFloat(inputA)); //x
console.log(parseInt(inputB)); //o
console.log(parseFloat(inputB)); //o
console.log(parseFloat(inputC)); // 숫자만 반환
console.log(parseFloat(inputD)); //숫자만 반환

//타이머 함수

setTimeout(function(){
   console.log("1초지남") 
},1000);

setInterval(()=>{console.log("1초지남")},1000);
//종료하려면 ctrl+c//

//타이머 제거 함수
setTimeout(function(){
    console.log("1초지남") 
 },1000);
 
 setInterval(()=>{clearInterval(id);},3000);
