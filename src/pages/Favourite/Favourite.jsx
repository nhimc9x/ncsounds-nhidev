import TitleManager from '~/components/TitleManager/TitleManager'
import { handleStopPropagation } from '~/utils/StopPropagation'
import { FaPlay } from 'react-icons/fa'
import { useState, useContext, useEffect } from 'react'
import { NCSounds } from '~/hocks/useContext'
import wallpersonal from '~/assets/wallperson.jpg'
import FavouriteListSongs from './FavouriteListSongs/FavouriteListSongs'

function Favourite() {

  const { dataSongs, handlePlay, setPlayList, dataFavourite, setDataFavourite, DTFavourite } = useContext(NCSounds)

  // const [dataFavourite, setDataFavourite] = useState()

  const [myFavoriteSongs, setFavoriteSongs] = useState()

  useEffect(() => {
    setDataFavourite(DTFavourite)
  }, [DTFavourite])

  useEffect(() => {
    const songsData = dataSongs.filter(data => dataFavourite?.songs?.includes(data.id))
    setFavoriteSongs(songsData)
  }, [dataFavourite, dataSongs])

  const handlePlayMyFavourite = () => {
    setPlayList(myFavoriteSongs)
    handlePlay(myFavoriteSongs[0]?.id)
  }

  const handleDelSongFromFavourite = (event, delSongID) => {
    handleStopPropagation(event)
    const deletedSongs = dataFavourite?.songs?.filter(songsID => songsID !== delSongID)
    const updateMyPlaylist = { ...dataFavourite, songs: deletedSongs }
    setDataFavourite(updateMyPlaylist)
  }

  return (
    <div>
      <TitleManager title="NCSounds - Favourite" />
      <div className="mx-auto w-full max-w-screen-2xl overflow-hidden rounded-md">
        <div style={{ backgroundImage: `url('${wallpersonal}')` }} className="p-4 h-[400px] bg-cover bg-left-top">
          <div className="text-4xl font-medium tracking-wide text-white">
            My favourite
          </div>
        </div>

        <div className="bg-black/45 relative -top-[156px] backdrop-blur-2xl min-h-[300px] rounded-ee-md rounded-es-md">
          <div className="px-4 py-6 flex items-center border-b-2 border-gray-500">
            <div
              onClick={handlePlayMyFavourite}
              className="size-11 bg-green-600 grid place-content-center rounded-full text-sm hover:scale-105 cursor-pointer"
            >
              <FaPlay />
            </div>
            <div className="text-lg text-white ml-2 tracking-wide">Playlist</div>
          </div>

          {dataFavourite?.songs?.length === 0 ?
            (<div className="text-center font-thin pt-2 pb-6 px-2 mt-14">
              <div className="text-white">
                No songs in the Favourite
              </div>
              <div className="text-sm text-ncs-text-color">
                Add some songs to enjoy the music!
              </div>
            </div>) :
            (<FavouriteListSongs myFavoriteSongs={myFavoriteSongs} handleDelSongFromFavourite={handleDelSongFromFavourite} />)}

        </div>

      </div>
    </div>
  )
}

export default Favourite