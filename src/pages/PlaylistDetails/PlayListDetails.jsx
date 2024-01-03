import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'
import TitleManager from '~/components/TitleManager/TitleManager'

function PlayListDetails() {
  const { dataPlaylist } = useContext(NCSounds)

  const { playlistID } = useParams()

  const [myPlaylist, setMyPlaylist] = useState()

  useEffect(() => {
    const dataMyPlaylist = dataPlaylist.find((playlist => playlist.id === playlistID))
    setMyPlaylist(dataMyPlaylist || {})
  }, [playlistID])

  return (
    <>
      <TitleManager title={`NCSounds - ${myPlaylist?.title}`} />
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="bg-cyan-500/70 sms:h-64 h-44 rounded-md sms:pt-3 pt-2">
          <div className="h-24 sms:h-40 sms:mx-3 mx-2 flex">
            <div className="sms:w-40 w-24 h-full">
              <img className="h-full w-full object-cover object-center rounded-sm" src={myPlaylist?.image} alt="" />
            </div>
            <div className="h-full flex-1 sms:p-2 p-1 flex flex-col">
              <div className="text-sm">Playlist</div>
              <div className="sms:text-5xl text-2xl text-white font-semibold tracking-wide sms:mt-2 mt-0 text-limit">{myPlaylist?.title}</div>
              <div className="mt-auto text-white">32 Songs</div>
            </div>
          </div>
          <div className="w-full bg-gray-900/70 backdrop-blur-md h-full sms:mt-3 mt-2"></div>
        </div>
      </div>
    </>
  )
}

export default PlayListDetails