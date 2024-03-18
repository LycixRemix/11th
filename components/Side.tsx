import Image from 'next/image'
import Link from 'next/link'
import { SiBilibili, SiGithub, SiGmail, SiTwitter } from 'react-icons/si'
import { random } from '@/utils'
import Menu from './Menu'

const IconStyle = {
  width: '24px',
  height: '24px',
}

const VScreenImgs = ['wallhaven-m3v8m1.jpg', 'wallhaven-zy92jw.jpg']
const HScreenImgs = ['wallhaven-5gjyq9.jpg', 'wallhaven-9dee1d.webp']

export default function Side() {
  const RandomHS = random(0, HScreenImgs.length)
  const RandomVS = random(0, VScreenImgs.length)
  return (
    <div className="relative h-full w-full select-none">
      <Menu className="absolute right-2 top-1 z-50" />
      <Image
        src={`/images/${VScreenImgs[RandomVS]}`}
        fill
        className="absolute h-full w-full object-cover"
        alt="vertical screen"
        priority
      />
      <Image
        src={`/images/${HScreenImgs[RandomHS]}`}
        fill
        className="absolute h-full w-full object-cover md:hidden"
        alt="horizontal screen"
        priority
      />
      <div className="absolute top-0 h-full w-full bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImU3IMREAIAgAwJfNkQCEsH8cijjpMf6vnXlQaIiJFx+omEBfmqIEZLe2jzcAAAAASUVORK5CYII=')] object-cover" />
      <div className="absolute bottom-2 left-0 right-0 text-center text-white md:bottom-1/4">
        <h1 className="p-2 text-3xl md:p-4 md:text-4xl">阿琳LycixRemix</h1>
        <div className="flex justify-center">
          <Link href="https://space.bilibili.com/525626978" className="mb-2 px-3 md:mb-4">
            <SiBilibili style={IconStyle} />
          </Link>
          <Link href="https://github.com/LycixRemix" className="mb-2 px-3 md:mb-4">
            <SiGithub style={IconStyle} />
          </Link>
          <Link href="mailto:chengyongliu@foxmail.com" className="mb-2 px-3 md:mb-4">
            <SiGmail style={IconStyle} />
          </Link>
          <Link href="https://twitter.com/ALinQuestion" className="mb-2 px-3 md:mb-4">
            <SiTwitter style={IconStyle} />
          </Link>
        </div>
        <h4 className="p-2 pt-0 md:text-2xl">生活其实很简单，过了今天就是明天！</h4>
      </div>
    </div>
  )
}
