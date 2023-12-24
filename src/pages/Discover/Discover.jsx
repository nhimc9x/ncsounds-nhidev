import Header from '~/components/Header/Header'
import SlideDiscover from './SlideDiscover/SlideDiscover'
import headphoneimg2 from '~/assets/hed.jpg'
import NewSongs from './NewSongs/NewSongs'
import PopularSongs from './PopularSongs/PopularSongs'
import Footer from '~/components/Footer/Footer'
import HeroBanner from './HeroBanner/HeroBanner'
import { useEffect, useState } from 'react'
import mockData from '~/apis/mock_data.json'


function Discover() {
  const [dataSongs, setDataSongs] = useState([...mockData])
  return (
    <div>
      <Header />
      <div className="mx-auto w-full max-w-screen-2xl">
        <HeroBanner />
        <SlideDiscover dataSongs={dataSongs} />
        <div className="mt-2 grid grid-cols-5 gap-2">
          <PopularSongs dataSongs={dataSongs} />
          <div className="col-span-5 xl:pt-8 pt-0 max-h-[320px] xl:col-span-2">
            <img
              className="h-full w-full rounded-3xl object-cover object-center"
              src={headphoneimg2}
              alt="Headphone Image"
            />
          </div>
        </div>
        <NewSongs dataSongs={dataSongs} />
      </div>
      <Footer />
    </div>
  )
}

export default Discover