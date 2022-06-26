import { useContext, createContext, useReducer } from "react";

const HistoryContext = createContext();
const useHistory = () => useContext(HistoryContext);

const HistoryProvider =({children})=>{
    const HistoryReducer = (state, action)=>{
        switch(action.type){
            case "ADD_TO_HISTORY":
                return{...state, history:[...state.history, action.payload]};
            
            case "REMOVE_FROM_HISTORY":
                const newHistory = state.history.filter(item => item.id !== action.payload.id);
                return {...state, history:newHistory}
                

            case "CLEAR_HISTORY":
                return {...state, history:[]}

            default:
                return state

        }
    }

    const [stateHistory, dispatchHisory] = useReducer(HistoryReducer, {
        history:[]
    });

    return(
        <HistoryContext.Provider value={{stateHistory, dispatchHisory}} >
            {children}
        </HistoryContext.Provider>
    )
}

export{useHistory, HistoryProvider}