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
  let uniqueAuthors = [...new Set(dataApis.map(data => data?.author))].splice(0, 21)
  let dataAuthor = uniqueAuthors.map(author => {
    const dataForAuthor = dataApis.find(data => data.author === author)
    return { author: author, imageUrl: dataForAuthor?.links?.images[0]?.url }
  })
  console.log(dataAuthor)
  return (
    <div className="">
      <Splide
        options={{
          type: 'loop',
          perPage: 7,
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
            },
            1536: {
              perPage: 6
            }
          },
          perMove: 1,
          gap: '0.8rem',
          height: '140px',
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
            {dataAuthor.map((data, index) =>
              (
                <SplideSlide key={index} className='slide-discover-item'>
                  <img className='slide-discover-img' src={data.imageUrl} alt={`Image ${data.author}`} />
                  <div className="slide-discover-text">{data.author}</div>
                </SplideSlide>
              )
            )}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  )
}

export default SlideDiscover
