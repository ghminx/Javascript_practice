/*
스코프는 함수가 접근 가능한 범위를 의미함 
*/

// 전역 스코프(Global Scope)  - 전역 함수
let apartmentName = '해피빌리지';
var totalFloor = 15;

function showApartmentInfo() {
    console.log(apartmentName);
    console.log(totalFloor);
}

showApartmentInfo()

// 지역 스코프(Local Scope) 
function myRoom() {
    // 지역 스코프에 선언된 변수 
    let roomNumber = "301호";
    let MySecret = "비밀";

    console.log(roomNumber);
    console.log(apartmentName); // 전역변수도 함수 내 사용 가능 
}

myRoom()