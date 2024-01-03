import Header from '~/components/Header/Header'
import SlideDiscover from './SlideDiscover/SlideDiscover'
import NewSongs from './NewSongs/NewSongs'
import PopularSongs from './PopularSongs/PopularSongs'
import Footer from '~/components/Footer/Footer'
import HeroBanner from './HeroBanner/HeroBanner'
import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'
import TitleManager from '~/components/TitleManager/TitleManager'

function Discover() {
  const { dataSongs } = useContext(NCSounds)

  return (
    <div>
      <TitleManager title="NCSounds" />
      <Header />
      <div className="mx-auto w-full max-w-screen-2xl">
        <HeroBanner />
        <SlideDiscover dataSongs={dataSongs} />
        <PopularSongs dataSongs={dataSongs} />
        <NewSongs dataSongs={dataSongs} />
      </div>
      <Footer />
    </div>
  )
}

export default Discover