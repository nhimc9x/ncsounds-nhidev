import { LuMusic } from 'react-icons/lu'
import { FaPlay } from 'react-icons/fa'
import headphoneimg2 from '~/assets/hed.jpg'
import ncsoundImg from '~/assets/ncsound.png'
import logoNCS from '~/assets/logoNCS.png'
import Footer from '~/components/Footer/Footer'
import ListSongs from './ListSongs/ListSongs'
import dataSongs from '~/apis/mock_data.json'
import About from './About/About'
import TopSongs from './TopSongs/TopSongs'

function Songs() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl">

      <About dataApis={dataSongs} />

      <TopSongs dataApis={dataSongs} />

      <div className="">
        <div className="text-xl font-semibold tracking-wide text-white">
          Recommend
        </div>
      </div>

      <div className="">
        <div className="text-xl font-semibold tracking-wide text-white">
          All songs
        </div>
      </div>

      <ListSongs dataApis={dataSongs} />

      <div className=""></div>
      <Footer />
    </div>
  )
}

export default Songs