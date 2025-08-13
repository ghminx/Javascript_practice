
/*
함수의 기본 구조 

function 함수이름() {
    // 실행할 코드
}

*/

// 기본 함수 선언 
function hello() {
    console.log('Hello');
}

hello();

// 매개변수가 있는 함수 선언 
function greetUser(name) {
    console.log(`안녕하세요, ${name}님`);
}

greetUser('홍길동')

// 값을 반환하는 함수 

// 1. add 함수 
function add(a, b) {
    let sum = a + b;   
    return sum;
}

let res = add(3, 3);
console.log(res);