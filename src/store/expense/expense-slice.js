import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    income: "",
    exponseList: [],
    number: 1,
  },
  reducers: {
    addExpense: (state, action) => {
      state.exponseList.push(action.payload);
    },
    setIncome: (state, action) => {
      state.income = action.payload;
    },
  },
});

export const { addExpense, setIncome } = expenseSlice.actions;
export default expenseSlice.reducer;
