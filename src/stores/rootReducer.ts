import { combineReducers, createAction } from "@reduxjs/toolkit"

const combinedReducer = combineReducers({
    //reducers from slice
})

export const storeReset = createAction('store/reset')

const rootReducer = (state: any, action: any) => {
    if (action.type === storeReset.toString()) {
        state = undefined
    }
    return combinedReducer(state, action)
}

export default rootReducer