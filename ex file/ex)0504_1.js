/*생성자함수*/
function Product(name, price) {
    this.name = name;
    this.price = price;
}

let product = new Product("바나나",1200);

console.log(product); 

/*프로토타입*/
/* function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.print = function() {
    console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
};

let product = new Product("바나나",1200);
product.print(); */

/*null값과 자료형*/ 
/* console.log(null); 
console.log(typeof(null)); */ //null과 자료형에 빈값을 넣은것은 다름//

/*기본자료형과 객체자료형의 차이 */
/* let number =273;
let string = '안녕하세요';
let boolean = true;

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean); */

/*차이점 */
/* let foo =273;
    let bar = 111;
    Number.prototype.method = function(){
        return "Add Method";
    } 
    console.log(foo.method());
    console.log(bar.method()); */

/*Number 객체 */
/* let numberFromLiteral = 273;
let numberFromConstructor = new numberFromLiteral(273); */

/*생성자 함수의 속성*/
/* function Constructor() {}
Constructor.property = 273;
Constructor.method = function () {};

console.log(Constructor.property);
console.log(Constructor.method); */

/*Number 생성자 함수의 속성 */
/* let numberA = Number.MAX_VALUE;
let numberB = Number.MAX_VALUE+1;
let numberC = Number.MIN_VALUE;

console.log(numberA);
console.log(numberB);
console.log(numberC); */

/*String객체 */

/* let foo = "abcdefg";

let bar = foo.toUpperCase(); //문자열 toUpperCase사용시 원본변수는 따로 두고 변형시킨 값을 저장할 변수를 하나더 생성하여 출력해야함
console.log(foo); 
console.log(bar); */

/*메소드 활용 */

/* let string = '안녕하세요. 좋은아침입니다.';
if (string.indexOf('아침') >= 0) {
    console.log('좋은아침입니다.');
} else
console.log('안녕히 주무세요.'); */

/*문자열 분해 */
/* let string = '감자,고구마,바나나,사과'; */
