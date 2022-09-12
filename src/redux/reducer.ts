
export type InitialStateType = {
    //intermediateMaxValue:number
   // intermediateStartValue:number
    startValue:number
    maxValue:number
    count:number
    error:boolean
}

export const initialState: InitialStateType = {
   // intermediateMaxValue:5,
   // intermediateStartValue:0,
    startValue:0,
    maxValue:5,
    count:0,
    error:false,
}

export type ActionType = ReturnType<typeof UpdateCountAC> | ReturnType<typeof ResetCountAC>

export const Reducer = (state = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "SET_COUNT":
            return {...state, count:action.count+1}
        case "RESET_COUNT":
            return {...state, count:action.count}
        default:
            return state
    }
}

export const UpdateCountAC = (count: number) => ({type: "SET_COUNT", count})
export const ResetCountAC = (count: number) => ({type: "RESET_COUNT", count})
