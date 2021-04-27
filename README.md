# 김동호 [201840107]
<<<<<<< HEAD
## [04월 27일]
>오늘 배운 내용 요약
<h1>객체 기본</h1><br>
<h3>배열</h3><br>
배열은 요소에 접근할 때 인덱스를 사용하고 객체는 키를 사용함<br>
let array = ['사과','바나나','망고',딸기];<br>
array[0] >>>> '사과'<br>

<h3>객체 선언</h3><br>
<!--ex)0427_1.js 참고-->

<h1>객체와 반복문</h1><br>
for in 반복문을 사용해 객체에 반복문을 적용
<!--ex)0427_1.js 참고-->

<h1>속성과 메소드</h1><br>
요소 : 배열 내부에 있는 값 하나하나<br>
속성 : 객체 내부에 있는 값 하나하나<br>
메소드 : 객체의 속성 중 자료형이 함수인 속성 <br>

<h1>메소드 내부에서 this</h1><br>
객체 안에있는 것만 가져올 수 있음

<h1>생성자 함수와 프로토타입</h1><br>
객체 지향 프로그래밍 : 현실의 객체를 모방해서 프로그래밍<br>
배열과 객체를 사용하면 여러 개의 데이터를 쉽게 다룰 수 있음<br>

>요약
=======
1
>>>>>>> 3e59751ce0afbaf43c14337f10316147f255f6ed
## [04월13일]
>오늘 배운 내용 요약
<h1>*익명함수</h1><br>
이름을 붙이지 않고 함수 생성 // 함수 호출시 함수 내부의 코드 덩어리 전부 실행<br><!-- ex)0413_1.js 참고 -->

<h1>*선언적 함수</h1><br>
이름을 붙여 함수를 생성<br><!-- ex)0413_1.js 참고 -->

<h1>*화살표 함수 [ ES6문법]</h1><br>
<!-- ex)0413_1.js 참고 -->

<h1>*함수의 기본 형태</h1><br>
<!-- ex)0413_1.js 참고 -->

<h1>*함수 매개 변수 초기화</h1><br>
매개변수를 입력하지 않고 함수 호출<br><!-- ex)0413_1.js 참고 -->

<h1>*콜백 함수</h1><br>
함수의 매개 변수로 전달되는 함수<br>

<h1>*표준 내장 함수</h1><br>
자바스크립트에서 기본적으로 지원하는 함수<br>
parseint() //문자열을정수로변환<br>
parseFloat() // 문자열을 실수로 변환<br>

<h1>*타이머 함수</h1><br>
특정시간 후에 또는 특정 시간마다 어떤 일을 할 때 사용<br>
시간은 밀리초로 지정. 1초를 나타내려면 1000을입력
setTimeout<br>
setInterval<br>
clearinterval // 타이머 제거<br>


>요약

함수의 종류<br>

## [04월06일]
>오늘 배운 내용 요약
<h1>*for 반복문<br></h1>
식을 반복수행할 때 사용<br><!-- ex)0406_1.js 참고 -->
역으로도 사용 가능<br><!-- ex)0406_2.js참고 -->

<h1>*for in반복문<br></h1> <!-- ex)0406_3.js참고 -->

<h1>*break 키워드<br></h1>

반복문을 벗어날때 사용<br>

<h1>*배열을 다루는 함수 <br></h1>

push // 배열의 마지막에 있는 값에 추가로 넣어줌 <br>

pop // 배열의 마지막에 있는 값을 제거 <br>

shift // 배열의 첫번째 값을 제거하고 새로넣어줌 <br>

concat // 두개의 배열을 합쳐줌 <br>

reverse // 배열을 역순으로 재배치 <br>

sort // 배열을 정렬(숫자먼저 문자 뒤로) <br>

slice //
배열.slice([시작인덱스],[마지막인덱스])<br>

<!-- console.log(" slice");
     console.log( foo );
     console.log( foo.slice(1,5));-->

splice // 잘라서 넣어줌<br>

<!-- console.log (" \n splice");
     foo = ["a","b","c","d"];
     bar = foo.splice(1,3);
     console.log(foo);
     console.log(bar);
     // foo에는 a만남고 bar에는 b,c,d 삽입

     bar = foo.splice(1,3,1,"삽입",10,653);
     //foo에는 b,c,d삭제후 bar에삽입, foo에 1,"삽입",10,653
     -->

join // 배열값들 사이에 원하는 문자를 삽입<br>

<h1>*continue<br></h1>

반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행함
>요약
## [03월30일]
> 오늘 배운 내용 요약

범위 표현시 두개의 식으로 나눠야함<br>
<!--else if (4.2<=score && score<4.5)-->
<h1>*if else문<br></h1>
<h3>갯수 제한 없음</h3><br>
범위 표현시 논리연산자를 사용하여 두번계산<br>
ex) else if (4.2<=score && score<=4.5)<br>

<h1>*switch 조건문<br></h1><!--ex)0330_2 참고-->
<h3>하나의 결과값을 출력할떄<br></h3>
break 없이도 사용가능<Br><!--ex)0330_3 참고-->

<h1>*삼항 연산자<br></h1><!--ex)0330_4 참고-->
<h3><불 표현식> ? <참> : <거짓><br></h3>

<h1>*짧은 초기화 조건문</h1><br><!--ex)0330_5 참고-->
<h3>|| 연산자를 불이 아닌 자료에 사용할경우</h3><br>

변수명.length = 변수크기출력
<!--
ex) let array=["ㅎㅇ",5,6,"ㅈㅅ",6];
    let i=0;
    while(i<array.length){
        console.log(i+"번째출력 : "+array[i]);
        i++;
    }
    4번쨰출력까지나옴
    -->

>요약

조건문과 연산자 정리
## [03월23일]
> 오늘 배운 내용 요약

<h1>*불</h1>
<h3>참과 거짓의 표현 : true와false</h3>

<h1>*비교연산자</h1>
//== 같습니다 3 == 3 false// <br>
//!= 다릅니다 3 != 3 false//<br>
//>  왼쪽이 더큼 3 < 5 true//<br>
//<  오른쪽이 더큼 3 > 5 false//<br>
//>= 왼쪽이 크거나 같음//<br>
//<=오른쪽이 크거나 같음//<br>

<h1>*논리연산자</h1>
! 논리 부정연산자<br>
|| 논리합 연산자 // OR //둘중하나만 참이여도 참<br>
&& 논리곱 연산자 // AND // 둘중 하나라도 거짓이면 거짓<br>

<h1>*변수<br></h1>
변수선언 let // (int) //<br>
-모든변수선언은 let<br>
let a; // 변수 a선언 <br>
a=3123213; // 변수 a 초기화(값을넣음) <br>

<h1>*복합 대입 연산자<br></h1>
+= 덧셈 후 대입 //문자열에 사용시 문자열 연결후 대입//<br>
-= 뺄셈 후 대입<br>
*= 곱셈 후 대입<br>
/= 나눗셈 후 대입<br>

<h1>*자료형 검사<br></h1>
typeof //자료형 확인 <br>

<h1>*undefined 변수<br></h1>
변수를 선언하고 값을 안넣었을때 <br>

<h1>*강제 자료형 변환<br></h1>
Number() //숫자로 자료형 <br>
String() //문자열로 자료형 변환<br>
Boolean() //불로 자료형 변환 //0,NaN,""[빈문자열],null,undefined는 false로 변환<br>

NAN은 숫자 자료형 이지만 숫자가 아닌 것<br>

<h1>*일치 연산자<br></h1>
=== 자료형과 값이 같은지 비교 //문자열,숫자열구분//<br>
!== 자료형과 값이 다른지 비교<br>

<h1>*상수</h1>
<h3>항상같은수</h3>
const:상수를 만드는 키워드<br>

<h1>*if 조건문<br></h1>
if (불표현){

}<br>

> 요약

1,연산자 종류<br>
2,조건문<br>

## [03월16일]
> 오늘 배운 내용 요약 

<h1>자바스크립트</h1>

<h1>*웹클라이언트 애플리케이션 개발</h1>
<h3>(웹 브라우저에서 실행할 수 있는 유일한 프로그래밍 언어)</h3>

<h1>*네이티브 애플리케이션 개발</h1>
-java,스위프트 등을로 만든 애플리케이션<br>
-기업에서 애플리케이션을 만들경우 2가지 언어로 만들기에 비용이 2배가됨<br>
-자바스크립트를 사용하면 1개의 애플리케이션만 개발해도 스마트폰 동작 가능<br>
*페이스북의 React Native<br>
-자바 스크립트로 네이티브 애플리케이션을 개발 (내부적으로 프로그래밍 언어를 변환)<br>

<h1>*게임 개발<br></h1>
-원래 게임은 서버와 클라이언트 모두 c++로 
제작<br>
-스마트폰이 활성화 되면서 한번에 여러 스마트폰 운영체제에서 실행할 수 있는 애플리케이션을 개발하는 것이 경제적으로 이득이 됨<br>
-유니티 게임 엔진 등장(자바스크립트 기반)<br>

<h1>*웹 서버 개발<br></h1>
웹서버/웹클라이언트를 다른언어로 개발했었지만<br>
Node.js 의 등장으로 웹서버도 자바스크립트로 개발 가능<br>

<h1>*데이터베이스 관리<br></h1>
-SQL 프로그래밍 언어를 사용한 데이터 저장 프로그램<br>
-기존의 SQL은 복잡하고 무거워 NoSQL 등장<br>


웹페이지를 출력하지 않아도 웹프로토콜(http또는https 등)을 활용하면 웹 서버로 칭함.<br> 페이팔 결제시스템에도 Node.js를 활용<br>
Node.js는 웹 개발과 관련해서 간단한 모듈들만 제공해서 데이터,예외 처리 등이 복잡하나 빠름<br>

<h1>*식별자<br></h1>
이름을 붙일 때 사용하는 단어, 변수와 함수 이름 등으로 사용<br>
-키워드 사용x<br>
-특수문자는 _와$만 사용가능<br>
-숫자로시작하면안됨<br>
-공백은 입력하면 안됨<br>

<h1>*식별자 사용 규칙<br></h1>
-생성자 함수의 이름은 항상 대문자시작<br>
-변수,함수,속성,메소드의 이름은 항상 소문자로 시작<br>
-여러 단어로 된 식별자는 각 단어의 첫 글자를 대문자로 함<br>
will out > willOut<br>
will return > will Return<br>
i am a boy > iAmABoy<br>

<h1>*식별자의 종류<br></h1>
-식별자 뒤에 괄호 없음 >변수 또는 상수 / 속성<br>
-식별자 뒤에 괄호 있음 >함수 / 메소드<br>
alert('Hello World') > 함수<br>
array.length > 속성<br>
input > 변수 또는 상수<br>

<h1>*출력<br></h1>
-console 객체의 log() 메소드 사용<br>
console.log()메소드<br>
console.log("HavaScript Programming");<br>

<h1>-pepl을 사용한 출력<br></h1>
"안녕"+"하세요"<br>

<h1>*숫자<br></h1>
console.log(52)<br>
console.log(52.271)<br>

<h1>*이스케이프(역슬래쉬) 문자<br></h1>
- 따옴표를 문자로 사용가능<br>
- 문자열 줄바꿈 할 경우 사용<br>
"이\"순신"\"<br>
'이"순신"'<br>
"이'순신'"<br>
\t 수평 탭<br>
\n 줄바꿈<br>
\' 작은따옴표<br>
\" 큰따옴표<br>
\\ 역슬래쉬<br>

<h1>*문자열 합하기<br></h1>
console.log("가나다"+"라마"+"바사아"+"자차카타"+"파하");<br>

>요약

1,자바 스크립트의 발전과정
2,자바스크립트 식별자