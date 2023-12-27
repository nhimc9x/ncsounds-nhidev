import Header from '~/components/Header/Header'
import SlideDiscover from './SlideDiscover/SlideDiscover'
import NewSongs from './NewSongs/NewSongs'
import PopularSongs from './PopularSongs/PopularSongs'
import Footer from '~/components/Footer/Footer'
import HeroBanner from './HeroBanner/HeroBanner'
import { useContext } from 'react'
import { NCSounds } from '~/utils/Context'


function Discover() {
  const { mockData } = useContext(NCSounds)

  return (
    <div>
      <Header />
      <div className="mx-auto w-full max-w-screen-2xl">
        <HeroBanner />
        <SlideDiscover dataSongs={mockData} />
        <PopularSongs dataSongs={mockData} />
        <NewSongs dataSongs={mockData} />
      </div>
      <Footer />
    </div>
  )
}

export default Discover