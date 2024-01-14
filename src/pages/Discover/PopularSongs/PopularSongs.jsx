import { FaPlay } from 'react-icons/fa'
import headphoneimg2 from '~/assets/hed.jpg'
import introNCS from '~/assets/NCSoundsIntro.mp4'
import ToolBoxCustom from '~/components/ToolBoxCustom/ToolBoxCustom'
import giphy from '~/assets/giphy.gif'

import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'

function PopularSongs({ dataSongs }) {
  const { handlePlay, idSong } = useContext(NCSounds)

  let clonedSongs = [...dataSongs]
  // Lấy 5 bài hát có số views cao nhất
  let dataPupolarSongs = [...clonedSongs.sort((a, b) => b.views - a.views)].splice(0, 5)

  return (
    <div className="mt-2 grid grid-cols-5 gap-2">
      <div className="col-span-5 xl:col-span-3">
        <div className="text-xl font-semibold tracking-wide text-white">
          Popular songs
        </div>
        <div className="p-2 xl:px-4 2xl:px-8">
          {dataPupolarSongs.map((data, index) => (
            <div
              key={index}
              onClick={() => handlePlay(data.id)}
              className="cursor-pointer my-2 flex h-[44px] items-center rounded-lg bg-ncs-secondary-color px-4 group"
            >
              <div className="relative overflow-hidden">
                <img
                  className="h-[36px] w-[36px] rounded-full object-cover object-center"
                  src={data?.links?.images[1]?.url}
                  alt=""
                />
                <div style={{ display: idSong === data?.id && 'block' }} className="absolute hidden -top-1.5 -bottom-1.5 -right-1.5 -left-1.5">
                  <img src={giphy} alt="" />
                </div>
              </div>
              <div className="ml-2 text-sm text-white text-limit flex-1">{data.name}</div>
              <div className="ml-auto mr-3 hidden text-ncs-text-color text-sm sm:block">
                {data.author}
              </div>
              <ToolBoxCustom sx="ml-auto sm:ml-0" linkDownload={data.url} IDSong={data.id} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-5 xl:pt-8 pt-0 max-h-[306px] xl:col-span-2">
        {/* <img
          className="h-full w-full rounded-3xl object-cover object-center"
          src={headphoneimg2}
          alt="Headphone Image"
        /> */}
        <video loop autoPlay muted className="h-full w-full rounded-3xl object-cover object-center" src={introNCS}></video>
      </div>

    </div>
  )
}

export default PopularSongs