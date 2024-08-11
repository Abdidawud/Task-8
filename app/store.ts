import { JobPostApi } from './service/jobPost'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [JobPostApi.reducerPath]: JobPostApi.reducer,
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(JobPostApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch