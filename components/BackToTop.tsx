'use client'

import { useEffect, useState } from 'react'
import { FiArrowUpCircle } from 'react-icons/fi'

const IconStyle = {
  width: '28px',
  height: '28px',
}

export default function BackToTop() {
  const [showIcon, setShowIcon] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setShowIcon(true)
    } else {
      setShowIcon(false)
    }
  }

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="hidden md:inline-block">
      {showIcon && (
        <div className="fixed bottom-6 right-6 inline-block cursor-pointer" onClick={handleToTop}>
          <FiArrowUpCircle style={IconStyle} />
        </div>
      )}
    </div>
  )
}
