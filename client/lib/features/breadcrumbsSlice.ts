import { createSlice } from '@reduxjs/toolkit'
import { BreadCrumbItem } from '../breadcrumbItem';

export const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  
  initialState: {
    value: [],
  },
  reducers: {
    changeBreadcrumb: (state, action) => {
      console.log('breadcrumb payload is :',action.payload);
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeBreadcrumb } = breadcrumbsSlice.actions

export default breadcrumbsSlice.reducer