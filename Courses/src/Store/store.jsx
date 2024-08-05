import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "../Slices/FormSlice";
import { courseReducer } from "../Slices/CourseSlice";

export const store = configureStore({
    reducer: {
        form: formReducer,
        course: courseReducer
    }
});