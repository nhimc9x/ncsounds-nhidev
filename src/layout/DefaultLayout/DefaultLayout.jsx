import { useState } from 'react'
import AudioPlayerCustom from '~/components/AudioPlayerCustom/AudioPlayerCustom'
import SideBar from '~/components/SideBar/SideBar'
import { NCSounds } from '~/utils/Context'
import mockData from '~/apis/mock_data.json'


function DefaultLayout({ children }) {

  // lấy dữ liệu bài hát từ database
  const [song, setSong] = useState(null)
  const handleSetSongs = (idSong) => {
    const song = mockData.find(song => idSong === song.id)
    !song ? setSong(null) : setSong(song)
  }

  // Set id bài hát đang phát
  const [idSong, setIdSong] = useState(null)
  const handlePlay = (id) => {
    setIdSong(id)
    handleSetSongs(id)
  }

  // Trạng thái
  const [play, setPlay] = useState(false)

  // Danh sách phát
  const [playList, setPlayList] = useState([...mockData])

  return (
    <NCSounds.Provider value={{ mockData, song, handlePlay, idSong, setIdSong, play, setPlay, playList, setPlayList }}>
      <div className="h-screen overflow-y-auto">

        <SideBar />

        <div id='ncs_content' className="h-full overflow-y-auto bg-ncs-primary-color py-4 mdl:px-8 px-4">
          <div className=""> {children} </div>
        </div>

        <AudioPlayerCustom />
      </div>
    </NCSounds.Provider>

  )
}
export default DefaultLayout