import { FcMusic } from 'react-icons/fc'


function Loading() {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-ncs-primary-color z-[1000] grid place-content-center">
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 text-ncs-active-color text-3xl animate-spin border-ncs-secondary-color flex items-center justify-center border-t-ncs-active-color rounded-full">
          <FcMusic className="animate-ping" />
        </div>
      </div>
    </div>
  )
}

export default Loading