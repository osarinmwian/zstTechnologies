// import { AddTaskAction, State } from "@app/interface";
// import { createSlice } from "@reduxjs/toolkit";



// const initialState: State = {
//   data: {
//     list: [],
//     total: 0,
//   },
//   loading: "loading",
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action: AddTaskAction) => {
//       state.data.list.push(action.payload);
//       state.data.total++;
//     },
//     // more reducers...
//   },
// });

// export const { addTask } = tasksSlice.actions;

// export default tasksSlice.reducer;


import { AnyAction, createSlice, Dispatch, PayloadAction, ThunkDispatch } from "@reduxjs/toolkit";
import firebase from "../../../config/index";
import { RootState} from "./index";

interface Todo {
  id: string;
  heading: string;
}

interface TodoState {
  items: any;
  data: Todo[];
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TodoState = {
  data: [],
  loading: "idle",
  error: null,
  items: []
};

// Async Thunk Action Creator to fetch todos
// Async Thunk Action Creator to fetch todos
export const fetchTodos = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(getTodosStart());
  const todoRef = firebase.firestore().collection("todos");
  try {
    const querySnapshot = await todoRef.orderBy("createdAt", "desc").get();
    const todos: Todo[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        heading: data.heading,
      };
    });
    dispatch(getTodosSuccess(todos));
  } catch (error) {
    dispatch(getTodosFailure(error as string));
  }
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.loading = "loading";
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.loading = "loading";
    },
    // set loading state
    getTodosStart: (state) => {
      state.loading = "loading";
      state.error = null;
    },
    // set todos and succeeded state
    getTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.loading = "succeeded";
      state.data = action.payload;
      state.error = null;
    },
    // set failed state and error message
    getTodosFailure: (state, action: PayloadAction<string>) => {
      state.loading = "failed";
      state.error = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, getTodosStart, getTodosSuccess, getTodosFailure } = todoSlice.actions;

export default todoSlice.reducer;
