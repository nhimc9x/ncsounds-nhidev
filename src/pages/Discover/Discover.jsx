import Header from '~/components/Header/Header'
import SlideDiscover from './SlideDiscover/SlideDiscover'
import NewSongs from './NewSongs/NewSongs'
import PopularSongs from './PopularSongs/PopularSongs'
import Footer from '~/components/Footer/Footer'
import HeroBanner from './HeroBanner/HeroBanner'
import { useState } from 'react'
import mockData from '~/apis/mock_data.json'


function Discover() {
  const [dataSongs, setDataSongs] = useState([...mockData])
  return (
    <div>
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