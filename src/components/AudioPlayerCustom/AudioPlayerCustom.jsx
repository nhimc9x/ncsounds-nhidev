import AudioPlayer from 'react-h5-audio-player'
import { MdOutlineDragHandle } from 'react-icons/md'
import { useEffect, useState, useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'
import 'react-h5-audio-player/lib/styles.css'
import './AudioPlayerCustom.css'

function AudioPlayerCustom() {
  const { song, handlePlay, idSong, play, setPlay, playList } = useContext(NCSounds)

  // Ẩn hiện thanh player
  const [showPlayer, setShowPlayer] = useState(true)
  useEffect(() => { !song || setShowPlayer(false) }, [song])
  const handleClick = () => {
    setShowPlayer(!showPlayer)
  }

  // Phát/Dừng nhạc
  const isPlay = () => {
    setPlay(true)
  }
  const isPause = () => {
    setPlay(false)
  }

  const currentSongIndex = playList.findIndex(song => song.id === idSong)

  // Next bài hát
  const handleNextSong = () => {
    const nextSongIndex = (currentSongIndex + 1) % playList.length
    handlePlay(playList[nextSongIndex].id)
  }

  // Previous bài hát
  const handlePreviousSong = () => {
    const nextSongIndex = (currentSongIndex - 1) % playList.length
    handlePlay(playList[nextSongIndex].id)
  }

  return (
    <div style={{ bottom: showPlayer && '-56px' }} className="transition-all duration-500 drop-shadow-md fixed bottom-0 bg-[#0f172a] bg-opacity-80 backdrop-blur-md left-0 right-0 z-[9999] group">
      <div onClick={handleClick} className="absolute w-10 h-6 bottom-full left-4 overflow-hidden cursor-pointer">
        <div className="h-full text-ncs-active-color grid place-content-center text-2xl w-full border-b border-ncs-active-color bg-[#0f172a] tamgiac translate-y-3 group-hover:translate-y-0 transition-all duration-500">
          <MdOutlineDragHandle className="relative top-1" />
        </div>
      </div>
      <AudioPlayer
        className="h-14 bg-transparent"
        src={song?.url}
        layout="horizontal-reverse"
        showSkipControls={true}
        showJumpControls={false}
        customVolumeControls={[]}
        onPlay={isPlay}
        onPause={isPause}
        onClickNext={handleNextSong}
        onClickPrevious={handlePreviousSong}
        onEnded={handleNextSong}
        customAdditionalControls={[
          <div key={1} className="flex items-center gap-2 w-full">
            <div className="">
              <img
                className={`h-[36px] w-[36px] rounded-full object-cover object-center ${play && 'animate-playing'} `}
                src={song?.links?.images[1]?.url || 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'}
                alt=""
              />
            </div>
            <div className="sm:block hidden text-sm text-white text-limit flex-1 pr-4">{song?.name}</div>
          </div>
        ]}
      />
    </div>
  )
}

export default AudioPlayerCustom