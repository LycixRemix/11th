'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LuAlignRight, LuX } from 'react-icons/lu'

const IconStyle = {
  width: '26px',
  height: '26px',
  color: '#F6F6F6',
}

export default function Menu({ className }: { className?: string }) {
  const pathname = usePathname()

  const [active, setActive] = useState<boolean>(false)

  const menuItems = [
    {
      name: '首页',
      path: '/',
    },
    {
      name: '关于',
      path: '/about',
    },
    {
      name: '友链',
      path: '/friends',
    },
    {
      name: '图库',
      path: '',
    },
    {
      name: '书籍',
      path: '/books',
    },
  ]

  useEffect(() => {
    if (active) {
      setActive(false)
    }
  }, [pathname])

  return (
    <div className={className}>
      <div className="relative inline-block text-left">
        <div className="text-3xls cursor-pointer" onClick={() => setActive(!active)}>
          {active ? <LuX style={IconStyle} /> : <LuAlignRight style={IconStyle} />}
        </div>

        {active && (
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="none">
              {menuItems.map((menu) => {
                return (
                  <Link
                    href={menu.path}
                    key={menu.name}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f3f4f6]"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    {menu.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
