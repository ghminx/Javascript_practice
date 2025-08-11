import numpy as np

userInfo = {
    'name': "김개발",           
    'age': 20,                  
    'height': 175.8,            
    'isStudent': True,          
    'graduationYear': None,     
    'favoriteColor': None  
}




def processUserData(user):
    
    if isinstance(user['name'], str):
        print(f"이름: {user['name']} (길이: {len(user['name'])}자)")

    if isinstance(user['age'], int):
        print(f"나이: {user['age']} 세 (성인 여부: {user['age'] >= 20})")
        
        
processUserData(userInfo)









