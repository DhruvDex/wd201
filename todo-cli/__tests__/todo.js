const todoList = require('../todo');

const{all, markAsComplete, add} = todoList();

describe("Todolist Test Suite", () => {
    beforeAll(()=> {
        add(
            {
                title: "Test todo",
                completed: false,
                duedate: new Date().toLocaleDateString("en-CA")
            }
        );
    })
     Test("Should add new todo", () => {
        const todoItemsCount = all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(todoItemsCount + 1);
    });

    test("Shouldd mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })



      test("Retrieval of overdue items", () => {
        const overdueTodo = { title: 'Pay bills', dueDate: '2023-12-12', completed: false };
        todo.add(overdueTodo);

        const overdueItems = todo.overdue();

        expect(overdueItems.length).toBe(1);
        expect(overdueItems[0]).toEqual(overdueTodo);
    });

    test("Retrieval of due today items", () => {
        const dueTodayTodo = { title: 'Clean room', dueDate: '2023-12-13', completed: false };
        todo.add(dueTodayTodo);

        const dueTodayItems = todo.dueToday();

        expect(dueTodayItems.length).toBe(1);
        expect(dueTodayItems[0]).toEqual(dueTodayTodo);
    });

    test("Retrieval of due later items", () => {
        const dueLaterTodo = { title: 'Call dentist', dueDate: '2023-12-14', completed: false };
        todo.add(dueLaterTodo);

        const dueLaterItems = todo.dueLater();

        expect(dueLaterItems.length).toBe(1);
        expect(dueLaterItems[0]).toEqual(dueLaterTodo);
    });
   
  });
