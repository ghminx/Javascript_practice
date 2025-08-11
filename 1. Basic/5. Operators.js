
/*
* 산술 연산자 
1) 덧셈
2) 뺼셈
3) 곱샘
4) 나눗셈
5) 나머지
*/ 
let a = 10;
let b = 5;

console.log("덧셈:", a + b);        // 13
console.log("뺄셈:", a - b);        // 7
console.log("곱셈:", a * b);        // 30
console.log("나눗셈:", a / b);      // 3.333...
console.log("나머지:", a % b);      // 1 (10을 3으로 나눈 나머지)
console.log("거듭제곱:", a ** 2);   // 100 (10의 2제곱)

// 문자열 + 숫자 
let name = '홍길동'
let age = 26 

console.log(name + age)    // 홍길동26 으로 출력됨 


// 비교 연산자 
let userAge = 20;
let minAge = 18;


console.log('성인인가요?', userAge >= minAge);
console.log('미성년자 인가요?', userAge < minAge);
console.log("20세 인가요?", userAge === 20)
console.log('20세가 아닌가요?', userAge !== 20)


let totalPrice = 50000;
let isMember = true;

console.log(totalPrice && isMember);  // 파이썬의 and와 비슷 


