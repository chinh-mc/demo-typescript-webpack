import { AppReducer } from "@/App/App.reducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  app: AppReducer
})

export default rootReducer
