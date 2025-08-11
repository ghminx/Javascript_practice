
/*
** if 문의 기본 구조 **
if (조건식) {
    // 조건이 참(true)일 때 실행되는 코드
} else {
    // 조건이 거짓(false)일 때 실행되는 코드
}

** 비교 연산자들 **
* === : 완전히 같다 (값과 타입 모두 같음)
* !== : 완전히 다르다
* > : 크다
* < : 작다
* >= : 크거나 같다
* <= : 작거나 같다
*/

// 기본 조건문 
let age = 20;

if (age >= 20) {
    console.log('성인입니다 영화 관람이 가능합니다.');
} else { 
    console.log('미성년자 입니다 영화 관람이 불가합니다.');
}

// 복잡한 조건문, 학점 산출하기 
let score = 90;

if (score >= 90) {
    console.log('A학점 입니다.')
} else if (score >= 80) {
    console.log('B학점 입니다.')
} else if (score >= 70) {
    console.log('C학점 입니다.')
} else {
    console.log('F학점 입니다. 재수강 하세요')
}




