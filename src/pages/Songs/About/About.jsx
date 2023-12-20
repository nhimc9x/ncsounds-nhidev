import ncsoundImg from '~/assets/ncsound.png'
import logoNCS from '~/assets/logoNCS.png'

function About({ dataApis }) {
  let quantitySongs = dataApis.length
  let quantityAuthor = [...new Set(dataApis.map(data => data.author))].length

  return (
    <div className="bg-black/20 flex sm:flex-row flex-col">
      <div className="sm:w-40 sm:h-40 w-40 h-20 p-2 mx-auto">
        <img className="w-full h-full object-cover rounded-md" src={ncsoundImg} alt="" />
      </div>
      <div className="sm:p-2 sm:text-start text-center pt-0 pb-2 px-2 flex-1 flex flex-col">
        <div className="md:text-5xl text-4xl text-white font-medium">NCS Infinity</div>
        <div className="text-ncs-text-color text-sm mt-2 sm:mb-0 mb-2">
          The best NCS songs that are copyright free and safe music for gaming, live streaming, studying. Official playlist from NoCopyrightSounds.
        </div>
        <div className="text-white text-sm flex items-center sm:justify-start justify-center mt-auto pb-1 gap-1">
          <img className="h-5" src={logoNCS} alt="" />
          <div className="">
            {`NCSounds - ${quantitySongs} Songs - ${quantityAuthor} Authors.`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About