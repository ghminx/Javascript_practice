/*
** for문 구조 ** 
for (초기값; 조건; 증감) {
    // 반복할 코드
}
*/

for (let i = 1; i <=5; i++) {
    console.log(i)
}

/*
1. i = 1 로 시작
2. i <= 5 조건 
3. i++ => i 씩 증가 
*/


// 별 개수 늘리기
for (let i = 1; i <= 5; i++) {
    console.log('★'.repeat(i));
}

// 역순으로 숫자 출력 
for (let i = 5; i >=1; i--) {
    console.log(i)
}

// 짝수만 출력 
for (let i = 2; i <= 10; i+=2) {
    console.log(i);
}

// 3의 배수만 실행
for (let i = 3; i <= 10; i++) {
    if (i % 3 === 0) {
    console.log(i);
    }
}

// 1 ~ 100까지 모두 더하기 
let c = 0
for (let i = 1; i <= 100; i++) {
    c += i
}

console.log(c)

// 구구단 3단 출력
for (let i = 1; i <= 9; i++) {
    console.log(`3 X ${i} = ${3*i}`)
}