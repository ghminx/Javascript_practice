
/*
Return 은 함수가 작업을 완료한 후 호출한 곳으로 돌려주는 결과

return문의 역할
결과 반환: 함수가 계산한 값을 호출한 곳으로 돌려줌
함수 종료: return문을 만나면 함수 실행이 즉시 종료
값의 전달: 어떤 타입의 값이든 반환할 수 있음
*/

// 기본적인 return 사용법
function add(a, b) {
    return a + b;  // 계산 결과를 반환
}

let result = add(5, 3);  // 8이 result에 저장됨
console.log(result);     // 8 출력


// return이 없는 함수 (undefined 반환)
function greetWithoutReturn(name) {
    console.log("안녕하세요, " + name + "님!");
    // return이 없으면 undefined가 반환됨
}

let a = greetWithoutReturn('홍길동');

// undefined 출력
console.log(a);