import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "../../../config/index";

export const fetchTodos = createAsyncThunk("tasks/fetchTodos", async () => {
  const snapshot = await firebase
    .firestore()
    .collection("todos")
    .orderBy("createdAt", "desc")
    .get();
    const todos = snapshot.docs.map((doc) => ({
      id: doc.id,
      heading: doc.data().heading,
      createdAt: doc.data().createdAt.toDate().toISOString(),
      completed: doc.data().completed // <-- add this line
  }));
  return todos ;
});

export const addTodo = createAsyncThunk(
  "tasks/addTodo",
  async (heading: string) => {
    const docRef = await firebase.firestore().collection("todos").add({
      heading,
    });

    return { 
      id: docRef.id, 
      heading,  
    };

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
items: [] as {
  completed: unknown; id: string; heading: string; createdAt: Date | undefined
}[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.items = [];
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload.map((todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
      })
      
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push({
          ...action.payload,
          completed: undefined,
          createdAt: undefined
        });
      })
       .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
  
});

export default tasksSlice.reducer;

