
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

export type ActionType = ReturnType<typeof UpdateCountAC> | ReturnType<typeof ResetCountAC> |
    ReturnType<typeof ErrorCountAC> |  ReturnType<typeof MaxCountAC> | ReturnType<typeof StartCountAC>

export const Reducer = (state = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "SET_COUNT":
            return {...state, count:action.count+1}
        case "RESET_COUNT":
            return {...state, count:action.count}
        case "ERROR_COUNT":
            return {...state, error:action.error } //?!action.error:action.error
        case "SET_MAX_COUNT":
            return {...state, maxValue:action.maxValue}
        case "SET_START_COUNT":
            return {...state, startValue:action.startValue}
        default:
            return state
    }
}

export const UpdateCountAC = (count: number) => ({type: "SET_COUNT", count}as const)
export const ResetCountAC = (count: number) => ({type: "RESET_COUNT", count}as const)
export const ErrorCountAC = (error: boolean) =>({type: "ERROR_COUNT", error}as const)
export const MaxCountAC = (maxValue: number) =>({type: "SET_MAX_COUNT", maxValue}as const)
export const StartCountAC = (startValue: number) =>({type: "SET_START_COUNT", startValue}as const)

