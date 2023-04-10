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

