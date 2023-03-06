import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ContentType = 'createBoard'

const initialState = {
    isOpen: false as boolean,
    contentType: null as ContentType | null,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ContentType>) => {
            state.isOpen = true
            state.contentType = action.payload
        },
        closeModal: (state) => {
            state.isOpen = false
            state.contentType = null
        },
    },
})

export const { openModal, closeModal } = modalSlice.actions
