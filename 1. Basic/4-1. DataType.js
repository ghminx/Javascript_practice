
// 2. 응용하기 

// 1. 딕셔너리 생성 

let userInfo = {
    name: "김개발",           // string
    age: 20,                  // number
    height: 175.8,            // number
    isStudent: true,          // boolean
    graduationYear: null,     // null (아직 졸업 안함)
    favoriteColor: undefined  // undefined (아직 정하지 않음)    
};

// 타입별 처리 함수

function processUserData(user) {
    
    console.log('===사용자 정보 분석===')


    if (typeof user.name === "string") {
        console.log(`이름: ${user.name} (길이: ${user.name.length}자)`)}


    if (typeof user.age === "number") {
        console.log(`나이 : ${user.age}세 (성인 여부: ${user.age>=20})`)}
    
    if (typeof user.isStudent === "boolean") {
        console.log(`학생 여부: ${user.isStudent ? "재학중" : "비학생"}`)}    // 조건문 ("재학중" if user['isStudent'] else "비학생") 과 같음
    
    // null과 undefined 처리
    if (user.graduationYear === null) {
        console.log("졸업년도: 미정 (재학중)");
    }

    if (user.favoriteColor === undefined) {
        console.log("선호색상: 아직 선택하지 않음");
    }
    
    }

    

processUserData(userInfo);