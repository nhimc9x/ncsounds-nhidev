import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
// Default theme
// import '@splidejs/react-splide/css'
// or other themes
// import '@splidejs/react-splide/css/skyblue'
// import '@splidejs/react-splide/css/sea-green'
// or only core styles
import '@splidejs/react-splide/css/core'
import './SlideDiscover.css'
import { CiSquareChevRight } from 'react-icons/ci'
import { CiSquareChevLeft } from 'react-icons/ci'

function SlideDiscover({ dataApis }) {
  let avatarAuthor = [...new Set(dataApis.map(data => data?.links?.images[0]?.url))].splice(0, 21)
  return (
    <div className="">
      <Splide
        options={{
          type: 'loop',
          perPage: 6,
          breakpoints: {
            576: {
              perPage: 2
            },
            768: {
              perPage: 3
            },
            1024: {
              perPage: 4
            },
            1280: {
              perPage: 5
            }
          },
          perMove: 1,
          gap: '0.8rem',
          height: '120px',
          autoplay: true,
          speed: 1000,
          interval: 4000,
          keyboard: true,
          updateOnMove: true
        }}
        hasTrack={false} aria-label="NCS Discover Slide">
        <div className="custom-wrapper">
          <div className="splide__arrows text-right text-ncs-text-color text-4xl">
            <button className="splide__arrow--prev hover:text-white"><CiSquareChevLeft /></button>
            <button className="splide__arrow--next hover:text-white"><CiSquareChevRight /></button>
          </div>
          <SplideTrack>
            {avatarAuthor.map((data, index) =>
              (<SplideSlide key={index} className='slide-discover-item'>
                <img className='slide-discover-img' src={data} alt={`Image ${index}`} />
              </SplideSlide>)
            )}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  )
}

export default SlideDiscover
