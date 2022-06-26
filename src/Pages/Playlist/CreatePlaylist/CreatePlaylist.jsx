import React, { useState } from 'react'
import "./CreatePlaylist.css";
import { usePlaylist } from '../../../Context/PlaylistContext';

const CreatePlaylist = ({ video }) => {

    const {setStatus} = usePlaylist()
    const [input, setInput]=useState("");
    const { statePlaylist:{playlistName}, dispatchPlaylist} = usePlaylist()


    const clickHandler=()=>{
        if (!input){

        }else{
          dispatchPlaylist({type:"CREATE_PLAYLIST", payload:input})
          setInput("")
        }
    }

  return (
    <div className='playlist-main-container'>
       <div className="input-container">
        <input  value={input} onChange={((e)=>setInput(e.target.value))} className='playlist-input' type="text" placeholder='Write Playlist Name...' autoFocus />
        <div className='playlist-btn-container'>
            <button onClick={(()=> clickHandler()
            )}>Create</button>
            <button onClick={()=>setStatus(false)}>close</button>
        </div>
          {playlistName.map((playlistName)=><div>
            <div 
              className='playlist-name-text'
              
              onClick={() =>{
                 dispatchPlaylist({type:"ADD_TO_PLAYLIST", payload:{playlist:playlistName,video:video}}),setStatus(false)}                 
            }
              >
                {playlistName}
            </div>
          </div>)}
       </div>
    </div>
  )
}

export {CreatePlaylist}
