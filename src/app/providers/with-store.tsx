import React from 'react'

import { Provider } from 'react-redux'

import { store } from '../store'

// eslint-disable-next-line react/display-name
export const whithStore = (Component: React.ComponentType) => () =>
    (
        <Provider store={store}>
            <Component />
        </Provider>
    )
