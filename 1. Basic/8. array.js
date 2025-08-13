
/*
Array(배열) 
- 여러개의 값을 순서대로 저장 할 수 있는 데이터 구조 
*/

// 방법 1: 대괄호를 사용한 리터럴 방식 (가장 많이 사용)
let scores = [85, 90, 78, 92, 88];
let fruits = ['사과', '바나나', '오렌지']

// 방법 2: Array 생성자 사용 
let numbers = new Array(1, 2, 3, 4, 5);
let emptyArray = new Array(5)

// 방법 3: 빈 배열 생성 후 추가 
let students = []
students[0] = '김철수'

// 실습1 기본 배열 조작 
console.log('전체 점수: ', scores)
console.log('첫 번째 학생 점수:', scores[0]); // 85
console.log('세 번째 학생 점수:', scores[2]); // 78
console.log('배열의 길이:', scores.length);   // 5

// 배열 수정 
scores[1] = 95; // 2번째 학생의 점수 수정
console.log('전체 점수: ', scores)

// 배열과 반복문 조합 
let sum = 0;

console.log('=== 학생별 점수 출력 ===');

for (let i = 0; i < scores.length; i++) {
    console.log(`${i+1}번 학생 점수: ${scores[i]}점`);
    sum += scores[i];   // 학생 점수 총합
}

console.log(`총합 점수: ${sum}점`);
console.log(`평균 점수: ${sum/scores.length}점`);

// 최솟값 최댓값 찾기
max_ = scores[0]
min_ = scores[0]

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max_) {
        max_ = scores[i];
    } else if (min_ > scores[i]) {
        min_ = scores[i];
    }
}

console.log(`최고점: ${max_}점`);
console.log(`최저점: ${min_}점`);