
/*
* 에러 처리와 디버깅
 
1. SyntaxError (문법 에러)
코드의 문법이 잘못되었을 때 발생

2. ReferenceError (참조 에러)
존재하지 않는 변수나 함수를 사용하려 할 때 발생

3. TypeError (타입 에러)
잘못된 타입의 값에 대해 연산을 수행하려 할 때 발생합

4. RangeError (범위 에러)
숫자가 허용된 범위를 벗어났을 때 발생

 */


// try catch 문을 통해 에러가 발생해도 멈추지 않게 처리 
function divide(a, b) {
    
    try {
        if (b === 0) {
            throw new Error('0으로 나눌 수 없습니다!');
    }

    let result = a / b;
    console.log(`${a} / ${b} = ${result}`);
    return result;

    } catch (error) {
        console.log('에러가 발생했습니다', error.message);
        return null;

    } finally {
        console.log('계산이 완료되었습니다.');
    }
}

console.log(divide(2, 0));

// 회원가입 검증 시스템 
function user_verification(user_data) {
    try {
        if (!user_data.name || user_data.name.trim() == "") {
            throw new Error('이름을 입력해주세요');
        }
    
        if (!user_data.email || !user_data.email.includes("@"))
            throw new Error('올바른 이메일 주소를 입력해주세요');

        if (user_data.age < 0 || user_data.age > 150)
            throw new RangeError('올바른 나이를 입력해주세요');

        console.log('회원가입이 완료되었습니다.')
        return true;

    } catch (error) {
        if (error instanceof RangeError) {
            console.log('범위가 잘못되었습니다', error.message)
        }
        else {
            console.log('잘못된 값을 입력하였습니다.', error.message)
        }
        
        return false;
    }
}

let 사용자1 = { name: "김개발", email: "kim@example.com", age: 20 };

user_verification(사용자1);  // 성공