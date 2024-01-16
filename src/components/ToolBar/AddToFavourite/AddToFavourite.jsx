import TooltipCustom from '~/components/TooltipCustom/TooltipCustom'
import { GoHeartFill } from 'react-icons/go'
import { useContext, useEffect, useState } from 'react'
import { NCSounds } from '~/hocks/useContext'

function AddToFavourite({ IDSong }) {

  const { DTFavourite } = useContext(NCSounds)

  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (DTFavourite?.songs.includes(IDSong)) {
      setAdded(true)
    }
  }, [DTFavourite, IDSong])

  const handleAddToFavourite = () => {
    setAdded(!added)
    if (DTFavourite?.songs.includes(IDSong)) {
      DTFavourite?.songs.splice(DTFavourite?.songs.indexOf(IDSong), 1)
    } else {
      DTFavourite?.songs.push(IDSong)
    }
  }

  return (
    <TooltipCustom decription="Add to favourite">
      <div
        onClick={handleAddToFavourite}
        className="sms:flex hidden h-7 w-7 hover:bg-ncs-primary-color rounded-full justify-center items-center"
      >
        <GoHeartFill color={added ? '#f472b6' : ''} />
      </div>
    </TooltipCustom>
  )
}

export default AddToFavourite