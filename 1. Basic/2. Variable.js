/*
* 변수 선언하기 

1) var - 잘 사용하지 않음
2) let 
3) const 

var : 재할당, 재선언 가능
let : 재할당 가능, 재선언 불가능
const : 재할당, 재선언 불가능, 상수로 사용

기본적으론 const를 사용하고,
재할당이 필요한 경우에만 let을 사용한다.
var는 잘 사용하지 않는다.
*/

// 1) var 키워드로 변수 선언
var a = 10;
var name = '홍길동';

// console.log(a);
// console.log(name);

// 2) let 키워드로 변수 선언
let b = 20;
let age = 30;

console.log(`원래 b값: ${b}`);

// 재 선언
b = 30;

// 재 할당
// let b = 30   # 에러 발생함 

// `` : 템플릿 리터럴 파이썬의 f-string과 유사
console.log(`재선언 b값: ${b}`);


// 3) const 키워드로 변수 선언
const c = 40;
const pi = 3.14;

console.log(`c값: ${c}`);