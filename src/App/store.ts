import { configureStore } from '@reduxjs/toolkit'
import {apiRickAndMorty} from '../components/model/apiRickAndMorty.ts';
// ...

export const store = configureStore({
    reducer: {
     [apiRickAndMorty.reducerPath]: apiRickAndMorty.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiRickAndMorty.middleware)
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store