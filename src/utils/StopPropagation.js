// Hàm ngăn chặn việc set lại bài hát khi click vào toolbox...
export const handleStopPropagation = (event) => {
  event.stopPropagation()
}
