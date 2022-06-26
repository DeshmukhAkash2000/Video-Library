import { useContext, createContext, useReducer } from "react";


const WatchLaterContext = createContext();
const useWatchlater = () => useContext(WatchLaterContext);

const WatchlaterProvider = ({ children }) => {
  const WatchLaterReducer =(state, action) =>{

    switch(action.type){
      case "ADD_TO_WATCHLATER":
        return {...state, watchlater:[...state.watchlater, action.payload]};

      case "REMOVE_FROM_WATCHLATER":
        const newWatchlater = state.watchlater.filter(item => item.id !== action.payload.id)
        return{...state, watchlater:newWatchlater};

      case "ADD_TO_LIKE":
        return {...state, likeVideo:[...state.likeVideo, action.payload]};

      case "REMOVE_FROM_LIKE":
        const newLikeVideo = state.likeVideo.filter(item => item.id !== action.payload.id);
        return {...state, likeVideo:newLikeVideo}

      
      default:
        return state

    }
  }

  const [stateWatchlater, dispatchWatchlater] = useReducer(WatchLaterReducer, {
    watchlater:[],
    likeVideo:[]
  })
  
  return(
    <WatchLaterContext.Provider value={{stateWatchlater, dispatchWatchlater}}>
      {children}
    </WatchLaterContext.Provider>
  )

}

export { WatchlaterProvider, useWatchlater };