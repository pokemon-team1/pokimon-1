import ReactPlayer from 'react-player/youtube'

import React from 'react'
const Video=()=>{
return (
    <div>
<ReactPlayer class='video'  url={[
    'https://www.youtube.com/watch?v=K8uRc81MyG8',
    'https://www.youtube.com/watch?v=VLAoUIak3-Y',
    'https://www.youtube.com/watch?v=P5f-1_Cy8HM',
    'https://www.youtube.com/watch?v=gLOne_ZaKns',
    'https://www.youtube.com/watch?v=m3Y22TqmyT8',

   
  ]}
  playing
  loop
  controls
  light
  volume={0.5}
  playIcon
  onReady
  onPause
  onStart
  onPlay
  onDuration  />
</div>

)
}
export default Video;