
/*
객체(Object)는 관련된 데이터와 기능을 하나로 묶어서 관리하는 JavaScript의 핵심 개념
파이썬의 dictionary와 같음 
*/

// {}를 사용한 객체 생성

let student = {
    name: "김개발",        // 속성: 값
    age: 20,
    major: "정보통신공학과",
    isActive: true
};

// 속성 접근
console.log(student.age)
console.log(Object.keys(student));   // 모든 key 출력
console.log(Object.values(student)); // 모든 value
console.log(Object.entries(student)); // key-value 쌍 출력

// 기존 속성 수정
student.age = 21;
student.gpa = 4.0;

// 새로운 속성 추가
student.email = "kimdev@example.com";
student.phone = "010-1234-5678";

// 속성 삭제
delete student.phone;

console.log(student);


// 객체에 메서드 삽입
let student_func = {
    name: "김개발",
    age: 20,
    major: "정보통신공학과",
    gpa: 3.8,

    // 메서드 정의
    introduce: function() {
        return `안녕하세요! 저는 ${this.name}이고, ${this.major}를 전공하고 있습니다.`;
    }
}

// 메서드 호출
console.log(student_func.introduce());