import { useEffect, useState } from "react";

let globalState = {};
let listners = []; 
const actions = {};

export default function useStore(){
  const setState = useState(globalState)[1]

  useEffect(() => {
    listners.push(setState);
    
    return () => {
      listners = listners.filter(listner => listner != setState)
    }
  }, [])

  function dispatch(actionIdentifier){
    const newState = actions[actionIdentifier](globalState);
    globalState = {...globalState, ...newState}
    for(const listner of listners){
      listner(globalState);
    }
  }

  return [globalState, dispatch]

}

export function intialState(userActions, globalState) {
  if(intialState){
    globalState = {...globalState, intialState}
  }
  if(userActions){
    actions = {...actions, userActions}
  }
}
