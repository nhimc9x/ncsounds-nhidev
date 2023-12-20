function TooltipCustom({ children, decription }) {
  return (
    <div className="relative group/tool z-[999]">
      {children}
      <div className="hidden select-none group-hover/tool:block w-max bg-zinc-800 py-1 px-2 rounded-sm absolute right-1/2 translate-x-1/2 -top-full text-ncs-text-color leading-3 text-[10px]">
        <div className="">{decription}</div>
        <div className="absolute -bottom-[6px] right-1/2 translate-x-1/2 border-t-8 border-l-8 border-r-8 border-t-zinc-800 border-l-transparent border-r-transparent"></div>
      </div>
    </div>
  )
}

export default TooltipCustom