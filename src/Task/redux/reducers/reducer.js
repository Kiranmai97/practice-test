
import { AuthTypes } from "../actions/action";

const initialState = {
  usersPreList: [],
  usersTestList:[],
  usersProList:[]
  
}
// console.log("reducer")
export default function AuthReducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case "prePage": {
      return {
        ...state,
        usersPreList: [...state.usersPreList, state.usersPreList=action.payload],
      }
    }
  
    case "proPage":{
      console.log("prolist",action)
      return {
        ...state,
        usersProList: [...state.usersProList, state.usersProList=action.payload],
      }
    }
    case "testPage": {
      console.log("testlist",action)
      return {
        ...state,
        usersTestList: [...state.usersTestList, state.usersTestList=action.payload],
      }
    }



    // case "EditDetails": {
    //   console.log("editing", action.payload)
    //   return {
    //     ...state,
    //     usersList: action.payload
    //   }
    // }

    // case "delete": {
    //   console.log("iam reducer", action)
    //   return {
    //     ...state,
    //     usersList: action.data
    //   }
    // }




    default:
      return state;

  }

}

