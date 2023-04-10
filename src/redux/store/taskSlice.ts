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


// import { AnyAction, createSlice, Dispatch, PayloadAction, ThunkDispatch } from "@reduxjs/toolkit";
// import firebase from "../../../config/index";
// import { RootState} from "./index";

// interface Todo {
//   id: string;
//   heading: string;
// }

// interface TodoState {
//   items: any;
//   data: Todo[];
//   loading: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// const initialState: TodoState = {
//   data: [],
//   loading: "idle",
//   error: null,
//   items: []
// };

// // Async Thunk Action Creator to fetch todos
// // Async Thunk Action Creator to fetch todos
// export const fetchTodos = () => async (dispatch: Dispatch<AnyAction>) => {
//   dispatch(getTodosStart());
//   const todoRef = firebase.firestore().collection("todos");
//   try {
//     const querySnapshot = await todoRef.orderBy("createdAt", "desc").get();
//     const todos: Todo[] = querySnapshot.docs.map((doc) => {
//       const data = doc.data();
//       return {
//         id: doc.id,
//         heading: data.heading,
//       };
//     });
//     dispatch(getTodosSuccess(todos));
//   } catch (error) {
//     dispatch(getTodosFailure(error as string));
//   }
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTodo: (state, action: PayloadAction<string>) => {
//       state.loading = "loading";
//     },
//     deleteTodo: (state, action: PayloadAction<string>) => {
//       state.loading = "loading";
//     },
//     getTodosStart: (state) => {
//       state.loading = "loading";
//       state.error = null;
//     },
//     getTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
//       state.loading = "succeeded";
//       state.items = action.payload;
//       state.error = null;
//     },
//     getTodosFailure: (state, action: PayloadAction<string>) => {
//       state.loading = "failed";
//       state.error = action.payload;
//     },
//   },
// });

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "../../../config/index";

export const fetchTodos = createAsyncThunk("tasks/fetchTodos", async () => {
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  const todoRef = firebase.firestore().collection("todos");
  const snapshot = await firebase
    .firestore()
    .collection("todos")
    .orderBy("createdAt", "desc")
    .get();
  const todos = snapshot.docs.map((doc) => ({
    id: doc.id,
    heading: doc.data().heading,
    createdAt: doc.data().createdAt.toDate().toISOString(),
  }));
  return todos ;
});

export const addTodo = createAsyncThunk(
  "tasks/addTodo",
  async (heading: string) => {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const docRef = await firebase.firestore().collection("todos").add({
      heading,
      createdAt: timestamp
    });
    return { id: docRef.id, heading, createdAt: new Date() };
  }
);

export const deleteTodo = createAsyncThunk(
  "tasks/deleteTodo",
  async (id: string) => {
    await firebase.firestore().collection("todos").doc(id).delete();
    return id;
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [] as { id: string; heading: string; createdAt: Date }[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.items = [];
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;

// export const {
//   addTodo,
//   deleteTodo,
//   getTodosStart,
//   getTodosSuccess,
//   getTodosFailure,
// } = taskSlice.actions;

// export default taskSlice.reducer;
