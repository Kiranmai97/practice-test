
import { AuthTypes } from "../actions/action";

const initialState = {
  usersList: [
    {
      title: 'Java',
      releaseDate: '06-16-2022',
      status: 'onProgress',
      environment: 'PRE',
    },

    {
      title: 'JavaScript',
      releaseDate: '06-16-2022',
      status: 'onProgress',
      environment: 'PRO'
    },
    {
      title: 'react',
      releaseDate: '06-16-2022',
      status: 'onProgress',
      environment:'TEST'
    }
  ]
}
// console.log("reducer")
export default function AuthReducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case "prePage": {
      console.log("prelist", action)
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      }
    }
    case "proPage":{
      console.log("prolist",action)
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      }
    }
    case "testPage": {
      console.log("testlist",action)
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      }
    }



    case "EditDetails": {
      console.log("editing", action.payload)
      return {
        ...state,
        usersList: action.payload
      }
    }

    case "delete": {
      console.log("iam reducer", action)
      return {
        ...state,
        usersList: action.data
      }
    }




    default:
      return state;

  }

}

