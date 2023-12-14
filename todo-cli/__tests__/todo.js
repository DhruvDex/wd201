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
  test("Checks creating a new todo", () => {
    const itemCount = all.length;
    // expect(all.length).toBe(itemCount)
    add({
      title: "Test todo2",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(all.length).toBe(itemCount + 1);
  });

  test("Checkd markinga a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Checks retrival of overdue items", () => {
    const itemCount = overdue().length;
    // expect(overdue().length).toBe(itemCount)
    add({
      title: "Test todo2 yesterday",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() - 1))
        .toISOString()
        .split("T")[0],
    });
    expect(overdue().length).toBe(itemCount + 1);
  });

  test("Checks retrival of dueToday items", () => {
    const itemCount = dueToday().length;
    // expect(dueToday().length).toBe(itemCount)
    add({
      title: "Test todo3",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(dueToday().length).toBe(itemCount + 1);
  });

  test("Checks retrival of dueLater items", () => {
    const itemCount = dueLater().length;
    // expect(dueLater().length).toBe(itemCount)
    add({
      title: "Test todo2 tomorrow",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .split("T")[0],
    });
    expect(dueLater().length).toBe(itemCount + 1);
  });
