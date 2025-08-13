
people = [
    { "name": "김개발", "age": 20, "job": "student" },
    { "name": "박멘토", "age": 35, "job": "developer" },
    { "name": "이디자인", "age": 28, "job": "designer" },
    { "name": "최기획", "age": 32, "job": "planner" },
    { "name": "정학생", "age": 19, "job": "student" }
]

users = []
for i in people:
    new_user = dict(i)
    
    new_user['age'] = new_user['age'] + 1
    users.append(new_user)
    
    
print(users)