# 김동호 [201840107]
수정2
## [03월30일]
> 오늘 배운 내용 요약
<!--//else if (4.2<=score && score<4.5)//

/*ex)0330_2
let input=32;
switch(input % 2){
    case 0:
    console.log("짝수");
    break;
    case 1:
        console.log("홀수");
        break;
    default:
    console.log("실수임");
    break;

    *ex)0330_3
    let date = new Date();

    console.log(date.getMonth());
    
    switch (date.getMonth()+1){
        case 12:
        case 1:
        case 2:
            console.log("겨울");
            break
        case 3:
        case 4:
        case 5:
            console.log("봄");
            .......
        
    *ex)0330_4
    let numberA =52;
    let numberB =0;
    let numberC = -23;

    console.log("$(numberA)은/는 $(numberA>0 ? "0보다큰" : "0또는 0보다 작은")숫자입니다.);
    console.log("$(numberb)은/는 $(numberB>0 ? "0보다큰" : "0또는 0보다 작은")숫자입니다.);
    console.log("$(numberC)은/는 $(numberC>0 ? "0보다큰" : "0또는 0보다 작은")숫자입니다.);
    }

    ex)0330_5
    let test =777;
    test = test ? test : "초기화";
    console.log(test);

    test= test || "초기화!!";
    console.log(test);

    ex)0330_6
    const repl = require('repl');

    repl/start({
        prompt : "숫자를 입력하세요",
        eval:(command,context,filename,callback) => {
            let number = Number(command);
            
            if (isNaN(number)){
                console.log("숫자가 아닙니다");
                else{
                    console.log("숫자입니다");
                }
                callback();
            }
        }
    })
}-->
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
변수선언 let //(int)//<br>
-모든변수선언은 let<br>
let a; //변수 a선언<br>
a=3123213; //변수 a 초기화(값을넣음)<br>

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