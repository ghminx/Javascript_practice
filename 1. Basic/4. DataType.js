
// 1. 데이터 타입 기초 

// Number Type 
let studentAge = 20;
let height = 175.5;
let temperature = -5;

console.log(studentAge);
console.log(typeof studentAge); // typeof : 변수의 타입 확인

// String Type
let studentName = 'kim';
let greeting = "Hello, World!";

let message = "오늘 온도는 " + temperature + "도입니다.";   // 문자열 연결
let message2 = `오늘 온도는 ${temperature}도입니다.`;       // 템플릿 리터럴 사용

console.log(typeof studentName);  // string 타입으로 출력됨 

// Boolean Type
let isStudent = true;

console.log(isStudent);
console.log(typeof isStudent); // boolean 타입으로 출력됨

// Undefined Type
let studentId;           // 선언만 하고 초기화하지 않음
console.log(studentId);  // undefined로 출력됨

// Null Type
let studentGrade = null;
console.log(studentGrade); // null로 출력됨


