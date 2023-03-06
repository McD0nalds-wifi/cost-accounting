import { configureStore } from '@reduxjs/toolkit'

import { modalSlice } from '../../entities/modals-routing'
import { APP_REDUCER_PATH, appApi } from './appApi'

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),
    reducer: {
        [modalSlice.name]: modalSlice.reducer,
        [APP_REDUCER_PATH]: appApi.reducer,
    },
})
