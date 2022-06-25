import { useContext, createContext, useState, useReducer } from "react";

const PlaylistContext = createContext();

const usePlaylist = () => useContext(PlaylistContext);

const PlaylistProvider = ({children}) => {
    const [status, setStatus] = useState(false);

    const playlistReducer = (state, action) =>{
        switch(action.type){
            case "CREATE_PLAYLIST":
                if (!state.playlistName.includes(action.payload)) {
                    return{...state, playlistName:[...state.playlistName,action.payload]};
                }
                return state ;
                
            case "ADD_TO_PLAYLIST":

                const addVideo = state.playLists.map(item => {
                        if(item.name === action.payload.playlist ) {
                           return {...item,videos:[...item.videos,action.payload.video]}
                        }
                        return item ;
                    })
                let playlistVideos = state.playLists.some(item => item.name === action.payload.playlist);
                if (!playlistVideos) {
                    return{...state,playLists:[...state.playLists,{name:action.payload.playlist,videos:[action.payload.video]}]}
                }
                return{...state,playLists:[...addVideo]};
                
            case "REMOVE_FROM_PLAYLIST":
                const newPlaylist = state.playLists.map(item => {
                    if(item.id !== action.payload.playList) {
                        return{...item,videos:item.videos.filter(item => item.id !== action.payload.videoId)}
                    }
                    return item ;
                }
                    );
                return {...state,playLists:newPlaylist};
                
            case "REMOVE_PLAYLIST":
                const mainNewPlaylist = state.playlistName.filter(item => item.id !== action.payload.id);
                return {...state, playlistName:mainNewPlaylist}      
            }

    }

    const [statePlaylist, dispatchPlaylist] = useReducer(playlistReducer, {
        playlistName:[],
        playLists:[],
    })

    return (
        <PlaylistContext.Provider value={{status, setStatus, statePlaylist, dispatchPlaylist}}>
            {children}
        </PlaylistContext.Provider>
    )
}

export {usePlaylist, PlaylistProvider}
