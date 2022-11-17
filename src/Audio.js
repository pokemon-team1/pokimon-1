import ReactAudioPlayer from 'react-audio-player';
const Audio =()=>{ return(
    <ReactAudioPlayer 
    src="https://www.cjoint.com/doc/18_09/HIkpnJ4y0Fw_generique-francais-de-la-saison-1-de-pokemon.mp3"
    autoPlay
    controls
    children
    crossOrigin
    controlsList
    loop
    volume={1}
    />)
    }
    export default Audio;