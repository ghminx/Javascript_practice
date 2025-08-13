// 할 일 관리 객체
const TodoManager = {
    // 데이터 저장소
    todos: [],
    nextId: 1,

    // 할 일 추가 함수
    addTodo: function (text) {                // 객체(딕셔너리)안에 함수를 정의할땐 abc: function() 식으로 작성해야함
        if (!text || text.trim() === '') {
            alert('할 일을 입력해주세요!');    // alert: 브라우저에 팝업창을 띄움
            return false;
        }

        // 새 할 일 객체 생성 
        const newTodo = {
            id: this.nextId++,          // nextID 1씩 증가
            text: text.trim(),          // 입력값 앞뒤 공백 제거
            completed: false,           // 아직 완료되지 않은 상태
            createAt: new Date()        // 현재 날짜 시간 저장
        };

        this.todos.push(newTodo);       // todos라는 리스트에 newTodo 추가(push)
        this.renderTodos();             // UI 화면 갱신
        this.updateStats();             // 업데이트 메서드
        return true;
    },

    // 할 일 완료/미완료 토글
    toggleTodo: function(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.renderTodos();
            this.updateStats();
        }
    },

    // 할 일 삭제
    deleteTodo: function(id) {
        if (confirm('정말 삭제하시겠습니까?')) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.renderTodos();
            this.updateStats();
        }
    },

    // 할 일 목록 화면에 표시
    renderTodos: function() {
        const todoList = document.getElementById('todoList');

        if (this.todos.length === 0) {
            todoList.innerHTML = '<p style="text-align: center; color: #666;">아직 할 일이 없습니다. 새로운 할 일을 추가해보세요!</p>';
            return;
        }

        let html = '';
        this.todos.forEach(todo => {
            html += `
                <div class="todo-item ${todo.completed ? 'completed' : ''}">
                    <span class="todo-text">${todo.text}</span>
                    <button class="btn btn-complete" onclick="TodoManager.toggleTodo(${todo.id})">
                        ${todo.completed ? '취소' : '완료'}
                    </button>
                    <button class="btn btn-delete" onclick="TodoManager.deleteTodo(${todo.id})">
                        삭제
                    </button>
                </div>
            `;
        });

        todoList.innerHTML = html;
    },

    // 통계 정보 업데이트
    updateStats: function() {
        const total = this.todos.length;
        const completed = this.todos.filter(todo => todo.completed).length;
        const remaining = total - completed;

        const statsDiv = document.getElementById('stats');
        statsDiv.innerHTML = `
            <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 5px;">
                <strong>📊 현황:</strong> 
                전체 ${total}개 | 완료 ${completed}개 | 남은 일 ${remaining}개
            </div>
        `;
    },

    // 초기화 함수
    init: function() {
        // 추가 버튼 이벤트
        document.getElementById('addbtn').addEventListener('click', () => {
            const input = document.getElementById('todo');
            if (this.addTodo(input.value)) {
                input.value = '';
            }
        });

        // 엔터키 이벤트
        document.getElementById('todo').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const input = document.getElementById('todo');
                if (this.addTodo(input.value)) {
                    input.value = '';
                }
            }
        });

        // 초기 화면 렌더링
        this.renderTodos();
        this.updateStats();
    }
};

// 페이지 로드 완료 후 앱 시작
document.addEventListener('DOMContentLoaded', function() {
    TodoManager.init();
});
