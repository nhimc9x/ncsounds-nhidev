import giphy from '~/assets/giphy.gif'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaGooglePlusSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className="mt-8 px-2 w-full max-w-screen-2xl mx-auto text-center">
      <div className="flex items-center justify-center gap-1 mb-2">
        <div className="h-[1px] bg-ncs-secondary-color w-full mr-2"></div>
        <img className="w-10" src={giphy} alt="" />
        <div className="text-2xl tracking-wider text-ncs-active-color">NCSounds</div>
        <div className="h-[1px] bg-ncs-secondary-color w-full ml-2"></div>
      </div>
      <div className="flex justify-center items-center gap-2 mb-6">
        <a href="" className="text-gray-700 text-3xl hover:text-ncs-active-color transition-all duration-200">
          <FaFacebookSquare />
        </a>
        <a href="" className="text-gray-700 text-3xl hover:text-ncs-active-color transition-all duration-200">
          <FaGithubSquare />
        </a>
        <a href="" className="text-gray-700 text-3xl hover:text-ncs-active-color transition-all duration-200">
          <FaGooglePlusSquare />
        </a>
      </div>
      <div className="text-xs text-ncs-text-color font-light tracking-wide">
        Copyright ©2023 All rights reserved | This website is made with by
        &#10084; <a href="" className="text-ncs-active-color">Nhidev</a>
      </div>
    </div>
  )
}

export default Footer