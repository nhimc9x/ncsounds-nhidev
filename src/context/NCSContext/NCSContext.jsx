import { useState, useEffect } from 'react'
import { NCSounds } from '~/hocks/useContext'
import dataSongs from '~/apis/mock_data.json'

function NCSContext({ children }) {

  // Test gọi APIs
  // const [dataSongs, setDataSongs] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await import('~/apis/mock_data.json')
  //       setDataSongs(response.default)
  //     } catch (error) {
  //       console.error('Error fetching data: ', error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // lấy 1 dữ liệu bài hát từ database
  const [song, setSong] = useState(null)
  const handleSetSongs = (idSong) => {
    const song = dataSongs.find(song => idSong === song.id)
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
  const [playList, setPlayList] = useState([...dataSongs])
  return (
    <NCSounds.Provider value={{ dataSongs, song, handlePlay, idSong, setIdSong, play, setPlay, playList, setPlayList }}>
      {children}
    </NCSounds.Provider>
  )
}

export default NCSContext