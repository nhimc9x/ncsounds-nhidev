import { useContext } from 'react'
import { NCSounds } from '~/hocks/useContext'

function PersonalHeader() {

  const { DTUser } = useContext(NCSounds)

  return (
    <div className="fixed z-20 top-0 right-0 left-0 h-14 backdrop-blur-sm bg-gradient-to-r from-[#18dcff]/90 from-45% to-[#32ff7e]/90 flex items-center px-4 justify-between">
      <div className="text-xl text-white tracking-wide">{`Hi, ${DTUser?.username}`}</div>
      <div className="flex items-center gap-4 text-white">
        <div className="hover:text-ncs-secondary-color tracking-wide cursor-pointer">Settings</div>
      </div>
    </div>
  )
}

export default PersonalHeader
