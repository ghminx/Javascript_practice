

def user_verification(userdata):
    
    try:
        if not userdata['name'] or userdata['name'].strip() == "":
            raise ValueError('이름을 입력하세요')

        if not userdata['email'] or '@' not in userdata['email']:
            raise ValueError('잘못된 형식의 이메일입니다')
        
        if (userdata['age'] < 0 or userdata['age'] > 150):
            raise ValueError('올바르지 않은 나이 범위 입니다.')
        
        print('회원가입 완료')
        return True 
    
    except Exception as e:
        print(f'에러발생 : {e}')
        return False
        
    
    
user = {
    'name' : '1ㅇㅁㅇ',
    'email' : 'casunave',
    'age' : 60
}

user_verification(user)
