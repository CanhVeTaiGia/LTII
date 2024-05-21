import React, { useEffect, useReducer, useState } from "react";

interface Todo {
  id: number;
  name: string;
  status: boolean;
}
interface State {
  todos: Todo[];
  isLoading: boolean;
  todo: Todo;
}
interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  todos: [],
  isLoading: false,
  todo: {
    id: 0,
    name: "",
    status: false,
  },
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        todo: {
          ...state.todo,
          name: action.payload,
        },
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { ...state.todo, id: Math.floor(Math.random() * 1000000) },
        ],
        todo: initialState.todo,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
        todo: initialState.todo,
      };
    case "SET_TODO":
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
};

export default function Todolist() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_INPUT", payload: e.target.value });
  };

  const addToDo = () => {
    if (state.todo.name.trim() !== "") {
      dispatch({ type: "ADD_TODO" });
    }
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const saveEditTodo = () => {
    dispatch({ type: "EDIT_TODO", payload: state.todo });
    setToggle(false);
  };

  const editTodo = (todo: Todo) => {
    setToggle(true);
    dispatch({ type: "SET_TODO", payload: todo });
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      dispatch({ type: "SET_TODOS", payload: JSON.parse(storedTodos) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <>
      <input
        onChange={handleChange}
        value={state.todo.name}
        placeholder="Nhập tên công việc"
        type="text"
      />
      <button onClick={toggle ? saveEditTodo : addToDo}>
        {toggle ? "Sửa công việc" : "Thêm công việc"}
      </button>
      <p>Danh sách công việc</p>
      <ul>
        {state.todos.length > 0 ? (
          state.todos.map((todo: Todo) => (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => editTodo(todo)}>Sửa</button>
              <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
            </li>
          ))
        ) : (
          <p>Chưa có todo</p>
        )}
      </ul>
    </>
  );
}
