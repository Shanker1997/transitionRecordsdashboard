import { types } from "./types"

const intialstate={expensesData:[]}
export const appReducer=(state:any=intialstate,action:any={type:"",payload:""})=>{
    switch (action.type){
        case types.EXPENSES_DATA:
            return{...state,expensesData:action.payload}

            default:
                return{...state}
    }

}