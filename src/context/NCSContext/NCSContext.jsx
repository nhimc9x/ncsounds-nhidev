import { useState, useEffect } from 'react'
import { NCSounds } from '~/hocks/useContext'
import dataSongs from '~/apis/mock_data.json'
import dataUser from '~/apis/user.json'


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

  // Danh đang phát sách phát
  const [playList, setPlayList] = useState([...dataSongs])

  const USER_ID = 1

  // Lấy dữ liệu playlist của user (VD: user có id là 1)
  const DTPLaylist = dataUser.filter((data) => data._id === USER_ID)[0]?.playlist
  const [dataPlaylist, setDataPlaylist] = useState(DTPLaylist)

  const handleDelPlaylist = (playlistID) => {
    const updatedPlaylist = dataPlaylist.filter(item => item.id !== playlistID)
    setDataPlaylist(updatedPlaylist)
  }

  // Lấy dữ liệu Favourite của user (VD: user có id là 1)
  const DTFavourite = dataUser.filter((data) => data._id === USER_ID)[0]?.favourite
  const [dataFavourite, setDataFavourite] = useState()

  // Lấy thông tin người dùng (VD: user có id là 1)
  const DTUser = dataUser.filter((data) => data._id === USER_ID)[0]

  // Set màu theme playlist
  // const THEME_COLOR = {
  //   blue: '',
  //   pink: '',
  //   green: ''
  // }

  return (
    <NCSounds.Provider
      value={{ dataSongs, song, handlePlay, idSong, setIdSong, play, setPlay, playList, setPlayList, dataPlaylist, setDataPlaylist, handleDelPlaylist, dataFavourite, setDataFavourite, DTFavourite, DTUser }}
    >
      {children}
    </NCSounds.Provider>
  )
}

export default NCSContext