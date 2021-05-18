/* foo = function() {
    console.log("첫번째함수");
}
function foo () {
    console.log("두번째함수");
}
foo(); */

/* 객체 선언*/
/* let foo = ['사과','바나나','망고','딸기'];
 let product = {
    제품명 : '7d 건조망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산',
    원산지: '필리핀'
}
console.log(product);

let product = {
    for (let key in product){
        console.log(`${key}: ${product}`);

    }
} */

/*속성과 메소드*/
/*var object = {
    number : 273,
    string : 'RintIanTta',
    boolean : true,
    array : [52,273,103,32],
    method : function(){

    }

}*/

/*this*/
/* let name = 123; //객체 밖에서 생성//
 let product = {
    제품명 : '건조망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산',
    원산지: '필리핀',
    테스트: 1200,
    print: function() {
        console.log(`${this.name} ${this.원산지} ${this.유형}`);
    }              //객체안에서만 가져올수있음 name은 객체밖이라 못가져옴//
}
product.print();
 */

/*생성자함수와 프로토타입*/

let products = [
    { name:'바나나', price: 1200},
    { name:'사과', price: 2000},
    { name:'배', price: 3000},
    { name:'고구마', price: 700},
    { name:'감자', price: 600},

];

function bar(products){
    console.log(`${products.name}의 가격은 ${products.price}원입니다.`);
}
for(let product of products){
    bar(product);
}