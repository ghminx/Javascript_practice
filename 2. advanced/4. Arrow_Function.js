/*
* 화살표 함수의 기본 문법
화살표 함수는 => 기호를 사용해서 만듬. 마치 "입력 ⇒ 출력"을 나타냄
 */

// 기존 함수 
function add(a, b) {
    let res = a + b;
    return res;
}

// 화살표 함수 

const add2 = (a, b) => {
    return a + b;
}

// 더 간단하게 (한 줄일 때)
const add3 = (a, b) => a + b;
