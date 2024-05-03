import Song from "./component/Song";
import Player from "./component/Player";
import './styles/app.scss';
import data from "./utils";
import { useState,useRef } from "react";
import Library from "./component/Library";
import Nav from "./component/nav";

function App() {

  const [songs,setSongs] = useState(data());

  const [currentSong,setCurrentSong] = useState(songs[0]);

  const [isPlaying,setIsPlaying] = useState(false);

  const[libraryStatus, setLibraryStatus]=useState(false)

  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime : null,
    duration : null,
})

const timeUpdateHandler=(event)=>{

  const current = event.target.currentTime
  console.log("the current time is", current)

  const duration = event.target.duration
  console.log("the current time duration is", duration)
  setSongInfo({ currentTime:current, duration:duration})

}

  // console.log("the song is ", currentSong.artist)
  return (
    <div className="App">
    
    <h1>Music Player</h1>
    <Nav libraryStatus={libraryStatus} setLibraryStatus= {setLibraryStatus}/>

    <Song currentSong={currentSong} isPlaying={isPlaying}/>
    <Player isPlaying={isPlaying} 
    setIsPlaying={setIsPlaying}
    currentSong={currentSong}
    audioRef={audioRef}
    setSongInfo={setSongInfo}
    songInfo={songInfo}
    songs={songs}
    Song={Song}
    setCurrentSong={setCurrentSong}
    setSongs={setSongs}
       />

    <Library songs= {songs} 
    setCurrentSong={setCurrentSong}
    audioRef={audioRef}
    isPlaying={isPlaying}
    setSongs={setSongs}
    libraryStatus={libraryStatus}
    setLibraryStatus={setLibraryStatus}
    />
      <audio 
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
             ref={audioRef}
              src={currentSong.audio}>

              </audio>
    </div>
  );
}

export default App;
