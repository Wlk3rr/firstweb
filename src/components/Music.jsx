import  AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import "../Style/Music.css"
const Music = ({src}) => {
  return (
<AudioPlayer   
src={src} 
showDownloadProgress={false} 
customAdditionalControls={[]}
showFilledProgress = {false}
customVolumeControls={[]} 
showJumpControls = {true}
header = {null}
footer = {null}
>


</AudioPlayer>
  )
}

export default Music