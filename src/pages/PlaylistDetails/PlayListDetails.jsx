import { useEffect, useState } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'
import TitleManager from '~/components/TitleManager/TitleManager'
import { FaPlay } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import TooltipCustom from '~/components/TooltipCustom/TooltipCustom'
import Footer from '~/components/Footer/Footer'
import { handleStopPropagation } from '~/utils/StopPropagation'
import ListSongs from './ListSongs/ListSongs'

function PlayListDetails() {

  const { dataSongs, dataPlaylist, handlePlay, setPlayList, handleDelPlaylist } = useContext(NCSounds)

  const { playlistID } = useParams()

  const navigate = useNavigate()

  const [myPlaylist, setMyPlaylist] = useState()

  const [songsInMyPlaylist, setSongsInMyPlaylist] = useState()

  useEffect(() => {
    const dataMyPlaylist = dataPlaylist.find((playlist => playlist.id === playlistID))
    setMyPlaylist(dataMyPlaylist || {})
  }, [dataPlaylist, playlistID])

  useEffect(() => {
    const songsData = dataSongs.filter(data => myPlaylist?.songs?.includes(data.id))
    setSongsInMyPlaylist(songsData)
  }, [dataSongs, myPlaylist])

  const handlePlayMyList = () => {
    setPlayList(songsInMyPlaylist)
    handlePlay(songsInMyPlaylist[0]?.id)
  }

  const handleDelSongFromPlaylist = (event, delSongID) => {
    handleStopPropagation(event)
    const deletedSongs = myPlaylist?.songs?.filter(songsID => songsID !== delSongID)
    const updateMyPlaylist = { ...myPlaylist, songs: deletedSongs }
    setMyPlaylist(updateMyPlaylist)
  }

  const handleDel = (id) => {
    handleDelPlaylist(id)
    navigate('/playlist')
  }

  return (
    <>
      <TitleManager title={`NCSounds - ${myPlaylist?.title}`} />
      <div className="mx-auto w-full max-w-screen-2xl">
        <div style={{ backgroundColor: myPlaylist?.theme }} className="bg-cyan-500 sms:h-64 h-44 rounded-md sms:pt-3 pt-2">
          <div className="h-24 sms:h-40 sms:mx-3 mx-2 flex">
            <div className="sms:w-40 w-24 h-full">
              <img className="h-full w-full object-cover object-center rounded-sm" src={myPlaylist?.image} alt="" />
            </div>
            <div className="h-full flex-1 sms:p-2 p-1 flex flex-col">
              <div className="text-sm">Playlist</div>
              <div className="sms:text-5xl text-2xl text-white font-semibold tracking-wide sms:mt-2 mt-0 text-limit">{myPlaylist?.title}</div>
              <div className="mt-auto text-white">{`${myPlaylist?.songs?.length} Songs`}</div>
            </div>
          </div>
        </div>
        <div className="w-full sms:-translate-y-20 sms:-mb-20 -mb-16 -translate-y-16 bg-gray-900/70 backdrop-blur-md sms:mt-3 mt-2 rounded-br-md rounded-bl-md">
          <div className="flex justify-between items-center p-4">
            <div
              onClick={handlePlayMyList}
              className="w-10 h-10 bg-green-600 grid place-content-center rounded-full text-sm hover:scale-105 cursor-pointer"
            >
              <FaPlay />
            </div>
            <TooltipCustom decription="Delete playlist">
              <div onClick={() => handleDel(playlistID)} className="text-xl w-6 h-6 grid place-content-center text-white hover:text-red-500 cursor-pointer duration-300">
                <MdDelete />
              </div>
            </TooltipCustom>
          </div>

          {
            myPlaylist?.songs?.length === 0 ?
              (<div className="text-center font-thin pt-2 pb-6 px-2">
                <div className="text-white">
                  No songs in the playlist
                </div>
                <div className="text-sm text-ncs-text-color">
                  Add some songs to enjoy the music!
                </div>
              </div>) :
              (<ListSongs songsInMyPlaylist={songsInMyPlaylist} handleDelSongFromPlaylist={handleDelSongFromPlaylist} />)
          }

        </div>
      </div>
      <Footer />
    </>
  )
}

export default PlayListDetails