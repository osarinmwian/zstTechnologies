export interface State {
    data: {
      list: Task[]; // replace string with the type of your task object
      total: number;
    };
    loading: "loading" | "pending" | "succeeded" | "failed";
  }
  export interface Task {
    // Define the shape of your task object
  }
  
 export  interface AddTaskAction {
    type: string;
    payload: Task;
  }