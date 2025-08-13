
/*
매개변수와 인수 

매개변수(Parameter): 함수를 정의할 때 괄호 안에 적는 변수명
인수(Argument): 함수를 호출할때 실제로 전달 하는 값

*/


// 함수정의 -name은 parameter
function greetUser(name) {
    console.log(`안녕, ${name}`)
}

greetUser('홍길동')

// 기본값 Parameter 지정 
function greetWithTime(name, time = '3시') {
    console.log(`안녕, ${name} 지금은 ${time}야`)
}

greetWithTime('홍길동')