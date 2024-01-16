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
    <div
      onClick={handleAddToFavourite}
      className="flex items-center gap-2 px-2 py-[2px] hover:bg-zinc-700 cursor-pointer"
    >
      <div className="text-sm">
        <GoHeartFill color={added ? '#f472b6' : ''}/>
      </div>
      <div className="text-xs whitespace-nowrap">Add to favourite</div>
    </div>
  )
}

export default AddToFavourite