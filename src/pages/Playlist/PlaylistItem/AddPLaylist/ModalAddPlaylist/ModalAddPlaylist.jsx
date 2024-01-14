import { IoCloseOutline } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi'
import { useEffect, useRef, useState, useContext } from 'react'
import { env } from '~/config/environment'
import { generateShortId } from '~/utils/generateShortId'
import { NCSounds } from '~/hocks/useContext'
import Loading from '~/components/Loading/Loading'

const THEME_COLOR = [
  {
    id: 1,
    color: '#10b981'
  },
  {
    id: 2,
    color: '#ec4899'
  },
  {
    id: 3,
    color: '#06b6d4'
  }
]

function ModalAddPlaylist({ setShowModal }) {

  const { dataPlaylist, setDataPlaylist } = useContext(NCSounds)

  const [loading, setLoading] = useState(false)

  const handleHideModal = () => {
    setShowModal(false)
  }

  const [imgUpload, setImgUpload] = useState(null)
  useEffect(() => {
    return (() => {
      imgUpload && URL.revokeObjectURL(imgUpload.preview)
    })
  }, [imgUpload])
  const handleCreateImage = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setImgUpload(file)
  }

  const inputNameRef = useRef()

  const [colorTheme, setColorTheme] = useState()

  let IMAGE_UPLOADED = null

  const handleSubmit = async () => {
    // console.log('Link ảnh: ', imgUpload?.preview)
    // console.log('Tên playlist: ', inputNameRef.current.value)
    // console.log('Màu theme: ', colorTheme)
    setLoading(true)
    handlUpLoadImg()
  }

  const handlUpLoadImg = async () => {
    if (imgUpload) {
      const formData = new FormData()
      formData.append('file', imgUpload)
      formData.append('upload_preset', env.UPLOAD_PRESET)
      await fetch(`https://api.cloudinary.com/v1_1/${env.CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          IMAGE_UPLOADED = data.secure_url
          console.log('Image URL:', IMAGE_UPLOADED)
        })
        .catch(error => { console.error('Error uploading file: ', error) })
    }

    // Test thêm data
    await setDataPlaylist([...dataPlaylist, {
      id: generateShortId(),
      image: IMAGE_UPLOADED,
      title: inputNameRef.current.value ? inputNameRef.current.value : 'Playlist #1',
      slug: 'toi-la-cho',
      theme: colorTheme,
      songs: []
    }])

    setLoading(false)
    handleHideModal()
  }

  return (
    <div className="bg-black/50 fixed top-0 right-0 left-0 bottom-0">
      { loading && <Loading />}
      <div className="bg-ncs-primary-color sms:w-[500px] h-max py-1 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-md">
        <div className="flex justify-between p-4">
          <div className="text-3xl text-white">Create a new playlist</div>
          <div
            onClick={handleHideModal}
            className="text-3xl text-white w-10 h-10 grid place-content-center hover:bg-ncs-secondary-color rounded-full"
          >
            <IoCloseOutline />
          </div>
        </div>
        <div className="flex xs:h-40 h-max gap-4 px-8 xs:flex-row flex-col">
          <div className="bg-ncs-secondary-color xs:w-40 w-full h-40 rounded-md overflow-hidden relative group">
            {imgUpload && (<img className="w-full h-full object-cover object-center group-hover:opacity-10" src={imgUpload.preview} alt="Playlist Image" />)}
            <div style={{ display: !imgUpload && 'block' }} className="absolute top-0 left-0 right-0 bottom-0 hidden group-hover:block">
              <label htmlFor="img-upload" className="w-full h-full text-6xl grid place-content-center text-ncs-text-color cursor-pointer">
                <FiEdit className="group-hover:text-ncs-active-color duration-200" />
                <input onChange={handleCreateImage} type="file" name="img-upload" id="img-upload" accept="image/*" hidden />
              </label>
            </div>
          </div>
          <div className="grid grid-rows-2 flex-1">
            <div className="">
              <input ref={inputNameRef} className="w-full bg-ncs-secondary-color text-white outline-none font-light px-4 py-2" type="text" placeholder="PLaylist name" />
            </div>
            <div className="">
              <div className="text-ncs-text-color">Set color theme</div>
              <div className="flex justify-center gap-6 mt-2 *:w-10 *:h-10 *:rounded-full *:cursor-pointer *:border-white">
                {THEME_COLOR.map(data => (
                  <label key={data.id} style={{ backgroundColor: data.color }} htmlFor={`theme-id--${data.id}`} className="has-[:checked]:border-[3px]">
                    <input onChange={() => setColorTheme(data.color)} type="radio" hidden name="theme-color" id={`theme-id--${data.id}`} />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <div onClick={handleSubmit} className="select-none bg-ncs-active-color px-3 py-1 rounded-md cursor-pointer font-semibold duration-200 hover:bg-gray-500 hover:text-ncs-active-color">Create</div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddPlaylist