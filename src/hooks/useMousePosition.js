import { useEffect, useState } from 'react'

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.addEventListener('mousemove', (e => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    }))
  }, [])

  return (
    position
  )
}

export default useMousePosition