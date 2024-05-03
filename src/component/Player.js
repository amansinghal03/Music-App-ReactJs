import React ,{ useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

const Player =({currentSong, isPlaying,setIsPlaying ,audioRef,setSongInfo,songInfo,songs, Song,setCurrentSong , setSongs})=>{

    // console.log("the current song is " ,currentSong.audio)
 

    useEffect(()=>{
        const newSongs =songs.map((song)=>{
            // console.log("The current id is ",currentSong.id)
            // console.log("The song id is ",song.id)
            if (song.id ===currentSong.id){
                return{
                    ...song,
                    active:true,
                };
            }else{
                return{
                    ...song,
                    active:false,
                };
            }
        })
        console.log("the forward song id",newSongs)
        setSongs(newSongs);
    },[currentSong])

    const playSongHandler=()=>{
        if(isPlaying){
            console.log("roted of image")

            audioRef.current.pause();

            setIsPlaying(!isPlaying);
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
        // console.log(audioRef.current)
        // audioRef.current.play()
    }

 
    const getTime=(time)=>{
        return (
            Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
        )
    }

    const dragHandler=(event)=>{
        audioRef.current.currentTime= event.target.value;
        setSongInfo({...songInfo,currentTime:event.target.value});
        // console.log(event.target.value);
    }

    const skipHandler=(direction)=>{
        // console.log("click ")
        let currentIndex = songs.findIndex((Song)=> Song.id===currentSong.id);
        console.log("The current index is : ",currentIndex)

        if (direction ==='skip-forward'){
            setCurrentSong(songs[(currentIndex+1) % songs.length ]);
            // console.log("clicking the object");
        }

        if (direction ==='skip-back'){
            if((currentIndex-1) % songs.length=== -1 ){
            setCurrentSong(songs[songs.length-1])
            return;
            // console.log("clicking the object");
        }
        setCurrentSong(songs[(currentIndex-1) % songs.length ]);
    }


            console.log("there is no onbject");
        // else{
        // }

    }


    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">

                <FontAwesomeIcon onClick={()=> skipHandler("skip-back")} className="skip-back" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay}  />
                <FontAwesomeIcon onClick={()=> skipHandler("skip-forward")} className="skip-forward" icon={faAngleRight}/>

            </div>

          

        </div>
    );
};
export default Player;