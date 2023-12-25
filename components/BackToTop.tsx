'use client'

import { useEffect, useState } from 'react'
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi'

const IconStyle = {
  width: '28px',
  height: '28px',
}

export default function BackToTop() {
  const [showIcon, setShowIcon] = useState<boolean>(false)
  const [showBtIcon, setShowBtIcon] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setShowIcon(true)
    } else {
      setShowIcon(false)
    }
    if (
      document.documentElement.scrollHeight - document.documentElement.clientHeight <=
      document.documentElement.scrollTop + 1
    ) {
      setShowBtIcon(false)
    } else {
      setShowBtIcon(true)
    }
  }

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
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
        <div className="fixed bottom-6 right-6 inline-block">
          <div onClick={handleToTop} className="mt-2 cursor-pointer">
            <FiArrowUpCircle style={IconStyle} />
          </div>
          {showBtIcon && (
            <div className="mt-2 cursor-pointer" onClick={handleToBottom}>
              <FiArrowDownCircle style={IconStyle} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
