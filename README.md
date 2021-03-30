# 김동호 [201840107]
수정수정1
## [03월23일]
> 오늘 배운 내용 요약

*불
참과 거짓의 표현 : true와false

*비교연산자
//== 같습니다 3 == 3 false//
//!= 다릅니다 3 != 3 false//
//>  왼쪽이 더큼 3 < 5 true//
//<  오른쪽이 더큼 3 > 5 false//
//>= 왼쪽이 크거나 같음//
//<=오른쪽이 크거나 같음//

*논리연산자
! 논리 부정연산자
|| 논리합 연산자 // OR //둘중하나만 참이여도 참
&& 논리곱 연산자 // AND // 둘중 하나라도 거짓이면 거짓

*변수
변수선언 let //(int)//
-모든변수선언은 let
let a; //변수 a선언
a=3123213; //변수 a 초기화(값을넣음)

*복합 대입 연산자
+= 덧셈 후 대입 //문자열에 사용시 문자열 연결후 대입//
-= 뺄셈 후 대입
*= 곱셈 후 대입
/= 나눗셈 후 대입

*자료형 검사
typeof //자료형 확인 연산자

*undefined 변수
변수를 선언하고 값을 안넣었을때 

*강제 자료형 변환
Number() //숫자로 자료형 변환
String() //문자열로 자료형 변환
Boolean() //불로 자료형 변환 //0,NaN,""[빈문자열],null,undefined는 false로 변환

NAN은 숫자 자료형 이지만 숫자가 아닌 것

*일치 연산자
=== 자료형과 값이 같은지 비교 //문자열,숫자열구분//
!== 자료형과 값이 다른지 비교

*상수
항상같은수
const:상수를 만드는 키워드

*if 조건문
if (불표현){

}

> 요약
1,연산자 종류
2,조건문

## [03월16일]
> 오늘 배운 내용 요약 

자바스크립트

*웹클라이언트 애플리케이션 개발
(웹 브라우저에서 실행할 수 있는 유일한 프로그래밍 언어)

*네이티브 애플리케이션 개발
-java,스위프트 등을로 만든 애플리케이션
-기업에서 애플리케이션을 만들경우 2가지 언어로 만들기에 비용이 2배가됨
-자바스크립트를 사용하면 1개의 애플리케이션만 개발해도 스마트폰 동작 가능
*페이스북의 React Native
-자바 스크립트로 네이티브 애플리케이션을 개발 (내부적으로 프로그래밍 언어를 변환)

*게임 개발
-원래 게임은 서버와 클라이언트 모두 c++로 
제작
-스마트폰이 활성화 되면서 한번에 여러 스마트폰 운영체제에서 실행할 수 있는 애플리케이션을 개발하는 것이 경제적으로 이득이 됨
-유니티 게임 엔진 등장(자바스크립트 기반)

*웹 서버 개발
웹서버/웹클라이언트를 다른언어로 개발했었지만
Node.js 의 등장으로 웹서버도 자바스크립트로 개발 가능

*데이터베이스 관리
-SQL 프로그래밍 언어를 사용한 데이터 저장 프로그램
-기존의 SQL은 복잡하고 무거워 NoSQL 등장


웹페이지를 출력하지 않아도 웹프로토콜(http또는https 등)을 활용하면 웹 서버로 칭함. 페이팔 결제시스템에도 Node.js를 활용
Node.js는 웹 개발과 관련해서 간단한 모듈들만 제공해서 데이터,예외 처리 등이 복잡하나 빠름

*식별자
이름을 붙일 때 사용하는 단어, 변수와 함수 이름 등으로 사용
-키워드 사용x
-특수문자는 _와$만 사용가능
-숫자로시작하면안됨
-공백은 입력하면 안됨

*식별자 사용 규칙
-생성자 함수의 이름은 항상 대문자시작
-변수,함수,속성,메소드의 이름은 항상 소문자로 시작
-여러 단어로 된 식별자는 각 단어의 첫 글자를 대문자로 함
will out > willOut
will return > will Return
i am a boy > iAmABoy

*식별자의 종류
-식별자 뒤에 괄호 없음 >변수 또는 상수 / 속성
-식별자 뒤에 괄호 있음 >함수 / 메소드
alert('Hello World') > 함수
array.length > 속성
input > 변수 또는 상수

*출력
-console 객체의 log() 메소드 사용
console.log()메소드
console.log("HavaScript Programming");

-pepl을 사용한 출력
"안녕"+"하세요"

*숫자
console.log(52)
console.log(52.271)

*이스케이프(역슬래쉬) 문자
- 따옴표를 문자로 사용가능
- 문자열 줄바꿈 할 경우 사용
"이\"순신"\"
'이"순신"'
"이'순신'"
\t 수평 탭
\n 줄바꿈
\' 작은따옴표
\" 큰따옴표
\\ 역슬래쉬

*문자열 합하기
console.log("가나다"+"라마"+"바사아"+"자차카타"+"파하");

>요약

1,자바 스크립트의 발전과정
2,자바스크립트 식별자