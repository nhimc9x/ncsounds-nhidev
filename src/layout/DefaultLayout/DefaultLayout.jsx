import { useState } from 'react'
import AudioPlayerCustom from '~/components/AudioPlayerCustom/AudioPlayerCustom'
import SideBar from '~/components/SideBar/SideBar'
import { NCSounds } from '~/utils/Context'
import mockData from '~/apis/mock_data.json'


function DefaultLayout({ children }) {

  // lấy bài hát từ database
  const [song, setSong] = useState(null)
  const handleSetSongs = (idSong) => {
    const song = mockData.find(song => idSong === song.id)
    !song ? setSong(null) : setSong(song)
  }

  // phát bài hát
  const [idSong, setIdSong] = useState(0)
  const handlePlay = (idSong) => {
    setIdSong(idSong)
    handleSetSongs(idSong)
  }

  // Trạng thái
  const [play, setPlay] = useState(false)
  const isPlay = () => {
    setPlay(true)
  }
  const isPause = () => {
    setPlay(false)
  }

  return (
    <div className="h-screen overflow-y-auto">

      <SideBar />

      <div className="h-full overflow-y-auto bg-ncs-primary-color py-4 mdl:px-8 px-4">
        <NCSounds.Provider value={{ mockData, handlePlay, idSong, song, play, isPlay, isPause }}>
          <div className=""> {children} </div>
        </NCSounds.Provider>
      </div>

      <AudioPlayerCustom song={song} play={play} isPlay={isPlay} isPause={isPause} />
    </div>
  )
}

export default DefaultLayout