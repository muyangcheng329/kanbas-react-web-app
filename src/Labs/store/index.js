import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";
import modulesReducer from "../../Kanbas/Courses/Modules/modulesReducer";

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer, 
    addReducer,
    todosReducer,
    modulesReducer,
  },
});
export default store;